import React from "react";
import { AiOutlineGithub, AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";

import "./DesktopTwo.css";

function DesktopTwo() {
  return (
    <>
      <section>
        <div class="row " id="Cards">
          <div class="col-6">
            <div class="row">
              <div class="col-4"></div>
              <div class="col-8">
                <div class="card text-white bg-dark mb-3 cardWidth">
                  <div class="card-header text-center">
                    <h5>TodoList App</h5>
                  </div>
                  <div class="card-body">
                    <p class="card-text text-left">
                      TodoList App is a CRUD App, where you can Create, Read,
                      Update, Delete the Data which is your Todos. It is
                      connected with google Firebase.
                    </p>
                    <a
                      href="https://amazing-bassi-b1cf60.netlify.app/"
                      class="btn btn-outline-light"
                    >
                      Live Link
                    </a>
                    <a
                      href="https://github.com/gauravsinhaweb/TodoList-App"
                      class="btn btn-light mx-2"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-4"></div>
              <div class="col-8">
                <div class="card text-white bg-dark mb-3 cardWidth">
                  <div class="card-header text-center">
                    <h5>Weather App</h5>
                  </div>
                  <div class="card-body ">
                    <p class="card-text text-left">
                      The weather app provides Realtime atmospheric pressure,
                      weather conditions, relative humidity, precipitation in
                      different unites. Its is made by using openweather API.
                    </p>
                    <a
                      href="https://gauravsinhaweb.github.io/weather-app/#/"
                      class="btn btn-outline-light"
                    >
                      Live Link
                    </a>
                    <a
                      href="https://github.com/gauravsinhaweb/weather-app"
                      class="btn btn-light mx-2"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="rectangle ">
        <div class="text-white text-center py-4 connect">Connect with me🖖</div>
        <div id="icons" class="text-center ">
          <a href="https://twitter.com/gauravsinhaweb">
            <FaTwitter class="icon twitter" />
          </a>
          <a href="https://github.com/gauravsinhaweb">
            <AiOutlineGithub class="icon github" />
          </a>
          <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCKHQdcMFpPZMMnMNkKZRDgxntXjnGCMSRvSVjVdBsZTKbdXkQJrvTwpHbDBTrPlVzRmsnfg">
            <MdEmail class="icon email" />
          </a>

          <a href="https://www.linkedin.com/in/gaurav-sinha-032386187/">
            <IoLogoLinkedin class="icon linkedin" />
          </a>
        </div>
        <div class="text-white text-center copyright">
          Copyright ©2021 All rights reserved.
        </div>
      </div>
    </>
  );
}

export default DesktopTwo;
