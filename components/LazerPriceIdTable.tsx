import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { StyledTd } from "./Table";
import { Spinner } from "./Spinner";
const fetchLazerPriceIdMetadata = async () => {
  const response = await fetch(
    "https://history.pyth-lazer.dourolabs.app/history/v1/symbols"
  );
  const data = await response.json();
  return data;
};

type LazerPriceIdMetadata = {
  asset_type: string;
  description: string;
  exponent: number;
  name: string;
  pyth_lazer_id: number;
  symbol: string;
};

enum LazerPriceIdStateType {
  NotLoaded,
  Loading,
  Loaded,
  Error,
}

const LazerPriceIdState = {
  NotLoaded: () => ({ type: LazerPriceIdStateType.NotLoaded as const }),
  Loading: () => ({ type: LazerPriceIdStateType.Loading as const }),
  Loaded: (priceFeeds: LazerPriceIdMetadata[]) => ({
    type: LazerPriceIdStateType.Loaded as const,
    priceFeeds,
  }),
  Error: (error: unknown) => ({
    type: LazerPriceIdStateType.Error as const,
    error,
  }),
};

type LazerPriceIdState = ReturnType<
  typeof LazerPriceIdState[keyof typeof LazerPriceIdState]
>;

const useLazerPriceIdState = () => {
  const [state, setState] = useState<LazerPriceIdState>(
    LazerPriceIdState.NotLoaded()
  );

  useEffect(() => {
    setState(LazerPriceIdState.Loading());
    fetchLazerPriceIdMetadata()
      .then((priceFeeds) => setState(LazerPriceIdState.Loaded(priceFeeds)))
      .catch((error) => setState(LazerPriceIdState.Error(error)));
  }, []);

  return state;
};

const LoadedLazerPriceIdTable = ({
  priceFeeds,
}: {
  priceFeeds: LazerPriceIdMetadata[];
}) => {
  const [search, setSearch] = useState("");

  const updateSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  const filteredFeeds = useMemo(() => {
    const searchTerms = search
      .split(/[,\s]+/)
      .map((term) => term.trim().toLowerCase())
      .filter((term) => term.length > 0);

    if (searchTerms.length === 0) {
      return priceFeeds;
    }

    return priceFeeds.filter((feed) => {
      return searchTerms.some((searchTerm) => {
        return (
          feed.symbol.toLowerCase().includes(searchTerm) ||
          feed.name.toLowerCase().includes(searchTerm) ||
          feed.description.toLowerCase().includes(searchTerm) ||
          feed.pyth_lazer_id.toString().includes(searchTerm)
        );
      });
    });
  }, [priceFeeds, search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by symbol, name, description, or pyth pro id (comma or space separated for multiple)..."
        value={search}
        onChange={updateSearch}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />
      <table>
        <thead>
          <tr>
            <th>Asset Type</th>
            <th>Description</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Pyth Pro Id</th>
            <th>Exponent</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeeds.map((priceFeed) => (
            <tr key={priceFeed.symbol}>
              <StyledTd>{priceFeed.asset_type}</StyledTd>
              <StyledTd>{priceFeed.description}</StyledTd>
              <StyledTd>{priceFeed.name}</StyledTd>
              <StyledTd>{priceFeed.symbol}</StyledTd>
              <StyledTd>{priceFeed.pyth_lazer_id}</StyledTd>
              <StyledTd>{priceFeed.exponent}</StyledTd>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export function LazerPriceIdTable() {
  const lazerPriceIdState = useLazerPriceIdState();

  switch (lazerPriceIdState.type) {
    case LazerPriceIdStateType.NotLoaded:
      return <div>Loading...</div>;
    case LazerPriceIdStateType.Loading:
      return <Spinner />;
    case LazerPriceIdStateType.Loaded:
      return (
        <LoadedLazerPriceIdTable priceFeeds={lazerPriceIdState.priceFeeds} />
      );
    case LazerPriceIdStateType.Error:
      return <div>Error</div>;
  }
}
