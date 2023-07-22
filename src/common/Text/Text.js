import React from "react";
import "./Text.css";

function Text({ text, variant }) {
  const getStyle = (type) => {
    switch (type) {
      case "h1":
        return "text-h1";
      case "h2":
        return "";
      case "h3":
        return "text-h3";
      case "h4":
        return "text-h4";
      case "bold-p":
        return "text-bold-p";
      case "p1":
        return "";
      case "p2":
        return "text-p2";
      default:
        return null;
    }
  };

  return <p className={getStyle(variant)}>{text}</p>;
}

export default Text;
