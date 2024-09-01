import React from "react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="pb-16 dark:bg-[#0e1630] dark:text-white"
        >
            <h2
                data-aos="fade-down"
                data-aos-duration="1500"
                className="flex items-center justify-center font-[700] text-[2.5rem] mb-8"
            >
                Get in touch
            </h2>
            <div className="container md:flex gap-4 ">
                <div className="md:flex md:w-1/2 h-[300px] sm:h-[450px]">
                    <iframe
                        title="google-maps"
                        src="   "
                        width="700"
                        height="400"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        // className="border-0 w-full h-full"
                    ></iframe>
                </div>

               {/* <div c lassName="w-full rounded-lg mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-orange-100 px-4 lg:px-8 py-8">
                    <form className="w-full">
                        <div className="mb-5">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 focus:outline-none rounded-[5px]"
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 focus:outline-none rounded-[5px]"
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 focus:outline-none rounded-[5px]"
                            />
                        </div>
                        <div className="mb-5">
                            <textarea
                                type="text"
                                rows={3}
                                placeholder="Write your message"
                                className="w-full p-3 focus:outline-none rounded-[5px]"
                            />
                        </div>
                        <button className="button-42 w-full">
                            Send Message
                        </button>
                    </form>
                </div> */}
            </div>
        </section>
    );
}