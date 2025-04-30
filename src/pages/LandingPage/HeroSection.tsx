import React, {  useEffect, useRef, useState } from 'react'
import Cat1 from "@images/cat1.svg"
import Cat2 from "@images/cat2.svg"
import Web9 from "@images/web9.png"
import Vid1 from "@/assets/videos/vid1.mp4"
import Vid2 from "@/assets/videos/vid2.webm"
import Poster from "@/assets/videos/poster.jpg"
import Wave from "@images/wavemiddle/wavemiddle2.png"
import Wave1 from "@images/wavemiddle/wavemiddle2.png"
import Wave2 from "@images/wavemiddle/wavemiddle2-p-500.png"
import Wave3 from "@images/wavemiddle/wavemiddle2-p-800.png"
import Wave4 from "@images/wavemiddle/wavemiddle2-p-1080.png"
import Wave5 from "@images/wavemiddle/wavemiddle2-p-1600.png"
import Wave6 from "@images/wavemiddle/wavemiddle2-p-2000.png"
import Wave7 from "@images/wavemiddle/wavemiddle2-p-2600.png"
import Wave8 from "@images/wavemiddle/wavemiddle2-p-3200.png"


export default function HeroSection() {
    const [transform, setTransform] = useState('translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const mouseX = event.clientX;
        const centerX = window.innerWidth / 2;
        const deltaX = (mouseX - centerX) / centerX;
        setTransform(`translate3d(${deltaX * 1.999}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`);
    };

  
  useEffect(()=>{
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
    }
  },[])


  return (
    <div className="section-hero" onMouseMove={handleMouseMove}>
        <div 
            data-posterurl={Poster}
            className="background-video w-background-video w-background-video-atom"
        >
            <video 
                id="f85855c9-37de-f698-70d7-a79764549f52-video" 
                muted
                autoPlay
                playsInline 
                data-wf-ignore="true" 
                data-object-fit="cover"
                poster={Poster}
                ref={videoRef}
            >
                <source src={Vid1} data-wf-ignore="true" />
                <source src={Vid2} data-wf-ignore="true" />
            </video>
        <div className="w-layout-blockcontainer container w-container">
            <div className="content position-z-index">
                <div className="w-layout-grid grid-hero">
                    <div id="w-node-_3780e366-349e-2f14-f86d-00fc3afd34ef-eeff28d5" className="block-hero">
                        <div className="text-block-2">The Wonderful Cats World</div>
                            <h1 id="w-node-_2e2249ff-8ca8-3e6e-fbfa-b3a80541b48d-eeff28d5" className="heading-hero">
                                Explore the wild life of{" "}
                                <span className="line-b">Just</span>{" "}
                                <span className="line-a">Cats</span>
                            </h1>
                        </div>
                    <div id="w-node-d5448c97-cc6a-12d3-2076-196119b3cd5d-eeff28d5" className="block-hero-img">
                    <img 
                        // sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1439px) 97vw, 1240px" 
                        // srcset="images/web9-p-500.png 500w, images/web9.png 800w" 
                        alt="" 
                        src={Web9} 
                        loading="eager" 
                        className="image-hero"
                        style={{ 
                            willChange: 'transform',
                            transform, 
                            transition : 'transform 1.5s ease-out',
                            transformStyle : 'preserve-3d'
                        }}
                    />
                    <img loading="eager" src={Cat1} alt="" className="abstract-hero-yellow" />
                    <img loading="eager" src={Cat2} alt="" className="abstract-hero-green" />
                </div>
                </div>
            </div>
        </div>
        </div>
        <img 
            src={Wave}
            loading="eager" 
            sizes="100vw" 
            srcSet={`${Wave1} 500w, ${Wave2} 800w, ${Wave3} 1080w, ${Wave4} 1600w, ${Wave5} 2000w, ${Wave6} 2600w, ${Wave7} 3200w, ${Wave8} 8004w`} 
            alt="" 
            className="wave-down"
        />
    </div>
  )
}
