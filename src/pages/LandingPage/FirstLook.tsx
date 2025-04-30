import Wave1 from "@images/wavemiddle/wavemiddle1.png"
import Wave1_1 from "@images/wavemiddle/wavemiddle1-p-500.png"
import Wave1_2 from "@images/wavemiddle/wavemiddle1-p-800.png"
import Wave1_3 from "@images/wavemiddle/wavemiddle1-p-1080.png"
import Wave1_4 from "@images/wavemiddle/wavemiddle1-p-1600.png"
import Wave1_5 from "@images/wavemiddle/wavemiddle1-p-2000.png"
import Wave1_6 from "@images/wavemiddle/wavemiddle1-p-2600.png"
import Wave1_7 from "@images/wavemiddle/wavemiddle1-p-3200.png"
import Wave2 from "@images/wavemiddle/wavemiddle2.png"
import Wave2_1 from "@images/wavemiddle/wavemiddle2-p-500.png"
import Wave2_2 from "@images/wavemiddle/wavemiddle2-p-800.png"
import Wave2_3 from "@images/wavemiddle/wavemiddle2-p-1080.png"
import Wave2_4 from "@images/wavemiddle/wavemiddle2-p-1600.png"
import Wave2_5 from "@images/wavemiddle/wavemiddle2-p-2000.png"
import Wave2_6 from "@images/wavemiddle/wavemiddle2-p-2600.png"
import Wave2_7 from "@images/wavemiddle/wavemiddle2-p-3200.png"
import Play from "@images/play.svg";
import Cat from "@images/trailer/5555.png";
import Cat1 from "@images/trailer/5555-p-500.png";
import Cat2 from "@images/trailer/5555-p-800.png";
import Cat3 from "@images/trailer/5555-p-1080.png";
import Cat4 from "@images/trailer/5555-p-1600.png";
import Palm from "@images/palm.svg"
import PalmUp from "@images/palmup.svg"
import { forwardRef, useState } from "react"

const FirstLook = forwardRef<HTMLDivElement>((_, ref)=> {
    const [transform, setTransform] = useState('translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
    const [transform2, setTransform2] = useState('translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
    const [transform3, setTransform3] = useState('translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
    const [show, setShow] = useState(false)

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const rect = event.currentTarget.getBoundingClientRect();
        const imageCenterX = rect.left + rect.width / 2;
        const imageCenterY = rect.top + rect.height / 2;
        const deltaX = (mouseX - imageCenterX) / imageCenterX;
        const deltaY = (mouseY - imageCenterY) / imageCenterY;
        const rotationScale = 7; 
        const rotateZ = -deltaX * rotationScale;
        
        setTransform(`translate3d(${deltaX * 5}%, ${deltaY * 3}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`);
        setTransform2(`translate3d(${-deltaX * 5}%, ${-deltaY * 3}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`);
    };

    const handleMouseMove2= (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const rect = event.currentTarget.getBoundingClientRect();
        const imageCenterX = rect.left + rect.width / 2;
        const imageCenterY = rect.top + rect.height / 2;
        const deltaX = (mouseX - imageCenterX) / imageCenterX;
        const deltaY = (mouseY - imageCenterY) / imageCenterY;
        
        setTransform3(`translate3d(${-deltaX * 1.5}em, ${-deltaY * 1.5}em, 0px) scale3d(1.15, 1.15, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`);
    }

  return (<>
   
            {show && 
             (<div className="modal" style={{backgroundColor:"rgba(0, 0, 0, 0.9)"}}>
                    <span className="w-lightbox-control w-lightbox-close" onClick={()=>setShow(false)}>
                    </span>
                <div className="modal-content youtube-div" >
                    <iframe
                        className="embedly-embed"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/ld6Kiyywap8?si=wo-AoPKwngQ1m94M"
                        title="$Cats Trailer"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>)
          }
      <div id="Trailer" className="section-green" onMouseMove={handleMouseMove} ref={ref}>
        <div className="content position-z-index">
            <div className="block-heading-center">
                <div className="subtitle yellow">the first look<br/></div>
                <h2 className="heading light">Take a look at our first animated trailer!</h2>
            </div>
            <div
                className="lightbox-link w-inline-block w-lightbox"
                style={{cursor:"pointer"}}
                onMouseMove={handleMouseMove2}
                onMouseLeave={()=>setTransform3('translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)')}
                onClick={()=>setShow(true)}
            >
                <div className="lightbox-button" style={{ transform: transform3 }}
                >
                    <img 
                        src={Play} 
                        loading="eager" 
                        alt=""
                        className="icon-lightbox-button" 
                    />
                </div>

                <img 
                    src={Cat}
                    loading="eager" 
                    sizes="(max-width: 479px) 87vw, (max-width: 767px) 88vw, (max-width: 991px) 91vw, (max-width: 1439px) 92vw, 1211.2000732421875px" 
                    srcSet={`${Cat1} 500w, ${Cat2} 800w, ${Cat3} 1080w, ${Cat4} 1600w, ${Cat} 1920w`}
                    alt="" 
                    className="image-lightbox"
                    style={{
                        transition: 'transform 0.3s ease-in-out',
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.transform = 'translate3d(0%, 0%, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.transform = 'translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
                    }}
                />
            </div>
        </div>
        <img
            src={Wave1}
            loading="eager" 
            sizes="100vw" 
            srcSet={`${Wave1_1} 500w, ${Wave1_2} 800w, ${Wave1_3} 1080w, ${Wave1_4} 1600w, ${Wave1_5} 2000w, ${Wave1_6} 2600w, ${Wave1_7} 3200w, ${Wave1} 8004w`}
            alt="" 
            className="wave-top"
        />
        <img 
            src={Wave2}
            loading="eager" 
            srcSet={`${Wave2_1} 500w, ${Wave2_2} 800w, ${Wave2_3} 1080w, ${Wave2_4} 1600w, ${Wave2_5} 2000w, ${Wave2_6} 2600w, ${Wave2_7} 3200w, ${Wave2} 8004w`}
            alt="" 
            sizes="100vw" 
            className="wave-down"
        />
        <img 
            src={Palm}
            loading="eager"
            alt=""
            className="abstract-green-l"
            style={{
                transform, 
            }}
        />
        <img 
            src={PalmUp}
            loading="eager" 
            alt="" 
            className="abstract-green-r"
            style={{
                transform: transform2, 
            }}
        />
    </div>
  </>)
})
export default FirstLook
