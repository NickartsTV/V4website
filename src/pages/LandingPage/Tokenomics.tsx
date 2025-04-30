import { forwardRef } from "react";
import WaveBlue from "@images/wavebluedown/wavebluedown.png";
import WaveBlue_1 from "@images/wavebluedown/wavebluedown-p-500.png";
import WaveBlue_2 from "@images/wavebluedown/wavebluedown-p-800.png";
import WaveBlue_3 from "@images/wavebluedown/wavebluedown-p-1080.png";
import WaveBlue_4 from "@images/wavebluedown/wavebluedown-p-1600.png";
import WaveBlue_5 from "@images/wavebluedown/wavebluedown-p-2000.png";
import WaveBlue_6 from "@images/wavebluedown/wavebluedown-p-2600.png";
import WaveBlue_7 from "@images/wavebluedown/wavebluedown-p-3200.png";
import Wave2 from "@images/wavebluedown/wave2darkwhite.png";
import Wave2_1 from "@images/wavebluedown/wave2darkwhite-p-500.png";
import Wave2_2 from "@images/wavebluedown/wave2darkwhite-p-800.png";
import Wave2_3 from "@images/wavebluedown/wave2darkwhite-p-1080.png";
import Wave2_4 from "@images/wavebluedown/wave2darkwhite-p-1600.png";
import Wave2_5 from "@images/wavebluedown/wave2darkwhite-p-2000.png";
import Wave2_6 from "@images/wavebluedown/wave2darkwhite-p-2600.png";
import Wave2_7 from "@images/wavebluedown/wave2darkwhite-p-3200.png";
import Accordian from "@/components/partials/Accordian";
import PieChart from "@/components/ui/PieChart";

const Tokenomics = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <div id="Tokenomics" className="section-bg" ref={ref}>
        <div className="div-block-7">
          <div className="block-heading-center">
            <h2 className="heading-11">Tokenomics</h2>
            <p>
              We present the $CATS token, built on the ERC20 protocol,
              with a total supply of 5,000,000 $CATS. These tokens
              will be distributed based on the following allocation plan.
            </p>
          </div>
        </div>
        <div className="div-block-8">
          <div className="container-large">
            <div className="padding-section-large padding-top-0">
              <div className="_2-col-grid">
                <div
                  id="w-node-fb7dff39-23bc-0984-0648-f76fedbb813f-eeff28d5"
                  className="chart_wrapper"
                >
                  <div className="w-embed w-script">
                    <PieChart
                      data={[
                        { label: "Presale", value: 7 },
                        { label: "Series Production", value: 38 },
                        { label: "Dex", value: 30 },
                        { label: "Team", value: 10 },
                        { label: "Marketing", value: 15 },
                      ]}
                    />
                  </div>
                </div>
                <div id="w-node-fc27eb30-e6ed-97ce-2c9e-a31dcc28826c-eeff28d5">
                  <div className="w-layout-grid grid-4-columns">
                    <div
                      id="w-node-fc27eb30-e6ed-97ce-2c9e-a31dcc28826e-eeff28d5"
                      className="achievement"
                    >
                      <h5 className="heading-achievement">Presale</h5>
                      <div className="text-achievement">7%</div>
                      <p className="paragraph-9">
                        7% of the token supply is allocated to the $CATS
                        presale for participation in the Just Cats Series.
                      </p>
                    </div>
                    <div
                      id="w-node-fc27eb30-e6ed-97ce-2c9e-a31dcc288277-eeff28d5"
                      className="achievement"
                    >
                      <h5 className="heading-12">Series Production</h5>
                      <div className="text-block-3">38%</div>
                      <p className="paragraph-10">
                        Allocating 38% of the $CATS supply to series 
                        production highlights the project's commitment
                        to producing the series to the highest quality.
                      </p>
                    </div>
                    <div
                      id="w-node-fc27eb30-e6ed-97ce-2c9e-a31dcc288280-eeff28d5"
                      className="achievement"
                    >
                      <h5 className="heading-13">DEX</h5>
                      <div className="text-block-4">30%</div>
                      <p className="paragraph-11">
                        This allocation is designated to DEX liquidity,
                        strategically enhancing liquidity provision.
                      </p>
                    </div>
                    <div
                      id="w-node-fc27eb30-e6ed-97ce-2c9e-a31dcc288289-eeff28d5"
                      className="achievement"
                    >
                      <h5 className="heading-14">Team</h5>
                      <div className="text-block-5">10%</div>
                      <p className="paragraph-12">
                        10% of the token supply is set aside for the team to
                        ensure the long-term success of the series and to open
                        up new opportunities.
                      </p>
                    </div>
                    <div
                      id="w-node-fc27eb30-e6ed-97ce-2c9e-a31dcc288292-eeff28d5"
                      className="achievement"
                    >
                      <h5 className="heading-marketing">Marketing</h5>
                      <div className="text-block-5">15%</div>
                      <p className="paragraph-12">
                        The tokens allocated for marketing will be used 
                        to boost the visibility and reach of Just Cats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={WaveBlue}
          loading="eager"
          sizes="100vw"
          srcSet={`${WaveBlue_1} 500w, ${WaveBlue_2} 800w, ${WaveBlue_3} 1080w, ${WaveBlue_4} 1600w, ${WaveBlue_5} 2000w, ${WaveBlue_6} 2600w, ${WaveBlue_7} 3200w, ${WaveBlue} 8004w`}
          alt=""
          className="wave-top"
        />
      </div>
      <div className="section padding-10-6em">
        <div className="content">
          <div className="block-heading-center">
            <div className="subtitle">
              FAQ
              <br />
            </div>
            <h2 className="heading">Frequently Asked Questions</h2>
          </div>
          <section className="accordion">
            <Accordian
              heading="How can I buy the $CATS token in the presale?"
              content="You have the option to purchase the $CATS token using either ETH or USDT. To proceed, all you need to do is load either of these currencies onto your decentralized Wallet (ETH-Network), such as Metamask, then connect it here on our website and specify the desired amount for purchase."
              id="accoc-1"
            />
            <Accordian
              heading="When can I claim my purchased $CATS tokens?"
              content="You are able to claim your bought $CATS tokens following the conclusion of the presale."
              id="accoc-2"
            />
            <Accordian
              heading="What is the launch price of $CATS?"
              content="The launch price will be determined once the presale is sold out."
              id="accoc-3"
            />
            <Accordian
              heading="Why does the $CATS token launch on ERC20?"
              content=" The ERC20 standard ensures compatibility with a wide range of wallets and decentralized applications. Additionally, ERC20 is a proven and ecure protocol, providing a reliable foundation for Just Cats "
              id="accoc-4"
            />
            <Accordian
              heading="When will the series be released?"
              content="The completion timeline relies on our workflow pace, but we refrain from making definitive commitments because our goal is to produce an entertaining and high-quality series. Quality work requires adequate time and dedication."
              id="accoc-5"
            />
            <Accordian
              heading="Where will the series be published?"
              content="Our initial strategy is to broadcast the series publicly on YouTube to make it accessible to everyone, but we also explore other possibilities, such as larger streaming services."
              id="accoc-6"
            />
          </section>
        </div>
        <img
          sizes="100vw"
          loading="eager"
          src={Wave2}
          srcSet={`${Wave2_1} 500w, ${Wave2_2} 800w, ${Wave2_3} 1080w, ${Wave2_4} 1600w, ${Wave2_5} 2000w, ${Wave2_6} 2600w, ${Wave2_7} 3200w, ${Wave2} 8004w`}
          alt=""
          className="wave-top"
        />
      </div>
    </>
  );
});

export default Tokenomics;
