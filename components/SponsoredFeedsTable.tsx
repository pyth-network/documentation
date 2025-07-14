import { useState } from "react";
import CopyIcon from "./icons/CopyIcon";
import { mapValues } from "../utils/ObjectHelpers";

interface SponsoredFeed {
  name: string;
  priceFeedId: string;
  updateParameters: string;
}

interface SponsoredFeedsTableProps {
  feeds: SponsoredFeed[];
  networkName: string;
}

export const SponsoredFeedsTable = ({
  feeds,
  networkName,
}: SponsoredFeedsTableProps) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(text);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Calculate parameter statistics
  const paramCounts = mapValues(
    Object.groupBy(feeds, (feed) => feed.updateParameters),
    (feeds: SponsoredFeed[]) => feeds.length
  );

  const defaultParams = Object.entries(paramCounts).sort(
    ([, a], [, b]) => b - a
  )[0][0];

  // CSS max-h-96 will handle scrolling automatically

  return (
    <div className="my-6">
      <p className="mb-3">
        The price feeds listed in the table below are currently sponsored in{" "}
        <strong>{networkName}</strong>.
      </p>

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
        {/* Summary bar */}
        <div className="bg-blue-50 dark:bg-blue-900/20 px-3 py-2 border-b border-gray-200 dark:border-gray-600">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium">Default:</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: defaultParams.replace("<br/>", " / "),
                }}
              />
              <span className="text-gray-500">
                ({paramCounts[defaultParams]})
              </span>
            </div>
            {Object.entries(paramCounts)
              .filter(([params]) => params !== defaultParams)
              .map(([params, count]) => (
                <div key={params} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="font-medium">Exception:</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: params.replace("<br/>", " / "),
                    }}
                  />
                  <span className="text-gray-500">({count})</span>
                </div>
              ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="overflow-y-auto max-h-96">
            <table className="w-full text-sm min-w-full">
              <thead className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-30">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 min-w-[100px]">
                    Name
                  </th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 min-w-[400px]">
                    Price Feed Id
                  </th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 min-w-[200px]">
                    Update Parameters
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900">
                {feeds.map((feed, index) => {
                  const isDefault = feed.updateParameters === defaultParams;
                  const prevFeed = feeds[index - 1];
                  const isFirstInGroup =
                    !prevFeed ||
                    prevFeed.updateParameters !== feed.updateParameters;

                  return (
                    <tr
                      key={feed.priceFeedId}
                      className={`border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/30 ${
                        isFirstInGroup
                          ? "sticky top-12 bg-white dark:bg-gray-900 z-20 shadow-sm"
                          : ""
                      }`}
                    >
                      <td className="px-3 py-2 align-top">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {feed.name}
                        </span>
                      </td>
                      <td className="px-3 py-2 align-top">
                        <div className="flex items-start gap-2">
                          <code className="text-xs font-mono text-gray-600 dark:text-gray-400 flex-1 break-all leading-relaxed">
                            {feed.priceFeedId}
                          </code>
                          <button
                            onClick={() => copyToClipboard(feed.priceFeedId)}
                            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded flex-shrink-0 mt-0.5"
                            title="Copy Price Feed ID"
                          >
                            {copiedId === feed.priceFeedId ? (
                              <span className="text-green-500 text-xs font-bold">
                                ✓
                              </span>
                            ) : (
                              <CopyIcon className="w-3 h-3 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-3 py-2 align-top">
                        {isFirstInGroup ? (
                          <div className="flex items-start gap-1.5">
                            <div
                              className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${
                                isDefault ? "bg-green-500" : "bg-orange-500"
                              }`}
                            ></div>
                            <span
                              className={`text-xs leading-relaxed font-medium ${
                                isDefault
                                  ? "text-gray-700 dark:text-gray-300"
                                  : "text-orange-600 dark:text-orange-400"
                              }`}
                              dangerouslySetInnerHTML={{
                                __html: feed.updateParameters,
                              }}
                            />
                          </div>
                        ) : (
                          <div className="flex items-start gap-1.5 text-gray-400 text-xs">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                            <span>Same as above</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
