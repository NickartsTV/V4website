import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDisconnect, useActiveWallet, useActiveAccount, useSwitchActiveWalletChain, useActiveWalletChain } from "thirdweb/react";
import { useMediaQuery } from "react-responsive";
import Logo from "@images/logo150x150.png";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { client, projectId, desiredChain, desiredChainName } from "@/constants/wallet";
import ConnectWallet from "@/components/ui/ConnectWallet";

const Navbar = ({ scrollTo }: { scrollTo: undefined | any }) => {
  const account = useActiveAccount();
  const chainId = useActiveWalletChain();
  const switchChain = useSwitchActiveWalletChain();
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();
  const isMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const [open, setOpen] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [show, setShow] = useState({
    show: false,
    animate: { transform: "translateY(-400px) translateX(0px)" },
  });
  const navRef = useRef<HTMLElement>();
  const btnRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setMouseEnter(false);
  }, [account]);

  useEffect(() => {
    if (open) {
      setShow((prev) => ({ ...prev, show: true }));
      setTimeout(() => {
        setShow((prev) => ({
          ...prev,
          animate: { transform: "translateY(0px) translateX(0px)" },
        }));
      }, 100);
    } else {
      setShow((prev) => ({
        ...prev,
        animate: { transform: "translateY(-400px) translateX(0px)" },
      }));
      setTimeout(() => {
        setShow((prev) => ({ ...prev, show: false }));
      }, 500);
    }
  }, [open]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (btnRef.current.contains(event.target as Node)) {
        return;
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (show.show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show.show]);

  const mobileLogout = () => {
    if (mouseEnter) {
      disconnect(wallet);
    } else {
      setMouseEnter(true);
    }
  };

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="nav-block">
        <div className="nav">
          <Link to="/">
            <img src={Logo} loading="eager" alt="" className="logo" />
          </Link>
        </div>
        {scrollTo && (
          <div className="nav">
            <nav role="navigation" className="nav-menu w-nav-menu">
              <Link to="" className="nav-link w-nav-link" onClick={() => scrollTo("trailer")}>
                Our Trailer
              </Link>
              <Link to="" className="nav-link w-nav-link" onClick={() => scrollTo("about")}>
                About
              </Link>
              <Link to="" className="nav-link w-nav-link" onClick={() => scrollTo("roadmap")}>
                Roadmap
              </Link>
              <Link to="" className="nav-link w-nav-link" onClick={() => scrollTo("tokenomics")}>
                Tokenomics
              </Link>
              {account?.address ? (
                chainId?.id == desiredChain ? (
                  <Link
                    to=""
                    className="nav-button w-button"
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(false)}
                    onClick={() => disconnect(wallet)}
                  >
                    {mouseEnter ? "Disconnect" : `${account?.address.slice(0, 5)}...${account?.address.slice(-5)}`}
                  </Link>
                ) : (
                  <Link to="" className="nav-button w-button" onClick={() => switchChain(desiredChainName)}>
                    Switch Chain
                  </Link>
                )
              ) : (
                <Link
                  to=""
                  // className="nav-button w-button"
                  // onClick={() => openModal()}
                >
                  <ConnectWallet className={"nav-button w-button"} />
                </Link>
              )}
            </nav>
            {isMobile && (
              <div className={`menu-button w-nav-button ${open && "w--open"}`} onClick={() => setOpen(!open)} ref={btnRef}>
                <div className="menu-icon w-icon-nav-menu"></div>
              </div>
            )}
          </div>
        )}
      </div>
      {isMobile && (
        <div className="w-nav-overlay" style={show.show ? { display: "block", height: "100vh" } : {}}>
          <nav role="navigation" className={`nav-menu w-nav-menu mobile-nav `} style={show.animate} ref={navRef}>
            <Link
              to=""
              className="nav-link w-nav-link w--nav-link-open"
              onClick={() => {
                scrollTo("trailer");
                setOpen(false);
              }}
            >
              Our Trailer
            </Link>
            <Link
              to=""
              className="nav-link w-nav-link w--nav-link-open"
              onClick={() => {
                scrollTo("about");
                setOpen(false);
              }}
            >
              About
            </Link>
            <Link
              to=""
              className="nav-link w-nav-link w--nav-link-open"
              onClick={() => {
                scrollTo("roadmap");
                setOpen(false);
              }}
            >
              Roadmap
            </Link>
            <Link
              to=""
              className="nav-link w-nav-link w--nav-link-open"
              onClick={() => {
                scrollTo("tokenomics");
                setOpen(false);
              }}
            >
              Tokenomics
            </Link>

            {account?.address ? (
              chainId?.id == desiredChain ? (
                <Link to="" className="nav-button w-button" onClick={() => mobileLogout()}>
                  {mouseEnter ? "Disconnect" : `${account?.address.slice(0, 5)}...${account?.address.slice(-5)}`}
                </Link>
              ) : (
                <Link to="" className="nav-button w-button" onClick={() => switchChain(desiredChainName)}>
                  Switch Chain
                </Link>
              )
            ) : (
              <Link to="">
                <ConnectWallet className={"nav-button w-button"} />
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};
export default Navbar;
