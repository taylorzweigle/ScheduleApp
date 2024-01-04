//Taylor Zweigle, 2024
import React from "react";

const Typography = ({ children, variant, color }) => {
  const getVariant = (variant) => {
    let variantStyle = "text-base";

    switch (variant) {
      case "caption":
        variantStyle = "text-sm";
        break;
      case "body":
        variantStyle = "text-base";
        break;
      case "heading":
        variantStyle = "text-lg";
        break;
      case "title":
        variantStyle = "text-2xl";
        break;
      default:
        throw Error(`Component does not support ${variant} style`);
    }

    return variantStyle;
  };

  const getColor = (color) => {
    let colorStyle = "text-slate-950 dark:text-white";

    switch (color) {
      case "textPrimary":
        colorStyle = "text-slate-950 dark:text-white";
        break;
      case "textAccent":
        colorStyle = "text-sky-500";
        break;
      case "white":
        colorStyle = "text-white";
        break;
      default:
        throw Error(`Component does not suport ${color} style`);
    }

    return colorStyle;
  };

  return (
    <p
      className={`${variant ? getVariant(variant) : "text-base"} ${color ? getColor(color) : "text-slate-950 dark:text-white"}`}
    >
      {children}
    </p>
  );
};

export default Typography;
