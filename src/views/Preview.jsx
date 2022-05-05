import React from "react";
import { Link } from "react-router-dom";

const previewDemo = [
  {
    img: "2",
    title: "Light Demo",
    routerPath: "/home-light",
    delayAnimation: "",
  },
  {
    img: "3",
    title: "Dark Demo",
    routerPath: "/home-dark",
    delayAnimation: "50",
  },
];

const Preview = () => {
  document.body.classList.add("light");
  return (
    <></>
  );
};

export default Preview;
