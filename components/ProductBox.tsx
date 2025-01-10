import React from "react";

export const ProductBox = ({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => (
  <a
    href={link}
    className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
  >
    <div className="text-purple-400 mb-2">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </a>
);
