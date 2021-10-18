import * as React from "react"
import Sketch from "react-p5";

import Seo from "../components/seo"
import artMetadata from "../components/artImages";

const stitchSettings = {
  width: 12,
  height: 12,
};

const IndexPage = () => {
  let artPieces = [...artMetadata];
  let selcImg = null;
  let stitches = [];

  const preload = (p5) => {
    artPieces.forEach((artPiece) => {
      const img = p5.loadImage(artPiece.image);
      artPiece.p5Image = img;
    });
  }

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(1920, 1080).parent(canvasParentRef);
    let zLayer = 0;
    artPieces.forEach((artPiece) => {
      artPiece.p5Image.resize(200,0);
      artPiece.left = p5.random(0, 1720);
      artPiece.top = p5.random(0, 880);
      artPiece.right = artPiece.left + artPiece.p5Image.width;
      artPiece.bottom = artPiece.top + artPiece.p5Image.height;
      artPiece.offsetX = 0;
      artPiece.offsetY = 0;
      artPiece.z = zLayer;
      zLayer++;
      p5.image(artPiece.p5Image, artPiece.left, artPiece.top);
    });
  };

  const draw = (p5) => {
    p5.background(255);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    artPieces.forEach((artPiece) => {
      if (artPiece === selcImg) {
        artPiece.left = p5.mouseX - artPiece.offsetX;
        artPiece.top = p5.mouseY + artPiece.offsetY;
        artPiece.right = p5.mouseX  - artPiece.offsetX + artPiece.p5Image.width;
        artPiece.bottom = p5.mouseY + artPiece.offsetY + artPiece.p5Image.height;
      }
      p5.image(artPiece.p5Image, artPiece.left, artPiece.top);
    });

    stitches.forEach((singleStitch) => {
      stitch(p5, singleStitch.x, singleStitch.y, singleStitch.width, singleStitch.height);
    })
    stitch(p5, 100, 10, 800, null);
    stitch(p5, 100, 100, null, 800);
  };

  const mousePressed = (p5) => {
    let mouseCurrentlyOver = [];
    artPieces.forEach((artPiece) => {
      if (p5.mouseX > artPiece.left && p5.mouseX < (artPiece.left + artPiece.p5Image.width)) {
        if (p5.mouseY > artPiece.top && p5.mouseY < (artPiece.top + artPiece.p5Image.height)) {
          mouseCurrentlyOver.push(artPiece);
        }
      }
    });

    if (mouseCurrentlyOver.length > 1) {
      let highestZ = -1;
      let highestZPiece = null;
      mouseCurrentlyOver.forEach((artPiece) => {
        if (artPiece.z > highestZ) {highestZ = artPiece.z; highestZPiece = artPiece}
      });
      if (highestZ !== -1 && highestZPiece) {
        selcImg = highestZPiece;
        selcImg.offsetX = p5.mouseX - selcImg.left;
        selcImg.offsetY = selcImg.top - p5.mouseY;
      }
    } else if (mouseCurrentlyOver.length === 1) {
      selcImg = mouseCurrentlyOver[0];
      selcImg.offsetX = p5.mouseX - selcImg.left;
      selcImg.offsetY = selcImg.top - p5.mouseY;
    } else {
      selcImg = null;
    }
  }

  const mouseReleased = (p5) => {
    selcImg = null;
  }

  const keyPressed = (p5) => {
    if (p5.keyCode === 13) {
      artPieces.forEach((artPiece) => {
        artPiece.forEach((artPiece2)=> {
          // If these are within the stitching width
          if (Math.abs(artPiece.left - artPiece2.right) < (stitchSettings.width/2)) {
            if (artPiece.top < artPiece2.top && artPiece.top > artPiece2.bottom) {

            }
            if (artPiece.bottom < artPiece2.top && artPiece.bottom > artPiece2.bottom) {

            }
          }
          if (Math.abs(artPiece.right - artPiece2.left) < (stitchSettings.width/2)) {
            if (artPiece.top - artPiece2.bottom) {

            }
          }
          // These are within the stitching height of each other
          if (Math.abs(artPiece.top - artPiece2.bottom) < (stitchSettings.height/2)) {

          }
          if (Math.abs(artPiece.bottom - artPiece2.top) < (stitchSettings.height/2)) {

          }
        })
      })
    }
  }

  const stitch = (p5, x, y, width, height) => {
    if (height && width === null) {
      let dy = y;
      const num = height / stitchSettings.height;
      for (let i = 0; i < num; i++) {
        p5.line(x, dy, x + stitchSettings.width, dy + stitchSettings.height);
        p5.line(x, dy + stitchSettings.height, x + stitchSettings.width, dy);
        p5.stroke(0);
        p5.strokeWeight(1);
        dy += stitchSettings.height;
      }
    } else if (width && height === null) {
      let dx = x;
      const num = width / stitchSettings.width;
      for (let i = 0; i < num; i++) {
        p5.line(dx, y, dx + stitchSettings.width, y + stitchSettings.height);
        p5.line(dx, y + stitchSettings.height, dx + stitchSettings.width, y);
        p5.stroke(0);
        p5.strokeWeight(1);
        dx += stitchSettings.width;
      }
    }
  }

  return(
      <div>
        <Seo title="Home" />
        <Sketch
            setup={setup}
            draw={draw}
            preload={preload}
            mousePressed={mousePressed}
            mouseReleased={mouseReleased}
            keyPressed={keyPressed}
        />
      </div>
  )
}


export default IndexPage
