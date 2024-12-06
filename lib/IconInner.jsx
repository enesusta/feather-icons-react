import React from "react";
import icons from "./icons.json";

const createMarkup = (markup) => {
  return { __html: markup };
};

const IconInner = ({ icon }) => {
  const iconMarkup = icons[icon];
  return iconMarkup ? (
    <g dangerouslySetInnerHTML={createMarkup(iconMarkup)} />
  ) : null;
};

export default IconInner;
