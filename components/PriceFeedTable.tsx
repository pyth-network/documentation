import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Select,
  MenuItem,
  Box,
  Snackbar,
} from "@mui/material";
import { HermesClient } from "@pythnetwork/hermes-client";
import copy from "copy-to-clipboard";

interface PriceFeed {
  id: string;
  name: string;
  assetType: string;
}

export function PriceFeedTable() {
  const [priceFeeds, setPriceFeeds] = useState<PriceFeed[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAssetType, setSelectedAssetType] = useState("All");
  const [openSnackbar, setOpenSnackbar] = useState(false);

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

  const handleCopy = (id: string) => {
    copy(id);
    setOpenSnackbar(true);
  };

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
        <TableHead>
          <TableRow>
            <TableCell>Ticker</TableCell>
            <TableCell>Asset Type</TableCell>
            <TableCell>Feed ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((feed) => (
            <TableRow key={feed.id}>
              <TableCell>{feed.name}</TableCell>
              <TableCell>{feed.assetType}</TableCell>
              <TableCell
                onClick={() => handleCopy(feed.id)}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#BB86FC",
                  },
                }}
              >
                {feed.id}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        message="Feed ID copied to clipboard"
      />
    </Box>
  );
}
