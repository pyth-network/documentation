import { useState, useEffect } from "react";
import { TextField, Select, MenuItem, Box } from "@mui/material";
import { HermesClient } from "@pythnetwork/hermes-client";
import { Table, Td, Th, Tr, CopyToClipboard } from "nextra/components";

interface PriceFeed {
  id: string;
  name: string;
  assetType: string;
}

export function PriceFeedTable() {
  const [priceFeeds, setPriceFeeds] = useState<PriceFeed[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAssetType, setSelectedAssetType] = useState("All");

  // enum AssetTypesStateType {
  //   NotLoaded,
  //   Loading,
  //   Loaded,
  //   Error,
  // }

  // const AssetTypesState = {
  //   NotLoaded: () => ({ type: AssetTypesStateType.NotLoaded as const }),
  //   Loading: () => ({ type: AssetTypesStateType.Loading as const }),
  //   Loaded: (assetTypes: string[]) => ({
  //     type: AssetTypesStateType.Loaded as const,
  //     assetTypes,
  //   }),
  //   Error: (error: unknown) => ({
  //     type: AssetTypesStateType.Error as const,
  //     error,
  //   }),
  // };

  const fetchAssetTypes = async () => {
    const hermesClient = new HermesClient("https://hermes.pyth.network");
    const feeds = await hermesClient.getPriceFeeds();
    return Array.from(
      new Set(feeds.map((feed) => feed.attributes.asset_type ?? ""))
    );
  };

  // const useAssetTypes = (): typeof AssetTypesState => {
  //   const [assetTypes, setAssetTypes] = useState<typeof AssetTypesState>(
  //     AssetTypesState.NotLoaded()
  //   );

  //   useEffect(() => {
  //     setAssetTypes(AssetTypesState.Loading());
  //   }, []);

  //   return assetTypes;
  // };

  // type AssetTypesSelectorProps = {
  //   selectedAssetType: string;
  //   setSelectedAssetType: (assetType: string) => void;
  // };

  // const AssetTypesSelector = ({
  //   selectedAssetType,
  //   setSelectedAssetType,
  // }: AssetTypesSelectorProps) => {
  //   const assetTypes = useAssetTypes();
  // };

  useEffect(() => {
    const fetchPriceFeeds = async () => {
      const hermesClient = new HermesClient("https://hermes.pyth.network");
      const feeds = await hermesClient.getPriceFeeds();
      const transformedFeeds = feeds.map((feed) => ({
        id: feed.id,
        name: feed.attributes.display_symbol || "",
        assetType: feed.attributes.asset_type || "",
      }));
      setPriceFeeds(transformedFeeds);
    };

    fetchPriceFeeds();
  }, []);

  const filteredData = priceFeeds.filter((feed) => {
    const matchesSearch =
      feed.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feed.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAssetType =
      selectedAssetType === "All" || feed.assetType === selectedAssetType;
    return matchesSearch && matchesAssetType;
  });
  return (
    <Box>
      <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
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
          {Array.from(new Set(priceFeeds.map((feed) => feed.assetType))).map(
            (type) => (
              <MenuItem key={type} value={type}>
                {type || "Uncategorized"}
              </MenuItem>
            )
          )}
        </Select>
      </Box>

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
              <Td>{feed.name}</Td>
              <Td>{feed.assetType}</Td>
              <Td>
                {feed.id}
                <CopyToClipboard getValue={() => feed.id} />
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
}
