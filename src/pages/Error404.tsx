import { useState } from 'react';
import Navbar from '@partials/Navbar';
import Palm from '@images/palm.svg';
import PalmUp from '@images/palmup.svg';
import { Link } from 'react-router-dom';

export default function Error404() {
  const [transform, setTransform] = useState('translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
    const [transform2, setTransform2] = useState('translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
    

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
  return (
    <>
      <Navbar scrollTo={undefined} />
      <div className="utility-page-wrap" onMouseMove={handleMouseMove}>
        <div className="utility-page-content" >
          <h2 className="heading-hero">Page Not Found</h2>
          <p className="paragraph-hero">The page you are looking for doesn&#x27;t exist or has been moved</p>
          <Link to="/" className="button-dark w-button">
            Back to Home
          </Link>
        </div>
        <img src={Palm} loading="eager" alt="" className="abstract-green-l" style={{transform}} />
        <img src={PalmUp} loading="eager" alt="" className="abstract-green-r" style={{transform:transform2}} />
      </div>
    </>
  );
}
