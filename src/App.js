import { useState } from "react";
import "./App.css";
import html2canvas from 'html2canvas'

function App() {
  const [isHidden, setHidden] = useState(false);
  const [urlLC, setUrlLC] = useState("/img/loiChua/LC01.jpg");

  const handleOnClick = () => {
    let random = Math.floor(Math.random() * 20);
    if (random === 0) random += 1;
    console.log("random", random);
    if (random < 10) setUrlLC(`/img/loiChua/LC0${random}.jpg`);
    else setUrlLC(`/img/loiChua/LC${random}.jpg`);
    setHidden(!isHidden);
  };

  const handleDownload = () => {
    const screenshortTarget = document.getElementById('LoiChua');

    html2canvas(screenshortTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      var anchor = document.createElement('a');
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "LoiChua2023.png");
      anchor.click();
      anchor.remove();
    })
  }
  return (
    <div className="w-screen h-screen lg:bg-pc lg:bg-cover lg:bg-no-repeat ss:bg-mb ss:bg-cover ss:bg-no-repeat flex flex-col justify-around items-center lg:pt-10 ss:pt-32">
      <div
        className="ss:w-[70vw] ss:h-[10vh] 
          lg:w-[70vw] lg:h-[20vh]
          flex flex-row items-center justify-center"
      >
        <img
          className="ss:h-[100%] ss:w-[30%] lg:w-auto lg:h-[100%]"
          src="/img/icon1.png"
          alt="logo"
        />
        <img className="ss:h-[100%] ss:w-auto " src="/img/textTMT.png" alt="" />
      </div>
      <div className="ss:w-[80vw] ss:h-[60vh] flex justify-start items-center flex-col mb-10">
        <div
          className={
            isHidden
              ? "invisible "
              : "visible rounded-xl bg-gradient-to-t from-orange-200 to-yellow-100 w-44 h-14 flex justify-center items-center font-extrabold text-lg text-2xl text-[#08631c] cursor-pointer opacity-85 hover:opacity-100"
          }
          onClick={handleOnClick}
        >
          HÁI LỘC
        </div>
        <div className={isHidden?"visible w-full h-full mb-10 hover:cursor-pointer hover:bg-[#ffffff2f]" : "invisible"} 
          onClick={handleDownload}
        >
          <img id="LoiChua" src={urlLC} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
