import { useEffect, useState } from "react";
import Testblau from "@images/testblau/testblau.png";
import Testblau1 from "@images/testblau/testblau-p-500.png";
import Testblau2 from "@images/testblau/testblau-p-800.png";
import Testblau3 from "@images/testblau/testblau-p-1080.png";
import Testblau4 from "@images/testblau/testblau-p-2000.png";
import Testblau5 from "@images/testblau/testblau-p-2600.png";
import Testblau6 from "@images/testblau/testblau-p-3200.png";
import Logo from "@images/logo150x150.png"

const PreloaderAnimate = () => {
  const [animate, setAnimate]= useState(false)
  const [hide, setHide]= useState(false)
  const [fade, setFade]= useState(false)

  useEffect(()=>{
    setFade(true)
    setTimeout(()=>setAnimate(true), 500); 
  },[])
  const handleTransitionOver = () =>{
    if (fade && animate) {
      setHide(true);
    }
  }
  return (
    <div className={`preloader ${animate && "animate"} ${hide && "hidden"}`} onTransitionEnd={handleTransitionOver}>
      <img
        src={Logo}
        loading="eager"
        alt=""
        className="logo-preloader"
        style={fade?{opacity:0}:{}}
      />
      <img
        src={Testblau}
        loading="lazy"
        sizes="100vw"
        srcSet={`${Testblau1} 500w, ${Testblau2} 800w, ${Testblau3} 1080w, ${Testblau4} 2000w, ${Testblau5}.png 2600w, ${Testblau6} 3200w, ${Testblau} 8004w`}
        alt=""
        className="wave-preloader"
      />
    </div>
  );
};

export default PreloaderAnimate