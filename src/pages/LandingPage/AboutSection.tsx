import { forwardRef, useEffect, useRef, useState } from 'react';
import Catsnote from '@images/catnote/catsnote.png';
import Catsnote1 from '@images/catnote/catsnote-p-500.png';
import Catsnote2 from '@images/catnote/catsnote-p-800.png';
import Catsnote3 from '@images/catnote/catsnote-p-1080.png';
import Photo from '@images/catnote/photo_2022-08-30_08-53-29.jpg';
import Photo1 from '@images/catnote/photo_2022-08-30_08-53-29-p-500.jpg';
import Photo2 from '@images/catnote/photo_2022-08-30_08-53-29-p-800.jpg';
import Text from '@images/text1/text1.png';
import Text1 from '@images/text1/text1-p-500.png';
import Text2 from '@images/text1/text1-p-800.png';
import Text3 from '@images/text1/text1-p-1080.png';
import Text4 from '@images/text1/text1-p-1600.png';
import Text5 from '@images/text1/text1-p-2000.png';
import Cat1 from '@images/cats/1_3.png';
import Cat2 from '@images/cats/2.png';
import Cat2_1 from '@images/cats/2-p-500.png';
import Cat2_2 from '@images/cats/2-p-800.png';
import Cat2_3 from '@images/cats/2-p-1080.png';
import Cat3 from '@images/cats/3.png';
import Cat3_1 from '@images/cats/3-p-500.png';
import Cat3_2 from '@images/cats/3-p-800.png';
import Cat3_3 from '@images/cats/3-p-1080.png';
import Wavemiddle from '@images/wavemiddle/wavemiddle1.png';
import Wavemiddle1 from '@images/wavemiddle/wavemiddle1-p-500.png';
import Wavemiddle2 from '@images/wavemiddle/wavemiddle1-p-800.png';
import Wavemiddle3 from '@images/wavemiddle/wavemiddle1-p-1080.png';
import Wavemiddle4 from '@images/wavemiddle/wavemiddle1-p-1600.png';
import Wavemiddle5 from '@images/wavemiddle/wavemiddle1-p-2000.png';
import Wavemiddle6 from '@images/wavemiddle/wavemiddle1-p-2600.png';
import Wavemiddle7 from '@images/wavemiddle/wavemiddle1-p-3200.png';
import Testblau from '@images/testblau/testblau.png';
import Testblau1 from '@images/testblau/testblau-p-500.png';
import Testblau2 from '@images/testblau/testblau-p-800.png';
import Testblau3 from '@images/testblau/testblau-p-1080.png';
import Testblau4 from '@images/testblau/testblau-p-2000.png';
import Testblau5 from '@images/testblau/testblau-p-2600.png';
import Testblau6 from '@images/testblau/testblau-p-3200.png';
import { Link } from 'react-router-dom';

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [transform, setTransform] = useState('');
  const [transform2, setTransform2] = useState('');
  const imageRef = useRef<HTMLImageElement>(null);
  const imageRef2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const image = imageRef.current;
      const bounding = image.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (bounding.top < windowHeight && bounding.bottom > 0) {
        const translateY = -0.45 + 1.55 * (bounding.top / windowHeight);
        const rotateZ = -13 - 4 * ((bounding.top / windowHeight) * 0.8);

        setTransform(`translate3d(0px, ${translateY}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const image = imageRef2.current;
      const bounding = image.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (bounding.top < windowHeight && bounding.bottom > 0) {
        const translateY = - 1 + 3 * (bounding.top / windowHeight);
        const rotateZ = 9.35 + 6 * ((bounding.top / windowHeight) * 0.8);

        setTransform2(`translate3d(0px, ${translateY}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="About" className="section" ref={ref}>
        <div className="content">
          <div className="w-layout-grid grid-about">
            <div id="w-node-b56aaa66-97dc-7a26-be75-d7a18e6d3f3c-eeff28d5" className="block-about">
              <h3 className="heading-about">About Just Cats</h3>
              <p className="paragraph max-w">
                We&#x27;re shaking up the Crypto world by creating the very first 3D animated Web3 series where the community gets to shape the entire storyline. JustCats is all about coming together,
                collaborating, and ensuring everyone&#x27;s voice is heard. In our world, you call the shots. From deciding the personalities of our characters to selecting the environment and even
                defining the century. Here, you&#x27;re not just a viewer. You&#x27;re a creator!
              </p>
            </div>
            <div className="block-image-about">
              <img
                src={Catsnote}
                loading="eager"
                data-w-id="b56aaa66-97dc-7a26-be75-d7a18e6d3f46"
                sizes="(max-width: 479px) 85vw, (max-width: 767px) 80vw, (max-width: 991px) 85vw, (max-width: 1439px) 86vw, (max-width: 1919px) 1130.0853271484375px, 59vw"
                alt=""
                srcSet={`${Catsnote1} 500w, ${Catsnote2} 800w, ${Catsnote3} 1080w, ${Catsnote} 1206w`}
                className="image-about-b1"
                style={{ transform: transform }}
                ref={imageRef}
              />
              <img
                src={Photo}
                loading="eager"
                width="Auto"
                data-w-id="b56aaa66-97dc-7a26-be75-d7a18e6d3f47"
                alt=""
                srcSet={`${Photo1} 500w, ${Photo2} 800w, ${Photo} 1080w`}
                sizes="(max-width: 479px) 83vw, (max-width: 767px) 78vw, (max-width: 991px) 73vw, (max-width: 1439px) 74vw, (max-width: 1919px) 969.7638549804688px, 51vw"
                className="image-about-b2"
                style={{ transform: transform2 }}
                ref={imageRef2}
              />
            </div>
          </div>
          <div className="w-layout-grid grid-about">
            <img
              src={Text}
              loading="eager"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 927.200px, (max-width: 1439px) 95vw, 1240px"
              srcSet={`${Text1} 500w, ${Text2} 800w, ${Text3} 1080w, ${Text4} 1600w, ${Text5} 2000w, ${Text} 2048w`}
              alt=""
              className="image-about"
            />
            <div id="w-node-b56aaa66-97dc-7a26-be75-d7a18e6d3f4a-eeff28d5" className="block-about">
              <h3 className="heading-about">Empowering the Community</h3>
              <p className="paragraph max-w">
                The community is fully involved in every step of the way, from planning to development to completion of the series.
                <br />
                We truly believe in the power of storytelling that resides in each of us. That&#x27;s why we&#x27;re excited to invite everyone to join us in creating a series that will be
                unforgettable and full of surprises. Let&#x27;s embark on this creative journey together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-green">
        <div className="div-block-5">
          <div className="content">
            <div className="w-layout-grid grid-2-columns">
              <div id="w-node-_9a3fca1f-b95e-eb25-ac65-6c4de1aabfb6-eeff28d5" className="block">
                <div className="block-heading">
                  <h2 className="heading-6">
                    Meet the Main <span className="line-a">Characters!</span>
                  </h2>
                </div>
                <p className="paragraph-8">Take a look at the main characters of the series for the first time. All future characters will be designed together with the community.</p>
              </div>
              <div id="w-node-_9a3fca1f-b95e-eb25-ac65-6c4de1aabfc3-eeff28d5" className="w-layout-grid grid-lessons">
                <Link id="w-node-_9a3fca1f-b95e-eb25-ac65-6c4de1aabfc4-eeff28d5" to="" className="link-lessons w-inline-block">
                  <img src={Cat1} loading="eager" alt="" className="icon-lessons" />
                  <h6 className="heading-lessons">Jack</h6>
                </Link>
                <Link id="w-node-_9a3fca1f-b95e-eb25-ac65-6c4de1aabfca-eeff28d5" to="" className="link-lessons w-inline-block">
                  <img
                    src={Cat2}
                    loading="eager"
                    sizes="(max-width: 479px) 77vw, (max-width: 767px) 31vw, 160px"
                    srcSet={`${Cat2_1} 500w, ${Cat2_2} 800w, ${Cat2_3} 1080w, ${Cat2} 1500w`}
                    alt=""
                    className="icon-lessons"
                  />
                  <h6 className="heading-lessons">Jerry</h6>
                </Link>
                <Link id="w-node-_9a3fca1f-b95e-eb25-ac65-6c4de1aabfd0-eeff28d5" to="" className="link-lessons w-inline-block">
                  <img
                    src={Cat3}
                    loading="eager"
                    sizes="(max-width: 479px) 77vw, (max-width: 767px) 31vw, 160px"
                    srcSet={`${Cat3_1} 500w, ${Cat3_2} 800w, ${Cat3_3} 1080w, ${Cat3} 1500w`}
                    alt=""
                    className="icon-lessons"
                  />
                  <h6 className="heading-lessons">SOON</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Wavemiddle}
          loading="eager"
          sizes="100vw"
          srcSet={`${Wavemiddle1} 500w, ${Wavemiddle2} 800w, ${Wavemiddle3} 1080w, ${Wavemiddle4} 1600w, ${Wavemiddle5} 2000w, ${Wavemiddle6} 2600w, ${Wavemiddle7} 3200w, ${Wavemiddle} 8004w`}
          alt=""
          className="wave-top"
        />
        <img
          src={Testblau}
          loading="eager"
          sizes="100vw"
          srcSet={`${Testblau1} 500w, ${Testblau2} 800w, ${Testblau3} 1080w, ${Testblau4} 2000w, ${Testblau5} 2600w, ${Testblau6} 3200w, ${Testblau} 8004w`}
          alt=""
          className="wave-down"
        />
      </div>
      {/* <div className="section-4">
        <div className="content"></div>
      </div> */}
    </>
  );
});
export default AboutSection;
