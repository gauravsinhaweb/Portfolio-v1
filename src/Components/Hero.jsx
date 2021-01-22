import React from "react";
import Dp from "../Images/Dp.png";
import Framework from "../Images/Framework.svg";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section>
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6">
            <div class="row">
              <div class="col-6"></div>
              <div class="col-6">
                <div id="navButton" class="row navbar ">
                  <button type="button" class="btn btn-dark ">
                    Work
                  </button>
                  <button type="button" class="btn btn-dark">
                    Contact
                  </button>

                  <div class="col-4"></div>
                </div>
              </div>
              <div class="col-4"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-2">
        <div class="row ">
          <div class="col-6">
            <div class="row">
              <div class="col-2"></div>
              <div id="para" class="col-10">
                <h1 class="display-1">
                  Hi I’m Gaurav Sinha, <br /> a Software Engineer.
                </h1>
              </div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <div id="downloadButton" class="col-10 ">
                <button type="button" class="btn btn-dark">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-4"></div>
              <div class="col-6">
                <img src={Dp} height="400" alt="" />
              </div>
              <div class="col-4"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-4"></div>
          <div class="col-4 text-center frameworkText">
            Frameworks and Softwares I worked with:
          </div>

          <div class="col-4 "></div>
        </div>
        <div class="row">
          <div class="col-3"></div>
          <div id="Frameworks" class="col-3 ">
            <img
              src={Framework}
              alt=""
              height="100"
              class="text-center backSvg"
            />
          </div>
          <div class="col-3"></div>
          <div class="col-3"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
