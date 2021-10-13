import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Sketch from "react-p5";

import Layout from "../components/layout"
import Seo from "../components/seo"
import artMetadata from "../images/imageDescriptions.json"

let x = 50;
let y = 50;
const IndexPage = () => {
  console.log(images);
  artMetadata.art.forEach((art) => {
  })
  const preload = (p5) => {
    artMetadata.art.forEach((artPiece) => {

    })
  }
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    //p5.createCanvas(1920, 1080).parent(canvasParentRef);
    artMetadata.art.forEach((artPiece) => {

    })
  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++;
  };

  return(
      <div>
        <Seo title="Home" />
        <Sketch setup={setup} draw={draw} preload={preload}/>;
      </div>
  )
}


export default IndexPage
