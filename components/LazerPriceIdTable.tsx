import { useEffect, useState } from "react";
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

export function LazerPriceIdTable() {
  const lazerPriceIdState = useLazerPriceIdState();

  switch (lazerPriceIdState.type) {
    case LazerPriceIdStateType.NotLoaded:
      return <div>Loading...</div>;
    case LazerPriceIdStateType.Loading:
      return <Spinner />;
    case LazerPriceIdStateType.Loaded:
      return (
        <table>
          <thead>
            <tr>
              <th>Asset Type</th>
              <th>Description</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Pyth Lazer Id</th>
              <th>Exponent</th>
            </tr>
          </thead>
          <tbody>
            {lazerPriceIdState.priceFeeds.map((priceFeed) => (
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
      );
    case LazerPriceIdStateType.Error:
      return <div>Error</div>;
  }
}
