import { CircularProgress } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <CircularProgress size={100} sx={{ color: "#8f0000" }} />
    </div>
  );
};

export default Spinner;
