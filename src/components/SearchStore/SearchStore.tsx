import React from "react";

const SearchStore = () => {
  return (
    <>
      <input
        type="text"
        id="search"
        placeholder="search"
        style={{
          width: "200px",
          height: "40px",
          border: "1px solid #d7d7d7",
          borderRadius: "24px",
          padding: "8px 12px",
        }}
      />
    </>
  );
};

export default SearchStore;
