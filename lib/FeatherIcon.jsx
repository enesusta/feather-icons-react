import React from "react";
import IconInner from "./IconInner";

const FeatherIcon = ({
  icon,
  size = 24,
  className = "",
  fill = "none",
  strokeWidth = 2,
  ...otherProps
}) => {
  if (!icon) {
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-${icon} ${className}`}
      {...otherProps}
    >
      <IconInner icon={icon} />
    </svg>
  );
};

export default FeatherIcon;
