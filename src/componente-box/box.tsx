import React from "react";

type BoxProps ={
  children: React.ReactNode;
};

function Box(props: BoxProps) {
  return (
    <div
      style={{
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "black",
        padding: 20,
      }}
    >
      {props.children}
    </div>
  );
}

export default Box;
