import { useRef, useState } from 'react';
import useApi from '@/hooks/useApi';
import WaveMiddle from "@images/wavemiddle/wavemiddle1.png"
import WaveMiddle1 from "@images/wavemiddle/wavemiddle1-p-500.png"
import WaveMiddle2 from "@images/wavemiddle/wavemiddle1-p-800.png"
import WaveMiddle3 from "@images/wavemiddle/wavemiddle1-p-1080.png"
import WaveMiddle4 from "@images/wavemiddle/wavemiddle1-p-1600.png"
import WaveMiddle5 from "@images/wavemiddle/wavemiddle1-p-2000.png"
import WaveMiddle6 from "@images/wavemiddle/wavemiddle1-p-2600.png"
import WaveMiddle7 from "@images/wavemiddle/wavemiddle1-p-3200.png"
import Testblau from "@images/testblau/testblau.png"
import Testblau1 from "@images/testblau/testblau-p-500.png"
import Testblau2 from "@images/testblau/testblau-p-800.png"
import Testblau3 from "@images/testblau/testblau-p-1080.png"
import Testblau4 from "@images/testblau/testblau-p-2000.png"
import Testblau5 from "@images/testblau/testblau-p-2600.png"
import Testblau6 from "@images/testblau/testblau-p-3200.png"
import Wave2 from "@images/wave2.svg"
import Palm from "@images/palm.svg"
import News from "@images/abstract_newsletter.svg"
import CatsLogo from "@images/justcats/JustCats-Logo.png"
import CatsLogo1 from "@images/justcats/JustCats-Logo-p-500.png"
import CatsLogo2 from "@images/justcats/JustCats-Logo-p-800.png"
import { Link } from 'react-router-dom';

