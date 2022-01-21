import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "./common/data";

const Faq = () => {
  const [view, setView] = React.useState(0);
  const activeHandler = (value) => {
    setView(value);
  };

  return (
    <section className="py-5" id="faq">
      <div
        className="container"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <h1 className="text-center main-heading mb-5">FAQ</h1>
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => activeHandler(index)}
            className={`faq-wrapper mb-4   py-2 px-3  ${
              index == view ? "active" : ""
            }`}
          >
            <div
              className={`faq-question d-flex align-items-center justify-content-between pt-2 pb-3`}
            >
              {item.question}{" "}
              <svg
                className="rotate"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z"
                  fill="white"
                />
              </svg>
            </div>
            <AnimatePresence>
              {index == view ? (
                <>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className={`faq-answer `}
                  >
                    {item.answer}
                  </motion.div>
                </>
              ) : (
                ""
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
