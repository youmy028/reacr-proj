import React from "react";

function Alert({ color: color_, children }) {
  const color = color_ ?? "white";
  return (
    <div className="alert alert-info shadow-lg">
      <div className={`text-[${color}]`}>
        <span>
          <i className="fa-solid fa-circle-info"></i>
        </span>
        <span>{children}</span>
      </div>
    </div>
  );
}

function Notice() {
  return (
    <>
      <Alert>"안녕" 반가워</Alert>
      <br />
      <Alert color="pink">지금은 수업중이야</Alert>
    </>
  );
}

export default Notice;