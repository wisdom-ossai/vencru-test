import React from "react";

const PageSpinner = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div
        className="spinner-border animate-spin inline-block w-12 h-12 border-2 border-l-primary-700 border-r-primary-700 border-t-primary-700 rounded-full"
        role="status"
      >
        <span className="hidden">Loading...</span>
      </div>
    </div>
  );
};

export default PageSpinner;
