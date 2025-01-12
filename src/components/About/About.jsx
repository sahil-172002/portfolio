import React from "react";

function About() {
    return (
        <section id="services" className="bg-white dark:bg-[#00091D] overflow-hidden">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="font-[800] text-[2.4rem] mb-5 dark:text-white ">
                        About Me
                    </h2>
                    <p className="lg:max-w-[950px] lg:mx-auto font-[500] text-[16px] leading-7 dark:text-white">
                    Currently, I work as a Full-Stack Web Developer at Bizatcloud Solutions, where I design and build dynamic web applications. I hold a B.E. in Information Technology (2024) and am passionate about web development. My expertise includes front-end technologies like HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap, as well as backend development with Node.js, Express.js, API development, and MySQL. I am dedicated to staying current with modern web practices.
                    </p>
                </div>

                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 px-2 sm:max-w-full sm:px-0">
                        <div className="relative text-gray-700 dark:text-gray-300 antialiased text-sm font-semibold">
                            {/* Vertical line  */}
                            <div className="hidden absolute w-1 sm:block bg-orange-600 h-full left-1/2 transform -translate-x-1/2"></div>

                            {/* left card  */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div
                                                data-aos="fade-right"
                                                data-aos-duration="1600"
                                                className="bg-white dark:bg-gray-700 hover:dark:bg-[#fd7f0b] p-4 rounded shadow group hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                                            >
                                                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                                                <h3 className="font-[700] my-3 group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start">
                                                    Personal Info
                                                </h3>
                                                <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                                                    <div className="flex flex-col gap-2">
                                                        <h1>
                                                            <i class="ri-user-fill mr-2"></i>
                                                           Sahil Andhare
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-mail-fill mr-2"></i>
                                                            sahil172002@gmail.com
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-phone-fill mr-2"></i>
                                                            +91 xxxxxxxxxx
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-graduation-cap-fill mr-2"></i>
                                                            B.E in - Information and Technology
                                                         
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-map-pin-fill mr-2"></i>
                                                            Pune, Maharashtra,
                                                            India
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500 border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-account-circle-fill text-[18px]"></i>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* right card */}  

                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div
                                                data-aos="fade-left"
                                                data-aos-duration="1600"
                                                className="bg-white p-4 rounded shadow group dark:bg-gray-700 hover:dark:bg-[#fd7f0b]  hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                                            >
                                                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                                                <h3
                                                    className="font-[700] my-3
                                                group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start"
                                                >
                                                    Work Experince
                                                </h3>

                                                <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                                                <h1>
                                                            <i class="ri-calendar-schedule-fill mr-2"></i>
                                                            July 2024 - Present
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-shield-user-fill mr-2"></i>
                                                           Role: Full-Stack Web Developer
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-building-4-fill mr-2"></i>
                                                            Company: Bizatcloud Solutions
                                                        </h1>
                                                        <h1>    
                                                        <i class="ri-honour-fill"></i>
                                                         &nbsp;  Currently working on developing full-stack web applications.  
                                                         
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-map-pin-fill mr-2"></i>
                                                            Remote,
                                                            India
                                                        </h1>


                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500  border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-building-2-fill text-[18px]"></i>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div
                                                data-aos="fade-left"
                                                data-aos-duration="1600"
                                                className="bg-white p-4 rounded shadow group dark:bg-gray-700 hover:dark:bg-[#fd7f0b]  hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                                            >
                                                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                                                <h3
                                                    className="font-[700] my-3
                                                group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start"
                                                >
                                                    Internship
                                                </h3>

                                                <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                                                <h1>
                                                            <i class="ri-calendar-schedule-fill mr-2"></i>
                                                            Jan 2024 - April 2024
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-shield-user-fill mr-2"></i>
                                                           Role: TCW Intern
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-building-4-fill mr-2"></i>
                                                            Company: GeeksforGeeks
                                                        </h1>
                                                        <h1>    
                                                        <i class="ri-honour-fill"></i>
                                                         &nbsp;  I contributed valuable content to the tech community
                                                         
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-map-pin-fill mr-2"></i>
                                                            Remote,
                                                            India
                                                        </h1>



                                                </div>

                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500  border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-building-2-fill text-[18px]"></i>
                                        </figure>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div
                                                data-aos="fade-left"
                                                data-aos-duration="1600"
                                                className="bg-white p-4 rounded shadow group dark:bg-gray-700 hover:dark:bg-[#fd7f0b]  hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                                            >
                                                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                                                <h3
                                                    className="font-[700] my-3
                                                group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start"
                                                >
                                                    Internship
                                                </h3>

                                                <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                                                <h1>
                                                            <i class="ri-calendar-schedule-fill mr-2"></i>
                                                            Feb 2023 - Apr 2023
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-shield-user-fill mr-2"></i>
                                                           Role: Feb 2023 - Apr 2023
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-building-4-fill mr-2"></i>
                                                            Company: Bizatcloud Solutions
                                                        </h1>
                                                        <h1>    
                                                        <i class="ri-honour-fill"></i>
                                                         &nbsp;  I designed and developed loan module pages & API's. 
                                                         
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-map-pin-fill mr-2"></i>
                                                            Remote,
                                                            India
                                                        </h1>


                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500  border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-building-2-fill text-[18px]"></i>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* left card  */}
                            
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div
                                                data-aos="fade-right"
                                                data-aos-duration="1600"
                                                className="bg-white dark:bg-gray-700 hover:dark:bg-[#fd7f0b] p-4 rounded shadow group hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                                            >
                                                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                                                <h3 className="font-[700] my-3 group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start">
                                                    Education
                                                </h3>

                                                <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                                                    <div className="">
                                                        <h1>
                                                            <i class="ri-graduation-cap-fill mr-2"></i>
                                                            Jaywantrao Sawant College of Engineering, Pune University <br></br>
                                                

                                                              
                                                        </h1>
                                                        <h2 className="">
                                                        Bachelor of Engineering in Information & Technology{" | "}
                                                            <span>
                                                                2020 - 2024
                                                            </span>
                                                        </h2>
                                                    </div>

                                                    <div className="">
                                                        <h1>
                                                            <i class="ri-graduation-cap-fill mr-2"></i>
                                                            Laxmanrao Apte Junior College, Deccan, Pune
                                                        </h1>
                                                        <h2 className="">
                                                            HSC{" | "}
                                                            <span>
                                                                2019 - 2020
                                                            </span>
                                                        </h2>
                                                    </div>
                                                    <div className="">
                                                        <h1>
                                                            <i class="ri-graduation-cap-fill mr-2"></i>
                                                            Mahatma Gandhi High School and Jr College
                                                        </h1>
                                                        <h2 className="">
                                                            SSC{" | "}
                                                            <span>
                                                                2017 - 2018
                                                            </span>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500 border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-graduation-cap-fill text-[18px]"></i>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* right card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div
                                                data-aos="fade-left"
                                                data-aos-duration="1600"
                                                className="bg-white p-4 rounded shadow group dark:bg-gray-700 hover:dark:bg-[#fd7f0b]  hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                                            >
                                                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                                                <h3
                                                    className="font-[700] my-3
                                                group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start"
                                                >
                                                    Skills
                                                </h3>

                                                <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                                                    <div>
                                                        <h1>
                                                            <i class="ri-contrast-fill mr-2"></i>
                                                            Frontend
                                                        </h1>
                                                        <p>
                                                            HTML, CSS,
                                                            JavaScript,
                                                            Bootstrap, Tailwind, API development
                                                            CSS, React.js, Redux{" "}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h1>
                                                            <i class="ri-server-fill mr-2"></i>
                                                            Backend
                                                        </h1>
                                                        <p>
                                                            Node.js, Express.js,
                                                            EJS{" "}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h1>
                                                            <i class="ri-database-2-fill mr-2"></i>
                                                            Database
                                                        </h1>
                                                        <p>
                                                            MongoDB, SQL,MongoDB, 
                                                            Appwrite{" "}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h1>
                                                            <i class="ri-terminal-window-fill mr-2"></i>
                                                            Tools
                                                        </h1>
                                                        <p>
                                                        GitHub, Postman, google firebase, Netlify, vercel, canava, figma {" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500  border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-code-s-slash-line text-[18px]"></i>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
