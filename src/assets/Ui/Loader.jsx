import React from "react";

export default function Loader() {
  return (
    <div className="absolute overflow-y-hidden inset-0 z-50 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}
