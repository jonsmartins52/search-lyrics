import React from "react";
import { ThreeCircles } from "react-loader-spinner";

// import { Container } from './styles';

interface Props {
  isSpinnerActive: boolean;
}

const Spinner = ({ isSpinnerActive }: Props) => {
  return (
    <>
      {isSpinnerActive && (
        <div className="spinner-loader">
          <ThreeCircles color="#8d56fd" width={"30%"} />
        </div>
      )}
    </>
  );
};

export default Spinner;
