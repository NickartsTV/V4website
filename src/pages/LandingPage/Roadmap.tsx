import { forwardRef, useState } from 'react'
import Map from "@images/map/map2.png"
import Map_1 from "@images/map/map2-p-500.png"
import Map_2 from "@images/map/map2-p-800.png"
import Map_3 from "@images/map/map2-p-1080.png"
import Map_4 from "@images/map/map2-p-1600.png"

const Roadmap = forwardRef<HTMLDivElement>((props, ref) => {
    const [activeStep, setActiveStep] = useState<number>(1)
  return (
    <div className="page-wrapper" ref={ref}>
      <div className="global-styles w-embed"></div>

      <main className="main-wrapper">
        <div className="section-roadmap overflow-hidden">
          <div id="Roadmap" className="page-padding">
            <div className="container-medium">
              <div className="margin-vertical margin-xhuge">
                <div className="roadmap-component">
                  <div className="heading-wrapper">
                    <div className="padding-vertical padding-small">
                      <div className="margin-bottom margin-xxlarge">
                        <div className="max-width-xlarge">
                          <h2 className="heading-style-h2">The <span className="text-color-cyan">Roadmap</span></h2>
                          <p className="paragraph-8">You can find all of Just Cats&#x27; long-term destinations here on our map</p>
                        </div>
                      </div>
                      <div id="roadmap" className="roadmap-wrap">
                        <div className="map-container">
                          <img 
                              src={Map}
                              loading="eager" 
                              sizes="(max-width: 479px) 100vw, (max-width: 767px) 687.2000122070312px, (max-width: 991px) 92vw, (max-width: 1439px) 93vw, 1024px" 
                              srcSet={`${Map_1} 500w, ${Map_2} 800w, ${Map_3} 1080w, ${Map_4} 1600w, ${Map} 1835w`}
                              alt="" 
                              className="map-img" 
                          />
                          <div id="map-dot-1" className={`map-dot is-1 ${activeStep==1 && 'dot-active'}`}>
                            <div className="box" onClick={()=>setActiveStep(1)}>
                              <div className="box-inner">
                                <div className="map-number">1</div>
                              </div>
                            </div>
                            <div className="map-pin-popup dialog-opened _1-mint popup-bottom">
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">1. Preparation</h3>
                              </div>
                              <div className="text-size-regular">• Launch Website<br />• Unveil the first Teaser<br/ >• Initiate Presale Phase</div>
                            </div>
                          </div>
                          <div id="map-dot-3" className={`map-dot is-3 ${activeStep==2 && 'dot-active'}`}>
                            <div className="box" onClick={()=>setActiveStep(2)}>
                              <div className="box-inner">
                                <div className="map-number">2</div>
                              </div>
                            </div>
                            <div className="map-pin-popup dialog-opened _3-title popup-bottom">
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">2. Character Work &amp; Community</h3>
                              </div>
                              <div className="pin-description">• Release Second Main Character<br/>
                              {/* • Open Telegram Chat<br/> */}
                              • Open Discord for $CATS holders</div>
                            </div>
                          </div>
                          <div id="map-dot-4" className={`map-dot is-4 ${activeStep==3 && 'dot-active'}`}>
                            <div className="box" onClick={()=>setActiveStep(3)}>
                              <div className="box-inner">
                                <div className="map-number">3</div>
                              </div>
                            </div>
                            <div className="map-pin-popup dialog-opened _4-title popup-bottom">
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">3. Growth &amp; Character Work</h3>
                              </div>
                              <div className="pin-description">• Release Third Main Character<br />• Expand Partnerships<br/>• Finalize the Presale</div>
                            </div>
                          </div>
                          <div id="map-dot-6" className={`map-dot is-6 ${activeStep==4 && 'dot-active'}`}>
                            <div className="box" onClick={()=>setActiveStep(4)} >
                              <div className="box-inner">
                                <div className="map-number">4</div>
                              </div>
                            </div>
                            <div className="map-pin-popup dialog-opened _6-title popup-bottom">
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">4. Storytelling</h3>
                              </div>
                              <div className="pin-description">
                                  • Release Just Cats World<br />
                                  • Storytelling with the Community<br/>
                                  • Develop First Just Cats Script
                              </div>
                            </div>
                          </div>
                          <div id="map-dot-7" className={`map-dot is-7 ${activeStep==5 && 'dot-active'}`}>
                            <div className="box" onClick={()=>setActiveStep(5)}>
                              <div className="box-inner">
                                <div className="map-number">5</div>
                              </div>
                            </div>
                            <div className="map-pin-popup dialog-opened _7-title popup-bottom">
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">5. Series in Progress</h3>
                              </div>
                              <div className="pin-description">
                                  • Start animating the series<br/>
                                  • Focus on Livestreams with the Community<br/>
                                  • First Series Teaser
                              </div>
                            </div>
                          </div>
                          <div id="map-dot-8" className={`map-dot is-8 ${activeStep==6 && 'dot-active'}`}>
                            <div className="box" onClick={()=>setActiveStep(6)}>
                              <div className="box-inner">
                                <div className="map-number">6</div>
                              </div>
                            </div>
                            <div className="map-pin-popup dialog-opened _8-title popup-bottom">
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">6. Final Series Release</h3>
                              </div>
                              <div className="pin-description">
                                  • Publish the First Episode<br/>
                              • Focus on Marketing<br/>
                              • Strengthen Partnerships</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="roadmap-component-mobile">
                  <div className="roadmap-wrapper">
                    <div className="padding-vertical padding-small">
                      <div className="margin-bottom margin-xxlarge">
                        <div className="max-width-xlarge">
                          <h2 className="heading-style-h2">The <span className="text-color-cyan">Roadmap</span></h2>
                        </div>
                      </div>
                      <div id="roadmap-mobile" className="roadmap-wrap">
                        <div className="map-container-mobile">
                          <img 
                              src={Map} 
                              loading="eager" 
                              sizes="(max-width: 479px) 90vw, 100vw" 
                              srcSet={`${Map_1} 500w, ${Map_2} 800w, ${Map_3} 1080w, ${Map_4} 1600w, ${Map} 1835w`}
                              alt="" 
                              className="map-img" 
                          />
                          <div id="map-dot-mobile-1" className={`map-dot-mobile is--1 ${activeStep==1&&"dot-active"}`} onClick={()=>setActiveStep(1)}>
                            <div className="box">
                              <div className="box-inner">
                                <div className="map-number">1</div>
                              </div>
                            </div>
                          </div>
                          <div id="map-dot-mobile-3" className={`map-dot-mobile is--3 ${activeStep==2&&"dot-active"}`} onClick={()=>setActiveStep(2)}>
                            <div className="box">
                              <div className="box-inner">
                                <div className="map-number">2</div>
                              </div>
                            </div>
                          </div>
                          <div id="map-dot-mobile-4" className={`map-dot-mobile is--4 ${activeStep==3&&"dot-active"}`} onClick={()=>setActiveStep(3)}>
                            <div className="box">
                              <div className="box-inner">
                                <div className="map-number">3</div>
                              </div>
                            </div>
                          </div>
                          <div id="map-dot-mobile-6" className={`map-dot-mobile is--6 ${activeStep==4&&"dot-active"}`} onClick={()=>setActiveStep(4)}>
                            <div className="box">
                              <div className="box-inner">
                                <div className="map-number">4</div>
                              </div>
                            </div>
                          </div>
                          <div id="map-dot-mobile-7" className={`map-dot-mobile is--7 ${activeStep==5&&"dot-active"}`} onClick={()=>setActiveStep(5)}>
                            <div className="box">
                              <div className="box-inner">
                                <div className="map-number">5</div>
                              </div>
                            </div>
                          </div>
                          <div id="map-dot-mobile-8" className={`map-dot-mobile is--8 ${activeStep==6&&"dot-active"}`} onClick={()=>setActiveStep(6)}>
                            <div className="box">
                              <div className="box-inner">
                                <div className="map-number">6</div>
                              </div>
                            </div>
                          </div>
                          <div className="map-dialog-mobile">
                            <div id="Map-Pin-Popup-Mobile-1" className={`map-pin-popup-mobile is--1 ${activeStep==1&&"map-pin-popup-mobile-active"}`}>
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">1. Preparation</h3>
                              </div>
                              <div className="text-size-regular">
                                  • Launch Website<br/>
                                  • Unveil the first Teaser<br/>
                                  • Initiate Presale Phase</div>
                            </div>
                            <div id="Map-Pin-Popup-Mobile-3" className={`map-pin-popup-mobile is--3 ${activeStep==2&&"map-pin-popup-mobile-active"}`}>
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">2. Character Work &amp; Community</h3>
                              </div>
                              <div className="pin-description">
                                  • Release Second Main Character<br />
                                  {/* • Open Telegram Chat<br/> */}
                                  • Open Discord for $CATS holders
                              </div>
                            </div>
                            <div id="Map-Pin-Popup-Mobile-4" className={`map-pin-popup-mobile is--4 ${activeStep==3&&"map-pin-popup-mobile-active"}`}>
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">3. Growth &amp; Character Work</h3>
                              </div>
                              <div className="pin-description">• Release Third Main Character<br/>• Expand Partnerships<br/>• Finalize the Presale</div>
                            </div>
                            <div id="Map-Pin-Popup-Mobile-6" className={`map-pin-popup-mobile is--6 ${activeStep==4&&"map-pin-popup-mobile-active"}`}>
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">4. Storytelling</h3>
                              </div>
                              <div className="pin-description">
                                  • Release Just Cats World<br/>
                                  • Storytelling with the Community<br/>
                                  • Develop First Just Cats 
                              </div>
                            </div>
                            <div id="Map-Pin-Popup-Mobile-7" className={`map-pin-popup-mobile is--7 ${activeStep==5&&"map-pin-popup-mobile-active"}`}>
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">5. Series in Progress</h3>
                              </div>
                              <div className="pin-description">
                                  • Start animating the series<br />
                                  • Focus on Livestreams with the Community<br/>
                                  • First Series Teaser
                              </div>
                            </div>
                            <div id="Map-Pin-Popup-Mobile-8" className={`map-pin-popup-mobile is--8 ${activeStep==6&&"map-pin-popup-mobile-active"}`}>
                              <div className="roadmap-popup-title">
                                <h3 className="map-pin-title">6. Final Series Release</h3>
                              </div>
                              <div className="pin-description">
                                  • Publish the First Episode<br/>
                                  • Focus on Marketing<br/>
                                  • Strengthen Partnerships
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="html-map w-embed">
            </div>
          </div>
        </div>
      </main>
    </div>
  )
})

export default Roadmap