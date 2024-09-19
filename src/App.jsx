import { useState } from "react";
import React from "react";

function App() {
  const [image, setImage] = useState("");

  const [blur, setBlur] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderColor, setBorderColor] = useState("#000000");
  const [grayscale, setGrayscale] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);

  const handleImage = (e) => {
    const file = e.target.files[0]; 

    if (file) {
      console.log("File selected:", file); 
      const reader = new FileReader();
      
      reader.onload = () => {
        console.log("Image URL:", reader.result); 
        setImage(reader.result); 
      };

      reader.readAsDataURL(file); 
    }
  };

  
  const imageStyles = {
    filter: `blur(${blur}px) grayscale(${grayscale}%) brightness(${brightness}%) contrast(${contrast}%)`,
    borderRadius: `${borderRadius}px`,
    borderWidth: `${borderWidth}px`,
    borderColor: borderColor,
    borderStyle: "solid",
    maxWidth: "100%", 
    height: "auto",   
  };

  return (
    <>
      <div className="bg-black px-4 py-3 items-center justify-center flex-col h-screen">
        <div className="w-full h-8 bg-zinc-950 text-white rounded-lg p-4 items-center justify-center flex">
          Photo Editor
        </div>

        <div className="w-full h-3/4 my-4 bg-zinc-950 justify-center flex items-center">
          
          {image ? (
            <img src={image} style={imageStyles} alt="Uploaded" />
          ) : (
            <input type="file" onChange={handleImage} /> 
          )}
        </div>

        
        <div className="fixed w-full gap-5 bg-zinc-950 justify-around items-center flex rounded-lg px-4 py-3">
          <div className="flex-col items-center">
            <p className="text-white">Blur</p>
            <input
              type="range"
              min="0"
              max="100"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
            />
          </div>
          <div className="flex-col items-center">
            <p className="text-white">Border Radius</p>
            <input
              type="range"
              min="0"
              max="100"
              value={borderRadius}
              onChange={(e) => setBorderRadius(e.target.value)}
            />
          </div>
          <div className="flex-col items-center">
            <p className="text-white">Border Width</p>
            <input
              type="range"
              min="0"
              max="100"
              value={borderWidth}
              onChange={(e) => setBorderWidth(e.target.value)}
            />
          </div>
          <div className="flex-col items-center">
            <p className="text-white">Border Color</p>
            <input
              type="color"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
            />
          </div>
          <div className="flex-col items-center">
            <p className="text-white">Grayscale</p>
            <input
              type="range"
              min="0"
              max="100"
              value={grayscale}
              onChange={(e) => setGrayscale(e.target.value)}
            />
          </div>
          <div className="flex-col items-center">
            <p className="text-white">Brightness</p>
            <input
              type="range"
              min="0"
              max="200"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
            />
          </div>
          <div className="flex-col items-center">
            <p className="text-white">Contrast</p>
            <input
              type="range"
              min="0"
              max="200"
              value={contrast}
              onChange={(e) => setContrast(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
