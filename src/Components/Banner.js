import React from "react";

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h2>{title}</h2>
      <div></div>
      <h5>{subtitle}</h5>
      {children}
    </div>
  );
}
