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
  let doubleClickedImg = null;
  let stitches = [];
  let zLayer = 0;

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
    artPieces.sort((a, b) => (a.z > b.z) ? 1 : -1);
    artPieces.forEach((artPiece) => {
      if (artPiece === selcImg) {
        artPiece.left = p5.mouseX - artPiece.offsetX;
        artPiece.top = p5.mouseY + artPiece.offsetY;
        artPiece.right = p5.mouseX  - artPiece.offsetX + artPiece.p5Image.width;
        artPiece.bottom = p5.mouseY + artPiece.offsetY + artPiece.p5Image.height;
      }
      if (artPiece === doubleClickedImg) {
        artPiece.z = zLayer;
        zLayer++;
        doubleClickedImg = null;
      }
      p5.image(artPiece.p5Image, artPiece.left, artPiece.top);
    });

    stitches.forEach((singleStitch) => {
      stitch(p5, singleStitch.x, singleStitch.y, singleStitch.width, singleStitch.height);
    })
    stitch(p5, 100, 10, 800, null);
    stitch(p5, 100, 100, null, 800);

    if (selcImg) {
      p5.textSize(14);
      p5.text(selcImg.title, p5.mouseX + 10, p5.mouseY)
      p5.text(selcImg.artist, p5.mouseX + 10, p5.mouseY + 16);
      p5.text(selcImg.medium, p5.mouseX + 10, p5.mouseY + 32);
      if (selcImg.description) {
        p5.text(selcImg.description, p5.mouseX + 10, p5.mouseY + 48, 320);
      }
      p5.fill(255);
      p5.stroke(0);
    }
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

  const doubleClicked = (p5) => {
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
        doubleClickedImg = highestZPiece;
      }
    } else if (mouseCurrentlyOver.length === 1) {
      doubleClickedImg = mouseCurrentlyOver[0];
    } else {
      doubleClickedImg = null;
    }
  }

  const mouseReleased = (p5) => {
    selcImg = null;
  }

  const keyPressed = (p5) => {
    if (p5.keyCode === 13) {
      artPieces.forEach((artPiece) => {
        artPiece.forEach((artPiece2)=> {

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
            doubleClicked={doubleClicked}
        />
      </div>
  )
}


export default IndexPage
