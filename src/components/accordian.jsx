import React from "react";

export const Accordian = ({ selectedId, setSelectedId, index }) => {
  const handleClick = (index) => {
    if (selectedId.has(index)) {
      setSelectedId((prevState) => {
        prevState.delete(index);
        return new Set(prevState)
      });
    } else {
      setSelectedId((prevState) => new Set([...prevState, index]));
    }
  };
  console.log(selectedId);
  return (
    <div style={{ width: "500px", margin: "1rem", border: "2px solid black" }}>
      <div
        style={{ cursor: "pointer", fontSize: "16px" }}
        onClick={() => handleClick(index)}
      >
        title {index}
      </div>
      {selectedId?.has(index) ? (
        <div style={{border:"1px solid gray", margin:"5px",padding:"10px"}}>
          hello how are you Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Aspernatur, a nihil, incidunt eligendi aut dolorem et adipisci
          nobis dolorum illum molestias, ullam odit voluptas error ut? Ipsam
          nihil quos aliquid.
        </div>
      ) : null}
    </div>
  );
};
