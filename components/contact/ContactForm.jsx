"use client";
import { useState } from "react";

const ContactForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    });
  };

  return (
    <div className=" my-10 px-96">
      <h1 className="font-semibold text-4xl border-b border-gray-400">CONTACT US</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="grid  gap-4 w-3/4 my-3">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              className="p-2 rounded-xl border border-blue-100 h-14 text-lg"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              className="p-2 rounded-xl border border-blue-100 h-14 text-lg"
            />
          </div>
          <input
            type="email"
            required
            placeholder="Email Adress"
            className="p-2 rounded-xl border border-blue-100 h-14 text-lg"
            name="email"
            onChange={handleChange}
          />

          <textarea
            required
            placeholder="Leave us your message"
            className="resize-none h-24 p-2 rounded-xl border border-blue-100 text-lg"
            name="text"
            onChange={handleChange}
          />

          <div className="flex justify-end items-end">
            <button type="submit" className="bg-slate-400 py-3 px-10">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;