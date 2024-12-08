import React, { useEffect } from "react";
// import group from "..//..//assets/Group.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleModal = () => {
    document.getElementById("my_modal_5").showModal();
  };
  return (
    <div>
      <div className="">
        <div
          className={`flex flex-col justify-center items-center  pt-10  space-y-5 rounded-xl`}
        >
          <h1 className="lg:text-4xl text-purple-600 md:text-3xl text-2xl  w-11/12 xl:w-10/12 text-center mx-auto  font-bold">
            Contact Us
          </h1>
        </div>
        <div className="md:w-[400px] px-5 mx-auto mt-10 space-y-3">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Name" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="email" className="grow" placeholder="Email" />
          </label>
          <textarea
            className="textarea textarea-primary w-full"
            placeholder="Details"
          ></textarea>
          <label className="input input-bordered bg-[#9538E2] text-2xl font-semibold flex items-center gap-2 justify-center">
            <input
              onClick={handleModal}
              type="submit"
              className=" "
              placeholder="Submit"
            />
          </label>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col items-center justify-center">
         
          <h3 className="font-bold text-3xl">Message sent Successfully</h3>
          <p className="text-xl">We will contact you later</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              
                <button className="btn btn-accent">Close</button>
         
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Contact;
