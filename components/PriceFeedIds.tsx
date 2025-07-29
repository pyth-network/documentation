import {
  useState,
  useEffect,
  useRef,
  useCallback,
  ChangeEvent,
  useMemo,
} from "react";
import { z } from "zod";
import { getPriceFeedAccountForProgram } from "@pythnetwork/pyth-solana-receiver";
import CopyAddress from "./CopyAddress";
import { Callout, Table, Th, Td, Tr } from "nextra/components";

export const PriceFeedIds = () => {
  const isLoading = useRef(false);
  const [state, setState] = useState<State>(State.NotLoaded());

  useEffect(() => {
    if (!isLoading.current) {
      setState(State.Loading());
      isLoading.current = true;
      getFeeds()
        .then((feeds) => setState(State.Loaded(feeds)))
        .catch((error) => setState(State.Error(error)));
    }
  }, []);

  switch (state.type) {
    case StateType.Loading:
    case StateType.NotLoaded: {
      return <div className="w-full text-center my-10">Loading...</div>;
    }
    case StateType.Error: {
      console.error(state.error);
      return <Callout type="error">{errorToString(state.error)}</Callout>;
    }
    case StateType.Loaded: {
      return <LoadedResults feeds={state.feeds} />;
    }
  }
};

const LoadedResults = ({
  feeds,
}: {
  feeds: Awaited<ReturnType<typeof getFeeds>>;
}) => {
  const [search, setSearch] = useState("");
  const updateSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);
  const filteredFeeds = useMemo(
    () =>
      feeds.filter((feed) =>
        feed.symbol.toLowerCase().includes(search.toLowerCase())
      ),
    [feeds, search]
  );

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full"
        value={search}
        onChange={updateSearch}
      />
      {filteredFeeds.length === 0 ? (
        <Callout type="info">No results for {search}</Callout>
      ) : (
        <div className="mt-4 max-h-[1200px] overflow-auto">
          <Table>
            <thead>
              <tr>
                <Th className="!font-semibold !text-right">Symbol</Th>
                <Th>Stable Price Feed ID</Th>
                <Th>Beta Price Feed ID</Th>
                <Th>Solana Price Feed Account</Th>
              </tr>
            </thead>
            <tbody>
              {filteredFeeds.map(
                ({
                  symbol,
                  betaFeedId,
                  solanaPriceFeedAccount,
                  stableFeedId,
                }) => (
                  <Tr key={symbol}>
                    <Td className="font-semibold text-right !text-xs">
                      {symbol}
                    </Td>
                    <Td>
                      {stableFeedId && (
                        <CopyAddress alwaysTruncate address={stableFeedId} />
                      )}
                    </Td>
                    <Td>
                      {betaFeedId && (
                        <CopyAddress alwaysTruncate address={betaFeedId} />
                      )}
                    </Td>
                    <Td>
                      {solanaPriceFeedAccount && (
                        <CopyAddress
                          alwaysTruncate
                          address={solanaPriceFeedAccount}
                        />
                      )}
                    </Td>
                  </Tr>
                )
              )}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

const errorToString = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    return "An error occurred, please try again";
  }
};

enum StateType {
  NotLoaded,
  Loading,
  Loaded,
  Error,
}

const State = {
  NotLoaded: () => ({ type: StateType.NotLoaded as const }),
  Loading: () => ({ type: StateType.Loading as const }),
  Loaded: (feeds: Awaited<ReturnType<typeof getFeeds>>) => ({
    type: StateType.Loaded as const,
    feeds,
  }),
  Error: (error: unknown) => ({ type: StateType.Error as const, error }),
};
type State = ReturnType<typeof State[keyof typeof State]>;

const getFeeds = async () => {
  const [pythnet, pythtest] = await Promise.all([
    getFeedsFromHermes("https://hermes.pyth.network"),
    getFeedsFromHermes("https://hermes-beta.pyth.network"),
  ]);

  const feeds = new Map<
    string,
    {
      stableFeedId?: string;
      betaFeedId?: string;
      solanaPriceFeedAccount?: string;
    }
  >();

  for (const feed of pythnet) {
    feeds.set(feed.attributes.symbol, {
      stableFeedId: `0x${feed.id}`,
      solanaPriceFeedAccount: getPriceFeedAccountForProgram(
        0,
        Buffer.from(feed.id, "hex")
      ).toBase58(),
    });
  }
  for (const feed of pythtest) {
    feeds.set(feed.attributes.symbol, {
      ...feeds.get(feed.attributes.symbol),
      betaFeedId: `0x${feed.id}`,
    });
  }

  return [...feeds.entries()]
    .toSorted((a, b) => a[0].localeCompare(b[0]))
    .map(([symbol, attrs]) => ({ symbol, ...attrs }));
};

const getFeedsFromHermes = async (hermesUrl: string) => {
  const result = await fetch(new URL("/v2/price_feeds", hermesUrl));
  return hermesSchema.parse(await result.json());
};

const hermesSchema = z.array(
  z.object({
    id: z.string(),
    attributes: z.object({ symbol: z.string() }),
  })
);
