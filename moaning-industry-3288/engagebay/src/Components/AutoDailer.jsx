import React from "react";

export const AutoDailer = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-normal text-center">
          Auto Dialer Software
        </h1>
        <h2 className="text-2xl text-center m-4">
          Power up your outbound calls by automating them and increase agent
          productivity.
        </h2>
        <p className="text-2xl text-center mt-20">
          Signup now & get a <span className="font-extrabold">FREE</span>{" "}
          onboarding session worth $1199
        </p>
      </div>
      <div className="w-6/12 m-auto mt-8 h-12 flex">
        <input
          placeholder="Your email address"
          className="border-solid border-2 w-6/12 ml-5 rounded-md"
        />
        <button className="border-solid border-2 px-8 mx-2 rounded-md bg-orange-500 text-slate-100 font-bold">
          FREE SIGNUP
        </button>
        <img
          src="https://cdn5.engagebay.com/img/try-it-out.svg"
          alt="tryout-svg"
        />
        <div></div>
      </div>
      <div className="w-9/12 m-auto my-16">
        <img
          src="https://cdn5.engagebay.com/engagebay-images/360-degree/engagebay-360-degree-view.webp"
          alt="autodiler-pic1"
        />
      </div>
    </div>
  );
};
