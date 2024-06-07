import React, { useRef } from "react";
import emailjs from "emailjs-com"; // Import emailjs-com library
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs.init("ukivtgOnwq8G_ifyK");

    emailjs.sendForm("service_yikwgcg", "template_scdri2q", e.target).then(
      (response) => {
        console.log("SUCCESS!", response);
        toast.success("Email sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            background: "linear-gradient(to right, #4CAF50, #FFD700, #2196F3)",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          },
        });

        // Refresh the page after successful submission
        window.location.reload();
      },
      (error) => {
        console.log("FAILED...", error);
        toast.error("Failed to send email.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            background: "linear-gradient(to right, #f44336, #FF4500, #ff5722)",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          },
        });
      }
    );
  };

  return (
    <>
      <ToastContainer />

      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          <div className="col-lg-9 gpt3__blog-heading" data-aos="fade-up">
            <h1 className="mb-3 gradient__text">Contact Us</h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label
                    htmlFor="your-name"
                    name="from_name"
                    className="form-label text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    className="form-control"
                    id="your-name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="your-surname"
                    className="form-label text-white"
                  >
                    Your Surname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-surname"
                    name="your-surname"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-email" className="form-label text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    className="form-control"
                    id="your-email"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="your-subject"
                    className="form-label text-white"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="from_number"
                    id="your-subject"
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="your-message"
                    className="form-label text-white"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="your-message"
                    rows={5}
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        data-res="<?php echo $sum; ?>"
                        type="submit"
                        className="btn bg-danger text-white w-100 fw-bold"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
