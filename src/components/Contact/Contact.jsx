import React from "react";

import { useState } from "react";

// export default function Contact() {
//     return (
//         <section
//             id="contact"
//             className="pb-16 dark:bg-[#0e1630] dark:text-white"
//         >
//             <h2
//                 data-aos="fade-down"
//                 data-aos-duration="1500"
//                 className="flex items-center justify-center font-[700] text-[2.5rem]   -8"
//             >
//                 Get in touch
//             </h2>

//                {/* <div c lassName="w-full rounded-lg mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-orange-100 px-4 lg:px-8 py-8">
//                     <form className="w-full">
//                         <div className="mb-5">
//                             <input
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 className="w-full p-3 focus:outline-none rounded-[5px]"
//                             />
//                         </div>
//                         <div className="mb-5">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="w-full p-3 focus:outline-none rounded-[5px]"
//                             />
//                         </div>
//                         <div className="mb-5">
//                             <input
//                                 type="text"
//                                 placeholder="Subject"
//                                 className="w-full p-3 focus:outline-none rounded-[5px]"
//                             />
//                         </div>
//                         <div className="mb-5">
//                             <textarea
//                                 type="text"
//                                 rows={3}
//                                 placeholder="Write your message"
//                                 className="w-full p-3 focus:outline-none rounded-[5px]"
//                             />
//                         </div>
//                         <button className="button-42 w-full">
//                             Send Message
//                         </button>
//                     </form>
//                 </div> */}
//             </div>
//         </section>
//     );
// }

export default function Contact() {
  const initialState = {
    name: "",
    email: "",
    type: "comment",
    feedback: "",
  };

  const [feedbackForm, setFeedbackForm] = useState(initialState);
  const [isPending, setIsPending] = useState(false);
  const [response, setResponse] = useState(false);

  function handleChange(e) {
    const { id, value, type } = e.target;

    setFeedbackForm((state) => ({
      ...state,
      [type === "radio" ? "type" : id]: value,
    }));
  }

  function handleClear(e) {
    e.preventDefault();
    setFeedbackForm(initialState);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsPending(true);
    const isfeedbackValid =
      feedbackForm.name.trim() &&
      feedbackForm.email.trim() &&
      feedbackForm.feedback.trim();

    if (!isfeedbackValid) {
      return;
    }

    const response = await feedbackFunction(feedbackForm);
    setResponse(response);

    setFeedbackForm(initialState);
    setIsPending(false);
    console.log("Feedback submitted successfully!");

    setTimeout(() => {
      setResponse(false);
    }, 2000);
  }

  return (
    <main className="pt-20 dark:bg-[#0e1630] flex flex-col content-center items-center">
      <h1 className="text-3xl font-bold dark:text-gray-200 text-gray-800">
        Get in Touch
      </h1>

      <div>
      <p className="mt-5 w-full font-medium dark:text-gray-200 text-gray-600 text-lg leading-relaxed">
        Feel free to reach out for inquiries & collaborations!
      </p>
      </div>

      {!response ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-4 max-w-md"
        >
          {/* <Input
            id="name"
            value={feedbackForm.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <Input
            id="email"
            value={feedbackForm.email}
            onChange={handleChange}
            placeholder="Enter your email"
          /> */}

          <div className="flex flex-wrap items-center gap-7">
            <span className="flex items-center gap-2">
              <input
                id="comment"
                className="accent-gray-500 dark:accent-gray-secondary"
                name="feedback-type"
                checked={feedbackForm.type === "comment"}
                value="comment"
                onChange={handleChange}
                type="radio"
              />
              <label
                className="font-medium text-sm text-gray-400 cursor-pointer"
                htmlFor="comment"
              >
                Comment
              </label>
            </span>

            <span className="flex items-center gap-2">
              <input
                id="suggestion"
                className="accent-gray-500 dark:accent-gray-secondary"
                name="feedback-type"
                checked={feedbackForm.type === "suggestion"}
                value="suggestion"
                onChange={handleChange}
                type="radio"
              />
              <label
                className="font-medium text-sm text-gray-400 cursor-pointer"
                htmlFor="suggestion"
              >
                Suggestion
              </label>
            </span>
          </div>

          <textarea
            id="feedback"
            value={feedbackForm.feedback}
            onChange={handleChange}
            className="rounded-md border dark:border-gray-dark dark:bg-gray-dark bg-gray-300/30 outline-none py-2 px-3 text-base text-gray-800 dark:text-gray-300 w-full caret-yellow-300 dark:focus:border-yellow-300 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-300/10"
            placeholder="Message / Suggestion / Inquiry"
            rows="4"
          />

          <div className="flex items-center gap-2">
            {/* <Button
              onClick={handleClear}
              className="dark:text-gray-300 text-gray-800 bg-gray-100 hover:bg-gray-200 font-medium py-2 px-4"
            >
              Clear
            </Button>

            <Button
              type="submit"
              disabled={isPending}
              className="dark:text-gray-300 text-gray-800 bg-gray-100 hover:bg-gray-200 font-medium py-2 px-4 flex items-center gap-2
                                disabled:bg-gray-400
                                disabled:text-gray-700
                                dark:disabled:bg-gray-tertiary dark:disabled:text-gray-400"
            >
              {isPending && (
                <img
                  className="w-5 dark:invert animate-spin invert-0"
                  src="/loader.png"
                  alt="loader"
                />
              )}
              Submit
            </Button> */}
          </div>
        </form>
      ) : (
        <div className="mt-10 w-full max-w-md bg-green-500/30 dark:bg-green-600/30 border border-green-400 dark:border-green-500 p-3 rounded">
          <h2 className="text-lg font-semibold dark:text-gray-200 text-gray-800 flex items-center gap-2">
            <img className="w-5 h-5" src="/check.png" alt="check-icon" />
            Message received
          </h2>

          <p className="mt-2 w-full font-medium dark:text-gray-300 text-gray-600 text-base leading-relaxed">
            Thank you for your Message, I will get back to you soon!
          </p>
        </div>
      )}
    </main>
  );
}
