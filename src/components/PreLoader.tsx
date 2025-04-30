import Logo from "@images/logo150x150.png"

const PreloaderAnimate = () => {
  return (
    <div className="preloader">
      <img
        src={Logo}
        loading="eager"
        alt=""
        className="logo-preloader"
      />
    </div>
  );
};

export default PreloaderAnimate