const Footer = ({ scrollTo }: { scrollTo: undefined | any }) => {
  const emailRef = useRef<HTMLInputElement>()
  const { apiCall } = useApi();
  const [transform, setTransform] = useState('translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const rect = event.currentTarget.getBoundingClientRect();
    const imageCenterX = rect.left + rect.width / 2;
    const imageCenterY = rect.top + rect.height / 2;
    const deltaX = (mouseX - imageCenterX) / imageCenterX;
    const deltaY = (mouseY - imageCenterY) / imageCenterY;
    const rotationScale = 7; // Adjust as needed
    const rotateZ = -deltaX * rotationScale;
    
    setTransform(`translate3d(${deltaX * 5}%, ${deltaY * 3}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`);
};

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setLoading(true);
    const subscriptionStatus:any = await apiCall({
      fromMail: emailRef.current.value
    });
    if(subscriptionStatus.status === 200){
      setLoading(false);
      setSuccess(true)
      setError(false)
      setTimeout(()=>{
        setSuccess(false)
      },5000)
    }else {
      setLoading(false);
      setSuccess(false)
      if(subscriptionStatus.error){
        setError(subscriptionStatus.error)
      }else {
        setError(true)
      }
      setTimeout(()=>{
        setError(false)
      },5000)
    }
  };

  return (
    <>
      <div className="section-newsletter" >
        <div className="content">
          <div className="block-heading-center max-w">
            <div className="subtitle yellow">
              newsletter
              <br />
            </div>
            <h2 className="heading light">Subscribe to our newsletter </h2>
          </div>
            <div className="form-block-newsletter w-form">
            {!isSuccess && !isError && (
              <form
                id="wf-form-Email-Form-Newsletter"
                name="wf-form-Email-Form-Newsletter"
                className="form-newsletter"
                onSubmit={handleSubscribe}
              >
                <input className="text-field-newsletter w-input" maxLength={256} name="EMAIL" data-name="EMAIL" placeholder="Email Address" type="email" id="EMAIL-3" required ref={emailRef} />
                <input type="submit" data-wait="Please wait..." className="button-dark w-button" value={isLoading ? 'Loading...' : 'Submit'} />
              </form>
            )}
              {isSuccess && (
                <div className="success-message">
                  <div className="text-success">Thank you! Your submission has been received!</div>
                </div>
              )}
              {isError && (
                <div className="error-message">
                  <div className="text-error">{isError}</div>
                </div>
              )}
            </div>
        </div>
        <img
          src={WaveMiddle}
          loading="eager"
          sizes="100vw"
          srcSet={`${WaveMiddle1} 500w, ${WaveMiddle2} 800w, ${WaveMiddle3} 1080w, ${WaveMiddle4} 1600w, ${WaveMiddle5} 2000w, ${WaveMiddle6} 2600w, ${WaveMiddle7} 3200w, ${WaveMiddle} 8004w"`} 
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
        <img
          src={News}
          loading="eager"
          alt=""
          className="abstract-newsletter-green"
        />
      </div>
      <div className="section-footer" onMouseMove={handleMouseMove}>
        <div className="w-layout-grid grid-footer">
          <div
            id="w-node-_9221e4f5-332c-7ce5-aaab-34ea97a2bdc3-97a2bdc1"
            className="footer"
          >
            <img
              src={CatsLogo}
              loading="lazy"
              width="293"
              sizes="(max-width: 479px) 88vw, 293px"
              alt=""
              srcSet={`${CatsLogo1} 500w, ${CatsLogo2} 800w, ${CatsLogo} 1000w"`}
            />
          </div>
          <div
            id="w-node-_9221e4f5-332c-7ce5-aaab-34ea97a2bdc6-97a2bdc1"
            className="footer"
          >
            <div className="block-footer">
              <div className="subtitle-footer">EMAIL</div>
              <a href="mailto:hello@justcats.tv" className="link-footer">
                hello@justcats.tv
              </a>
            </div>
            <div className="block-footer">
              <div className="subtitle-footer">Legal Stuff</div>
              <a href="mailto:legal@justcats.tv" className="link-footer">
                legal@justcats.tv
              </a>
            </div>
          </div>
          <div
            id="w-node-_9221e4f5-332c-7ce5-aaab-34ea97a2bdd8-97a2bdc1"
            className="footer"
          >
            <div className="block-footer">
              <div className="subtitle-footer">About</div>
              <Link to="" className="link-footer" onClick={() => scrollTo('trailer')}>
                HD Teaser
              </Link>
              <Link to="" className="link-footer" onClick={() => scrollTo('about')}>
                About Us
              </Link>
              <Link to="" className="link-footer" onClick={() => scrollTo('roadmap')}>
                Roadmap
              </Link>
              <Link to="" className="link-footer" onClick={() => scrollTo('tokenomics')}>
                Tokenomics
              </Link>
              <a
                href="https://just-cats.gitbook.io/whitepaper/"
                target="_blank"
                className="link-footer"
              >
                Whitepaper
              </a>
            </div>
          </div>
          <div
            id="w-node-_9221e4f5-332c-7ce5-aaab-34ea97a2bde4-97a2bdc1"
            className="footer"
          >
            <div className="block-footer">
              <div className="subtitle-footer">Socials</div>
              <a href="https://twitter.com/JustCatsTV" className="link-footer" target='_blank'>
                Twitter/X
              </a>
              <a href="https://t.me/justcatstv" className="link-footer" target='_blank'>
                Telegram
              </a>
              <a
                href="https://www.youtube.com/channel/UCByf7yW7pJwmxJciZ4AK1sQ"
                className="link-footer"
                target='_blank'
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/justcats.tv"
                className="link-footer"
                target='_blank'
              >
                Insta
              </a>
            </div>
          </div>
        </div>
        <img
          src={Wave2}
          loading="eager"
          alt=""
          className="wave-footer"
        />
        <div className="footer-down">
          <div className="text-footer-down">
            © 2024 JustCats.{" "}
            <a
              href="documents/Terms-of-Use_JustCats.pdf"
              className="link-footer-down"
              target="_black"
            >
              Terms of Use
            </a>
            <a
              href="documents/privacy-policy_JustCats.pdf"
              className="link-footer-down"
              target="_black"
            >
              Privacy policy
            </a>
          </div>
        </div>
               
      <div className="disclaimer-container">
      <div className="disclaimer-content">
        <p className="disclaimer-text">
        Disclaimer:
        Purchasing tokens in this ICO involves risks such as market volatility, technological failures, and regulatory uncertainties. The token’s value may fluctuate significantly, and future profits are not guaranteed. The token is not a financial instrument and does not grant any rights to earnings or governance. Buyers are responsible for understanding the legal implications in their jurisdiction. In accordance with applicable laws, buyers have the right to cancel their purchase within 14 days. The refund function is available{" "}
          <a href="documents/refund-policy.pdf" target="_blank" rel="noopener noreferrer" className="disclaimer-link">
            here
          </a>.
        </p>
        <p className="disclaimer-note">
          The ICO team assumes no liability for any losses or damages resulting from the purchase or use of the token. Buyers acknowledge and accept these risks and proceed at their own discretion.
        </p>
      </div>
    </div>
             
        <img
          src={Palm}
          loading="eager"
          alt=""
          className="abstract-green-l"
          style={{
            willChange: 'transform',
            transform, 
            transition : 'transform 2s ease-out',
            transformStyle : 'preserve-3d'
          }}
        />
      </div>
    </>
  );
};

export default Footer;
