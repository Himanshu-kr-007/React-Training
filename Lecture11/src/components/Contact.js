import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log(formData);
    alert("Your message has been sent!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
      <form className="contact-form max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
          ></textarea>
        </div>
        <button type="submit" className="submit-button bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-600 w-full">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
