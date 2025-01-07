import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdAddCall, MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xntbqdq", "template_wrmf5y9", form.current, {
        publicKey: "6TmHFx8o2bgz1w4uZ",
      })
      .then(
        () => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Message sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          form.current.reset();
        },
        (error) => {
          Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: error.text,
                    showConfirmButton: false,
                    timer: 1500,
                  });
        }
      );
  };

  return (
    <div className="mt-10">
      <h1 className="text-4xl mb-4 font-bold text-center uppercase text-purple-700">
        Contact Us
      </h1>
      <div className="flex flex-col-reverse md:flex-row md:w-10/12 lg:w-8/12 mx-auto">
        <form className="flex-1" ref={form} onSubmit={sendEmail}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="email"
              className="input input-bordered text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea text-black textarea-bordered"
              placeholder="message"
            ></textarea>
          </div>
          <input
            type="submit"
            className="btn btn-primary mt-4 w-[100px]"
            value="Send"
          />
        </form>
        <div className="flex-1 mt-5 space-y-3  md:ml-10">
          <h4 className="flex items-center gap-3 text-xl font-medium">
            <FaLocationDot className="text-3xl font-semibold text-red-600" />{" "}
            Sylhet , Bangladesh.
          </h4>
          <p className="flex items-center gap-3 text-xl font-medium">
            <FaWhatsappSquare className="text-3xl font-semibold text-green-500" />{" "}
            +8801603171796
          </p>
          <p className="flex items-center gap-3 text-xl font-medium">
            <MdAddCall className="text-3xl font-semibold text-green-700" />
            +8801870549075
          </p>
          <p className="flex items-center gap-3 text-xl font-medium">
            <MdAttachEmail className="text-3xl font-semibold text-red-700" />
            habiburmamun313@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
