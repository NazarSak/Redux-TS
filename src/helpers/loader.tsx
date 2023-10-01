import React from "react";
import { RotatingLines } from "react-loader-spinner";

export const Spinner: React.FC = () => {
  return (
    <>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </>
  );
};
