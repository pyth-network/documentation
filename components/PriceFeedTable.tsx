import { useState, useCallback } from "react";
import { StyledTd } from "./Table";

interface PriceFeed {
  ids: string;
  assetType: string;
  name: string;
}

interface TableColumnWidths {
  assetType: string;
  name: string;
  ids: any;
}

const columnWidths: TableColumnWidths = {
  assetType: "w-3/10",
  name: "w-1/5",
  ids: "w-1/2",
};

const PriceFeedTable = ({ priceFeeds }: { priceFeeds: PriceFeed[] }) => {
  const [selectedAssetType, setSelectedAssetType] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const assetTypes = [
    "All",
    ...Array.from(new Set(priceFeeds.map((feed) => feed.assetType))),
  ];

  const filteredFeeds =
    selectedAssetType === "All"
      ? priceFeeds
      : priceFeeds.filter((feed) => feed.assetType === selectedAssetType);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedId(text);
        setTimeout(() => setCopiedId(null), 2000); // Hide the popup after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }, []);

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="assetTypeFilter" className="mr-2">
          Filter by Asset Type:
        </label>
        <select
          id="assetTypeFilter"
          value={selectedAssetType}
          onChange={(e) => setSelectedAssetType(e.target.value)}
          className="p-2 border rounded"
        >
          {assetTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th className={columnWidths.assetType}>Asset Type</th>
            <th className={columnWidths.name}>Name</th>
            <th className={columnWidths.ids}>Feed ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeeds.map((feed, index) => (
            <tr key={index}>
              <StyledTd>{feed.assetType}</StyledTd>
              <StyledTd>{feed.name}</StyledTd>
              <StyledTd>
                <div className="relative">
                  <button
                    onClick={() => copyToClipboard(feed.ids)}
                    className="flex items-center space-x-2 px-2 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-darkGray2 dark:hover:bg-darkGray3 rounded transition duration-200"
                  >
                    <code className="dark:text-darkLinks text-lightLinks dark:bg-darkGray2 bg-gray-100 px-2 py-1 rounded">
                      {feed.ids}
                    </code>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  {copiedId === feed.ids && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow">
                      Copied to clipboard
                    </div>
                  )}
                </div>
              </StyledTd>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceFeedTable;
