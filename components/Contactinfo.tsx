"use client"
import React, { useState } from 'react';
import Address from './Address';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [section, setSection] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Section:', section);
    console.log('Message:', message);
    console.log('Phone Number:', phoneNumber);
    // You can send the form data to your backend or perform any other actions
  };

  return (
    <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 py-8 md:py-12 lg:py-16  bg-[#E4E5DF]">
      <div className="flex flex-col gap-12 lg:flex-row items-center justify-left mb-12  lg:mb-0 pt-28 lg:pt-0">
    <div className=" max-w-md ml-56 bg-[#FFFFFF] p-6 rounded-md ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
        <div className="w-2/3">
            <label htmlFor="name" className="block font-medium text-base">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 px-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base bg-[#F1F1F1]"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="w-2/3">
            <label htmlFor="phone" className="block font-medium text-base">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 px-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base bg-[#F1F1F1]"
              required
              placeholder="Enter your number"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-base">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 px-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base bg-[#F1F1F1]"
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="section" className="block font-medium text-base">
          What is your enquiry about?<span className="text-red-500">*</span>
          </label>
          <select
            id="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="w-full p-2 px-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base bg-[#F1F1F1]"
            required
            placeholder="Select a section"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block font-medium text-base">
          Additional information<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full p-2 px-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base bg-[#F1F1F1]"
            required
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 text-white font-semibold bg-green-900 rounded-full hover:bg-green-800 "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    <Address/>
</div>
</div>
  );
};

export default ContactForm;
