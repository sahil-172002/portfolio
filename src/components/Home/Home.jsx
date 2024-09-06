import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type";
import CountUp from "react-countup";
import Hero from "./hero.jpg";
import Resume from "./Sahil Andhare_SDE.pdf";
import About from "../About/About";
<script defer src="https://cloud.umami.is/script.js" data-website-id="2ce6ea76-cb24-41c3-b94e-dc67c6cbbbc1"></script>
// import { BackgroundGradient } from "../ui/background-gradient";
import Down from "../../assets/down.svg";

export default function Home() {
    return (
        <>
            <section
                className="min-h-[95vh] md:min-h-[90vh] relative pt-0 overflow-hidden bg-[#fff] dark:bg-[#0e1630] dark:text-white bg-[radial-gradient(#0000004f_1px,#ffffff1a_1px)] bg-[size:20px_20px] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[size:20px_20px ] overflow-hidden"
                
                
                id="about"
            >
                <div className="container max-w-7xl pt-14">
                    
                    <div className="md:flex items-center justify-between sm: flex-col md:flex-row">
                        
                        {/* Left side */}
                        <div className="w-full md:basis-1/2 mb-10">
                         
                            <h1
                                data-aos="fade-left"
                                data-aos-duration="1600"
                                className="md:text-5xl text-center md:text-left text-3xl font-bold md:leading-[4.5rem] leading-[3rem]"
                            >
                                
                                    <div className="w-14 h-[px] bg-black dark:bg-white"></div>
                                    
                                    
                              
                                I am Sahil Andhare

                                <h5
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className="text-[#fd5e2b] pt-2 text-center sm:flex sm:justify-start text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]"
                            >
                                <Type />
                            </h5>
                                {/* <div className="flex gap-4">v

                                <div>I'm</div>
                                <div className="waviy">
                                    <span style={{ "--i": 1 }}>A</span>
                                    <span style={{ "--i": 2 }}>b</span>
                                    <span style={{ "--i": 3 }}>h</span>
                                    <span style={{ "--i": 4 }}>i</span>
                                    <span style={{ "--i": 5 }}>s</span>
                                    <span style={{ "--i": 6 }}>h</span>
                                    <span style={{ "--i": 7 }}>e</span>
                                    <span style={{ "--i": 8 }}>k</span>
                                </div>
                                <div className="waviy">
                                    <span style={{ "--i": 9 }}>S</span>
                                    <span style={{ "--i": 10 }}>w</span>
                                    <span style={{ "--i": 11 }}>a</span>
                                    <span style={{ "--i": 12 }}>m</span>
                                    <span style={{ "--i": 13 }}>i</span>
                                    
                                </div>
                            </div> */}
                            </h1>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1700"
                                className="flex gap-2 font-medium text-[15px] leading-7  sm:pr-10 text-center sm:text-start text-black 
                                 dark:text-gray-400 mt-3"
                            >
                                <br></br>
                                I'm a web designer and full-stack developer
                                focused on crafting clean & user-friendly
                                experiences, I am passionate about building
                                excellent software that improves the lives of
                                those around me.
                            </p>
                            {/* Butttos  */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="200"
                                className="flex items-center justify-center sm:justify-start gap-6 mt-7"
                            >
                                <Link to="/contact">
                                    <button className="button-87  p-2">
                                        Contact Me
                                        <i class="ri-contacts-line ml-2"></i>
                                    </button>
                                </Link>
                                <a href={Resume} download={true}>
                                    <button className="button-87 p-2" role="button">
                                        Download CV
                                        <i class="ri-download-2-line ml-2"></i>
                                    </button>
                                </a>
                            </div>
                            {/* Social Icons  */}
                            <div
                                className="flex items-center justify-center sm:justify-start gap-9 mt-10"
                                data-aos="fade-up"
                                data-aos-duration="1600"
                            >
                                <a
                                    href="https://github.com/sahil-172002"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[22px] font-[400] hover:text-orange-500 transition-all ease-in duration-200"
                                >
                                    <i class="ri-github-fill"></i>
                                </a>
                                <a
                                    href="https://x.com/Sahil_1718_"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[22px] font-[400] hover:text-orange-500 transition-all ease-in duration-200"
                                >
                                    <i class="ri-twitter-x-line"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/sahil-andhare-3248b5205/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[22px] font-[400] hover:text-orange-500 transition-all ease-in duration-200"
                                >
                                    <i class="ri-linkedin-box-fill"></i>
                                </a>
                            </div>
                        </div>
                        {/* <div className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-800">
                            <img 
                                className="rounded-full hidden lg:block sm:w-60 md:w-72 p-1"
                                src="/sa_profile_img.jpg" alt="profile pic" />
                        </div> */}
                    </div>
                </div>

                <div className="flex justify-center">
                        <img src={Down} alt="" className="hidden top-3/4 md:block animate-jump w-10 absolute " />
                    </div>
            </section>
            <About />
        </>
    );
}