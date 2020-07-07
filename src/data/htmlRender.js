import React from "react";

// decode render html - https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js
const renderHTML = rawHTML =>
  React.createElement("div", {
    dangerouslySetInnerHTML: { __html: rawHTML }
  });

export default renderHTML;
