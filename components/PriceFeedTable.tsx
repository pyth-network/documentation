import { useState, useEffect } from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import { HermesClient, PriceFeedMetadata } from "@pythnetwork/hermes-client";
import { Table, Td, Th, Tr, CopyToClipboard } from "nextra/components";

const fetchStablePriceFeeds = async () => {
  const priceFeeds = await new HermesClient(
    "https://hermes.pyth.network"
  ).getPriceFeeds();
  const assetTypes = Array.from(
    new Set(priceFeeds.map((feed) => feed.attributes.asset_type ?? ""))
  );
  console.log(priceFeeds);
  return { priceFeeds, assetTypes };
};

const fetchBetaPriceFeeds = async () => {
  const priceFeeds = await new HermesClient(
    "https://hermes-beta.pyth.network"
  ).getPriceFeeds();
  const assetTypes = Array.from(
    new Set(priceFeeds.map((feed) => feed.attributes.asset_type ?? ""))
  );
  console.log(priceFeeds);
  return { priceFeeds, assetTypes };
};

type AssetTypesSelectorProps = {
  priceFeedsState: PriceFeedsState;
  selectedAssetType: string;
  setSelectedAssetType: (assetType: string) => void;
};

enum PriceFeedsStateType {
  NotLoaded,
  Loading,
  Loaded,
  Error,
}

const PriceFeedsState = {
  NotLoaded: () => ({ type: PriceFeedsStateType.NotLoaded as const }),
  Loading: () => ({ type: PriceFeedsStateType.Loading as const }),
  Loaded: (priceFeeds: PriceFeedMetadata[], assetTypes: string[]) => ({
    type: PriceFeedsStateType.Loaded as const,
    priceFeeds,
    assetTypes,
  }),
  Error: (error: unknown) => ({
    type: PriceFeedsStateType.Error as const,
    error,
  }),
};

type PriceFeedsState = ReturnType<
  typeof PriceFeedsState[keyof typeof PriceFeedsState]
>;

const usePriceFeeds = (): PriceFeedsState => {
  const [priceFeeds, setPriceFeeds] = useState<PriceFeedsState>(
    PriceFeedsState.NotLoaded()
  );

  useEffect(() => {
    setPriceFeeds(PriceFeedsState.Loading());
    fetchStablePriceFeeds()
      .then(({ priceFeeds, assetTypes }) => {
        setPriceFeeds(PriceFeedsState.Loaded(priceFeeds, assetTypes));
      })
      .catch((error) => {
        setPriceFeeds(PriceFeedsState.Error(error));
      });
  }, []);

  return priceFeeds;
};

const AssetTypesSelect = ({
  priceFeedsState,
  selectedAssetType,
  setSelectedAssetType,
}: AssetTypesSelectorProps) => {
  const priceFeeds = usePriceFeeds();

  switch (priceFeeds.type) {
    case PriceFeedsStateType.NotLoaded:
    case PriceFeedsStateType.Loading:
    case PriceFeedsStateType.Error:
      return <p>Error loading asset types</p>;
    case PriceFeedsStateType.Loaded:
      return (
        <Select
          value={selectedAssetType}
          onChange={(e) => setSelectedAssetType(e.target.value)}
          size="small"
          sx={{ width: 200 }}
        >
          <MenuItem value="All">All Asset Types</MenuItem>
          {priceFeeds.assetTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type ?? "Uncategorized"}
            </MenuItem>
          ))}
        </Select>
      );
  }
};

export function PriceFeedTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAssetType, setSelectedAssetType] = useState("All");
  const priceFeedsState = usePriceFeeds();

  <AssetTypesSelect
    priceFeedsState={priceFeedsState}
    selectedAssetType={selectedAssetType}
    setSelectedAssetType={setSelectedAssetType}
  />;

  let filteredData: PriceFeedMetadata[] = [];
  if (priceFeedsState.type === PriceFeedsStateType.Loaded) {
    filteredData = priceFeedsState.priceFeeds.filter((feed) => {
      const matchesSearch =
        feed.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feed.attributes.display_symbol
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      const matchesAssetType =
        selectedAssetType === "All" ||
        feed.attributes.asset_type === selectedAssetType;
      return matchesSearch && matchesAssetType;
    });
  }

  return (
    <>
      <TextField
        label="Search price feeds"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ width: 300 }}
      />
      <Select
        value={selectedAssetType}
        onChange={(e) => setSelectedAssetType(e.target.value)}
        size="small"
        sx={{ width: 200 }}
      >
        <MenuItem value="All">All Asset Types</MenuItem>
        {priceFeedsState.type === PriceFeedsStateType.Loaded &&
          priceFeedsState.assetTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type || "Uncategorized"}
            </MenuItem>
          ))}
      </Select>

      <Table>
        <thead>
          <Tr>
            <Th>Ticker</Th>
            <Th>Asset Type</Th>
            <Th>Feed ID</Th>
          </Tr>
        </thead>
        <tbody>
          {filteredData.map((feed) => (
            <Tr key={feed.id}>
              <Td>{feed.attributes.display_symbol}</Td>
              <Td>{feed.attributes.asset_type}</Td>
              <Td className="font-mono whitespace-nowrap">
                {feed.id}
                <CopyToClipboard className="ml-2" getValue={() => feed.id} />
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
