import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {  useActiveAccount, useSwitchActiveWalletChain, useActiveWalletChain } from "thirdweb/react";
import Decimal from "decimal.js";
import Loading from "@/components/ui/Loading";
import { useContract } from "@/context/useContract";
import useDebouncedValue from "@/hooks/useDebouncedValue";
import useApi from "@/hooks/useApi";
import useToast from "@/hooks/useToast";
import useCountdown from "@/hooks/useCountdown";
import { Icon } from "@iconify/react";
import { approveAmt, desiredChain,desiredChainName } from "@/constants/wallet";
import { presaleContractAddress, walletAddressAdmin } from "@/constants/contracts";
import Eth from "@images/icons/ethereum-eth.svg";
import Usdt from "@images/icons/usdt.png";
import info from "@images/info-icon-i.png";
import info500 from "@images/info-icon-i-p-500.png";
import info800 from "@images/info-icon-i-p-800.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ConnectWallet from "@/components/ui/ConnectWallet";

const Presale = () => {
  const wallet = useActiveAccount();
  const chainId = useActiveWalletChain();
  const switchChain = useSwitchActiveWalletChain();
  const walletAddress = wallet?.address;

  const {
    presaleContractInstance,
    web3Obj,
    tetherContractInstance,
    presaleContractInstanceEthers,
    tetherContractInstanceEthers,
    catsContractInstance,
    catsContractInstanceEthers,
  } = useContract();

  const { toastError, toastSuccess } = useToast();
  const { apiCall } = useApi();
  const [presaleStatus, setPresaleStatus] = useState("not-started");
  const [presaleStart, setPresaleStart] = useState<Date>(new Date());
  const [usdRaised, setUsdRaised] = useState<number>(0);
  const [targetUsdAmount, setTargetUsdAmount] = useState(null);
  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [catsTokenBalance, setCatsTokenBalance] = useState<number>(0);
  const [currency, setCurrency] = useState("eth");
  const [payAmt, setPayAmt] = useState("0");
  const [catsPrice, setCatsPrice] = useState<Number>(0);
  const catsReceiveRef = useRef<HTMLInputElement>(null);
  const [showLoading, setShowLoading] = useState(false);
  // const [showClaim, setShowClaim] = useState(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);
  const emailRef = useRef<HTMLInputElement>();
  const [isChecked, setIsChecked] = useState(false);

  const percent = useMemo(() => {
    return Math.floor((usdRaised / targetUsdAmount) * 100);
  }, [usdRaised, targetUsdAmount]);

  const debouncedPayAmt = useDebouncedValue(payAmt, 1000);
  // const [days, hours, minutes, seconds, running] = useCountdown(presaleStart);

  const fetchPresaleData = async () => {
    const isPresaleStated = await presaleContractInstance.methods.isPresaleStarted().call();
    // const startTime = 1721224800000;
    // const isPresaleStated = startTime <= Date.now()
    const isPresaleCompleted = await presaleContractInstance.methods.isPresaleCompleted().call();
    if (!isPresaleStated) {
      setPresaleStatus("not-started");

      // const startTime: number = Number(
      //   await presaleContractInstance.methods.presaleStartTime().call()
      // );
      // setPresaleStart(new Date(startTime));
      // setPresaleStart(new Date( startTime * 1000 ));
    } else if (isPresaleStated) {
      if (!isPresaleCompleted) {
        setPresaleStatus("running");
      } else {
        setPresaleStatus("completed");
      }

      const usd = await presaleContractInstance.methods.totalUSDAfterRefund().call();
      const originalNumber = new Decimal(web3Obj.utils.fromWei(usd, "ether"));
      const rounded = originalNumber.toDecimalPlaces(2, Decimal.ROUND_DOWN).toNumber();
      setUsdRaised(rounded);

      const currentStage = await presaleContractInstance.methods.currentPresaleStage().call();
      const price = await presaleContractInstance.methods.presaleDetails(currentStage).call();
      if (Number(currentStage) === 1) {
        setTargetUsdAmount(168000);
      } else if (Number(currentStage) === 2) {
        setTargetUsdAmount(330000);
      } else if (Number(currentStage) === 3) {
        setTargetUsdAmount(488000);
      } else if (Number(currentStage) === 4) {
        setTargetUsdAmount(640000);
      } else {
        setTargetUsdAmount(795000);
      }
      setCatsPrice(Number(price?.priceMultipler) / Number(price?.priceDivider));
    }
  };

  const fetchWalletBalance = async () => {
    try {
      if (currency == "eth") {
        const bal = await web3Obj.eth.getBalance(walletAddress);
        if (bal) {
          setWalletBalance(Number(web3Obj.utils.fromWei(bal, "ether")));
        } else {
          setWalletBalance(0);
        }
      } else {
        const bal = await tetherContractInstance.methods.balanceOf(walletAddress).call({
          from: walletAddress,
        });
        if (bal) {
          setWalletBalance(Number(web3Obj.utils.fromWei(bal, "mwei")));
        } else {
          setWalletBalance(0);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCatsBalance = async () => {
    try {
      const isClaim = await presaleContractInstance.methods.hasClaimed(walletAddress).call();
      if (isClaim) {
        setCatsTokenBalance(0);
        return;
      }
      const catsBal = await presaleContractInstance.methods.userDeposits(walletAddress).call();
      if (catsBal && catsBal !== "0") {
        setCatsTokenBalance(parseFloat(web3Obj.utils.fromWei(catsBal)));
      } else {
        setCatsTokenBalance(0);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPresaleData();
  }, []);

  // const handleNetworkChangeAndBuy = async () => {
  //   if (chainId === desiredChain && Number(payAmt) > 0) {
  //     handleBuyCats();
  //   }
  // };

  // useEffect(() => {
  //   handleNetworkChangeAndBuy();
  // }, [walletBalance]);

  useEffect(() => {
    if (chainId?.id !== desiredChain) {
      setWalletBalance(0);
    } else {
      fetchWalletBalance();
      fetchCatsBalance();
    }
  }, [currency, chainId, walletAddress]);

  useEffect(() => {
    setPayAmt("0");
    if (catsReceiveRef.current) {
      catsReceiveRef.current.innerText = "0";
    }
  }, [currency]);

  useEffect(() => {
    (async () => {
      const debouncedNumber = Number(debouncedPayAmt);
      if (debouncedNumber && currency === "eth") {
        const wei = await web3Obj.utils.toWei(debouncedNumber.toString(), "ether");
        const catsAmtWei = await presaleContractInstance.methods.getTokenAmountForETHInCurrentPresale(wei).call();
        catsReceiveRef.current.innerText = Number(web3Obj.utils.fromWei(catsAmtWei, "ether")).toFixed(3);
      } else if (debouncedNumber && currency === "usdt") {
        const wei = await web3Obj.utils.toWei(debouncedNumber.toString(), "ether");
        const catsAmtWei = await presaleContractInstance.methods.getTokenForUSDT(wei).call();
        catsReceiveRef.current.innerText = Number(web3Obj.utils.fromWei(catsAmtWei, "ether")).toFixed(3);
      } else {
        if (catsReceiveRef.current) {
          catsReceiveRef.current.innerText = "0";
        }
      }
    })();
  }, [debouncedPayAmt]);

  const handlePayAmtChange = (amt: string) => {
    setPayAmt(amt);
    // if (amt === "" || ^\\d*(?:\\\\[.])?\\d*$.test(amt)) {
    // }
    // if (e.target.value) {
    //   setPayAmt(e.target.value.replace(",","."));
    // } else if(e.target.value===undefined) {
    //   setPayAmt("");
    // } else if (e.target.value==="") {
    //   e.preventDefault()
    // }
  };

  const hitMax = () => {
    setPayAmt(walletBalance.toFixed(6));
  };

  const handleBuyCats = async () => {
    if (presaleStatus == "completed") {
      toastError("Presale has ended");
      return;
    }
    if (Number(payAmt) <= 0) {
      toastError("Please enter pay amount");
      return;
    }
    if (!isChecked) {
      toastError("You must accept terms & conditions before buying.");
      return;
    }
    if (walletBalance < Number(payAmt)) {
      toastError("Insufficient Balance");
      return;
    }

    try {
      const buy = await presaleContractInstance.methods.inSale().call();
      const remainingTokens = await presaleContractInstance.methods.remainingTokens().call();
      const currentStage = await presaleContractInstance.methods.currentPresaleStage().call();
      const inSaleStage = await presaleContractInstance.methods.presaleDetails(currentStage).call();
      // const inSaleTokensTotal = Number(web3Obj.utils.fromWei(buy, "ether"));
      const inSaleTokensTotal = Number(new Decimal(web3Obj.utils.fromWei(inSaleStage.inSale, "ether")));
      const inSaleTokensStage = Number(new Decimal(web3Obj.utils.fromWei(inSaleStage.inSale, "ether")));
      const receivingAmt = Number(catsReceiveRef.current.innerText);
      // if (inSaleTokensTotal <= receivingAmt) {
      //   toastError(
      //     `Only ${inSaleTokensTotal.toLocaleString(undefined, {
      //       useGrouping: false,
      //       maximumFractionDigits: 3,
      //     })} $Cats available in pre sale. Please try again later or adjust the amount.`,
      //     3000
      //   );
      //   return;
      // }

      if (currency === "eth") {
        setShowLoading(true);
        const ethWeiAmt = web3Obj.utils.toWei(payAmt.toString());
        const buyInitiated = await presaleContractInstanceEthers.buyWithETH({
          value: ethWeiAmt,
        });
        const transactionReceipt = await buyInitiated?.wait();
        if (transactionReceipt.transactionHash) {
          resetForm();
          await fetchCatsBalance();
          await fetchWalletBalance();
          await fetchPresaleData();
        }
        toastSuccess("Transaction Successfull");
        setShowLoading(false);
      } else {
        setShowLoading(true);
        const allowance = await tetherContractInstance.methods.allowance(walletAddress, presaleContractAddress).call();

        if (Number(web3Obj.utils.fromWei(allowance, "mwei")) < Number(payAmt)) {
          const approveInitiated = await tetherContractInstanceEthers.approve(presaleContractAddress, approveAmt);
          const transactionReceipt = await approveInitiated?.wait();
          if (transactionReceipt.transactionHash) {
            toastSuccess("Tokens Approved Successfully");
            await buyWithUsdt();
            setShowLoading(false);
          }
        } else {
          await buyWithUsdt();
          setShowLoading(false);
        }
      }
    } catch (err: any) {
      setShowLoading(false);
      if (err.code === 4001) {
        return;
      }
      toastError("Error while processing! Please try again later");
    }
  };

  const buyWithUsdt = async () => {
    try {
      const buyWeiAmt = web3Obj.utils.toWei(payAmt.toString(), "mwei");
      const buyInitiated = await presaleContractInstanceEthers.buyWithUSDT(buyWeiAmt);
      const transactionReceipt = await buyInitiated?.wait();
      if (transactionReceipt.transactionHash) {
        resetForm();
        await fetchCatsBalance();
        await fetchWalletBalance();
        await fetchPresaleData();
        toastSuccess("Transaction Successful");
      }
    } catch (err: any) {
      setShowLoading(false);
      if (err.code === 4001) {
        return;
      }
      toastError("Error while processing! Please try again later");
    }
  };

  const resetForm = () => {
    setPayAmt("0");
    catsReceiveRef.current.innerText = "0";
    fetchPresaleData();
    fetchWalletBalance();
  };

  const handleClaim = async () => {
    if (presaleStatus !== "completed") {
      toastError("You can claim your $CATS once the presale ends");
      return;
    }

    const claimTime = Number(await presaleContractInstance.methods.claimStart().call());
    if (new Date(claimTime * 1000) > new Date()) {
      toastError("You can claim your $CATS once the presale ends");
      return;
    }
    const isClaim = await presaleContractInstance.methods.hasClaimed(walletAddress).call();
    if (isClaim) {
      toastError("You have already claimed your tokens");
      return;
    }
    if (!catsTokenBalance || catsTokenBalance <= 0) {
      toastError("Sorry, there are no tokens available to claim at this time.");
      return;
    }
    // setShowClaim(true);
    executeClaim();
  };

  const executeClaim = async () => {
    try {
      setShowLoading(true);
      const claimInitiated = await presaleContractInstanceEthers.claimTokens();

      const transactionReceipt = await claimInitiated?.wait();
      if (transactionReceipt.transactionHash) {
        await fetchCatsBalance();
        setShowLoading(false);
        toastSuccess("Tokens claimed successfully!");
      }
    } catch (err) {
      console.log("err", err);
      setShowLoading(false);
      if (err.code === "ACTION_REJECTED" || err.code === 5000) {
        return;
      }
      toastError("Error while processing! Please try again later");
    }
  };

  // const handleSubscribe = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const subscriptionStatus: any = await apiCall({
  //     fromMail: emailRef.current.value,
  //   });

  //   if (subscriptionStatus.status === 200) {
  //     setLoading(false);
  //     setSuccess(true);
  //     setError(false);
  //     setTimeout(() => {
  //       setSuccess(false);
  //     }, 5000);
  //   } else {
  //     setLoading(false);
  //     setSuccess(false);
  //     if(subscriptionStatus.error){
  //       setError(subscriptionStatus.error)
  //     }else {
  //       setError(true)
  //     }
  //     setTimeout(() => {
  //       setError(false);
  //     }, 5000);
  //   }
  // };
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <Loading show={showLoading} text="Your transaction is processing. Please do not close or refresh the page." />
      {/* {presaleStatus == "not-started" && (
        <div id="Presale" className="section">
          <div className="div-block-4"></div>
          <div className="wrapper">
            <div className="div-block">
              <h2 className="heading-15">Presale starts in:</h2>
            </div>
            <div id="js-clock" className="js-clock">
              <div className="box-2">
                <div id="js-clock-days" className="clock-number">
                  {days}
                </div>
                <div className="clock-label">Days</div>
              </div>
              <div className="box-2">
                <div id="js-clock-hours" className="clock-number">
                  {hours}
                </div>
                <div className="clock-label">Hrs</div>
              // </div>
              <div className="box-2">
                <div id="js-clock-minutes" className="clock-number">
                  {minutes}
                </div>
                <div className="clock-label">Min</div>
              </div>
              <div className="box-2">
                <div id="js-clock-seconds" className="clock-number">
                  {seconds}
                </div>
                <div className="clock-label">Sec</div>
              </div>
            </div>
            <div className="div-block-10">
              {!isSuccess && !isError && (
                <div className="form-block-newsletter w-form">
                  <div className="div-block-9">
                    <h2 className="heading">Subscribe for pre-sale updates!</h2>
                  </div>
                  <form
                    id="wf-form-Email-Form-Newsletter"
                    name="wf-form-Email-Form-Newsletter"
                    data-name="Email Form Newsletter"
                    className="form-newsletter"
                    onSubmit={handleSubscribe}
                  >
                    <input
                      className="text-field-newsletter w-input"
                      max={256}
                      name="EMAIL"
                      placeholder="Email Address"
                      type="text"
                      id="EMAIL-4"
                      ref={emailRef}
                    />
                    <input
                      type="submit"
                      className="button-dark w-button"
                      value={isLoading ? "Loading..." : "Submit"}
                    />
                  </form>
                </div>
              )}
              {isSuccess && (
                <div className="success-message">
                  <div className="text-success">
                    Thank you! Your submission has been received!
                  </div>
                </div>
              )}
               {isError && (
                <div className="error-message">
                  <div className="text-error">{isError}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )} */}

      {(presaleStatus == "running" || presaleStatus == "completed") && (
        <div id="Presale2" className="section">
          <h1
            className="heading-22"
            // style={{ margin: "0", fontSize: "3em", padding: "10px 0" }}
          >
            Just Cats Presale
          </h1>
          <div className="w-layout-blockcontainer container-5 w-container">
            <div className="text-block-13">
              <strong>
                $CATS is the first 3D animated series built on ERC20,
                <span className="centered-text"> where the community creates the story together with a team</span>
                <span className="centered-text"> of professional 3D artists.</span>
              </strong>
            </div>
          </div>
          {/* <div className="subtitle black" style={{ textAlign: "center" }}>
            $CATS is built on ERC404, combining NFTs and tokens into one
            ultimate hybrid token
          </div> */}
          {/* <h5
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontWeight: "500",
            }}
          >
            Stage - {raisedTarget.stage}
          </h5> */}
          <h1 className="heading-30">Until next Stage</h1>
          <div className="text-block-progress progress-bar__wrapper">
            <div className="progress">
              <label className="progress-bar__value" htmlFor="progress-bar">
                USDT Raised: $
                {usdRaised.toLocaleString(undefined, {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 3,
                })}{" "}
                / ${targetUsdAmount?.toLocaleString()}
              </label>
              <div
                className="progress-value"
                style={{
                  width: `${percent}%`,
                  height: percent <= 3 ? "1rem" : percent >= 4 && percent < 7 ? "1.75rem" : "80%",
                }}
              ></div>
            </div>
          </div>

          <h1 className="heading-21">Select your currency</h1>
          {wallet && chainId?.id === desiredChain && (
            <>
              <div className="text-block-12">
                $CATS Balance :<strong className="bold-text-4"> </strong>
                <strong>
                  {catsTokenBalance.toLocaleString(undefined, {
                    maximumFractionDigits: 4,
                  })}
                </strong>
              </div>

              <div className="text-block-12">
                Wallet Balance is
                <strong className="bold-text-4"> </strong>
                <strong>
                  {walletBalance.toLocaleString(undefined, {
                    maximumFractionDigits: 4,
                  })}
                </strong>
                <strong className="bold-text-4"> </strong>
                {currency == "eth" ? "ETH" : "USDT"}
              </div>
            </>
          )}
          <div className="columns w-row">
            <div className="column w-col w-col-6 w-col-medium-6 w-col-small-small-stack w-col-tiny-tiny-stack">
              <Link to="" className={`link-block w-inline-block ${currency == "eth" ? "active" : ""}`} onClick={() => setCurrency("eth")}>
                <img src={Eth} loading="lazy" width="20" alt="" className="image-2" />
                <h1 className="heading-19">ETH</h1>
              </Link>
            </div>
            <div className="column-3 w-col w-col-6 w-col-medium-6 w-col-small-small-stack w-col-tiny-tiny-stack">
              <Link to="" className={`link-block w-inline-block ${currency == "usdt" ? "active" : ""}`} onClick={() => setCurrency("usdt")}>
                <img src={Usdt} loading="lazy" width="20" alt="" className="image-2" />
                <h1 className="heading-19">USDT</h1>
              </Link>
            </div>
          </div>
          <div className="w-layout-blockcontainer container-3 w-container">
            <h1 className="heading-20">
              1 $CATS = $
              {catsPrice?.toLocaleString(undefined, {
                maximumFractionDigits: 4,
              })}
            </h1>
          </div>

          <div className="columns-2 w-row">
            <div className="column-4 w-col w-col-6">
              <div className="w-layout-blockcontainer container-4 w-container">
                <div>
                  <strong className="bold-text-4">{currency == "eth" ? "ETH" : "USDT"} you pay</strong>
                </div>
                <input
                  type="text"
                  placeholder="0.0"
                  minLength={1}
                  maxLength={79}
                  inputMode="decimal"
                  className="text-block-9"
                  value={payAmt}
                  autoComplete="off"
                  pattern="^[0-9]*[.,]?[0-9]*$"
                  onChange={(e) => {
                    if (!/^[0-9]*[.,]?[0-9]*$/.test(e.target.value)) {
                      e.preventDefault();
                      return;
                    }
                    if (currency === "eth" && !/^\d*\.?\d{0,18}$/.test(e.target.value)) {
                      e.preventDefault();
                      return;
                    }
                    if (currency === "usdt" && !/^\d*\.?\d{0,6}$/.test(e.target.value)) {
                      e.preventDefault();
                      return;
                    }
                    handlePayAmtChange(e.target.value.replace(/,/g, "."));
                  }}
                  // onKeyDown={(e) => {
                  //   if (['ArrowLeft', 'ArrowRight', 'Backspace'].includes(e.key)) {
                  //     return;
                  //   }
                  //   if (['e', 'E', '-', '+'].includes(e.key)) {
                  //     e.preventDefault();
                  //   }
                  //   if (currency === 'eth' && !/^\d*\.?\d{0,17}$/.test(e.currentTarget.value)) {
                  //     e.preventDefault();
                  //   }
                  //   if (currency === 'usdt' && !/^\d*\.?\d{0,5}$/.test(e.currentTarget.value)) {
                  //     e.preventDefault();
                  //   }
                  // }}
                  // onWheel={(e) => {
                  //   e.currentTarget.blur();
                  // }}
                  onFocus={(e) => {
                    if (parseFloat(e.target.value) === 0) {
                      e.target.value = "";
                    }
                  }}
                  onBlur={(e) => {
                    if (e.target.value === "") {
                      e.target.value = "0";
                    }
                  }}
                  style={{ width: "100%", border: "none", lineHeight: "unset" }}
                  min={0}
                />
                <span
                  className="button w-button"
                  onClick={(e) => {
                    e.preventDefault();
                    hitMax();
                  }}
                >
                  MAX
                </span>
              </div>
            </div>
            <div className="column-5 w-col w-col-6">
              <div className="w-layout-blockcontainer container-4 w-container">
                <div>
                  <strong className="bold-text-4">CATS you receive</strong>
                </div>
                <div className="text-block-9" ref={catsReceiveRef}>
                  0
                </div>
              </div>
            </div>

            {wallet && chainId?.id === desiredChain && (
              <div className="terms-container">
                <input type="checkbox" className="terms-checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                <p className="terms-and-conditions">
                  I have read and accept the
                  <a href="documents/Terms-of-Use_JustCats.pdf" className="terms-and-conditions-link" target="_blank">
                    Terms & Conditions
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
          {wallet ? (
            chainId?.id === desiredChain ? (
              <>
                <button className="text-block-10" onClick={() => handleBuyCats()} style={{ marginBottom: "0px" }}>
                  Buy CATS
                </button>
                <button className="text-block-10" onClick={() => handleClaim()}>
                  Claim $CATS
                </button>
              </>
            ) : (
              <button className="text-block-10" onClick={() => switchChain(desiredChainName)}>
                Switch Network
              </button>
            )
          ) : (
            <ConnectWallet className={"text-block-10"}/>
          )}

          <div className="w-layout-blockcontainer container-6 w-container">
            {/* <div className="column-8 w-col w-col-1">
              <img
                src={info}
                loading="lazy"
                width={40}
                sizes="(max-width: 767px) 40px, (max-width: 1439px) 30px, (max-width: 1919px) 2vw, 30px"
                alt=""
                srcSet={`${info500} 500w, ${info800} 800w, ${info} 1000w"`}
                className="image-3"
              />
            </div> */}
            <div className="column-9 w-col w-col-11">
              <div className="text-block-16">
                <strong>You don&#x27;t want to connect your wallet? Send ETH(ERC20) to:</strong>
              </div>
              <CopyToClipboard text={walletAddressAdmin} onCopy={handleCopy}>
                <a className="link-2">
                  {walletAddressAdmin}
                  <br />
                </a>
              </CopyToClipboard>
              <div style={{ marginTop: "4px", height: "20px" }}>{copied && "Copied!"}</div>
            </div>
            <div className="columns-5 w-row">
              <div className="column-10 w-col w-col-1">
                <img
                  src={info}
                  loading="lazy"
                  width={30}
                  sizes="(max-width: 767px) 100vw, (max-width: 1439px) 30px, (max-width: 1919px) 2vw, 30px"
                  alt=""
                  srcSet={`${info500} 500w, ${info800} 800w, ${info} 1000w"`}
                  className="image-4"
                />
              </div>
              <div className="w-col w-col-11">
                <div className="text-block-19">
                  Please send only from a decentralized wallet. Do not send from a central exchange, as we cannot assign CATS tokens to a
                  centralized exchange.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <>
        {presaleStatus === "completed" && showClaim && (
          <div className="modal">
            <div className="modal-content">
              <h5>Enter claim amount</h5>
              <span className="close" onClick={() => setShowClaim(false)}>
                &times;
              </span>
              <input
                type="number"
                className="text-block-9"
                ref={claimRef}
                onKeyDown={(e) => {
                  if (["e", "E", "-", "+"].includes(e.key)) e.preventDefault();
                }}
                onWheel={(e) => {
                  e.currentTarget.blur();
                }}
                onFocus={(e) => {
                  if (parseFloat(e.target.value) === 0) {
                    e.target.value = "";
                  }
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    e.target.value = "0";
                  }
                }}
                min={0}
                placeholder="Enter claim amount"
              />
              <button className="text-block-10" onClick={() => executeClaim()}>
                Claim
              </button>
            </div>
          </div>
        )}
      </> */}
    </>
  );
};

export default Presale;
