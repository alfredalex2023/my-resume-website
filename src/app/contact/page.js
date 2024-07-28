// contact/page.js
// This file defines the Contact component which displays a contact form for users to send messages.

"use client"; // Ensures the component is rendered on the client side

import { useState } from "react";

export default function Contact() {
  // State for form fields and errors
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handles input change events
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error message for the field being edited
    setIsSubmitted(false); // Clear the success message when the user starts typing
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission (e.g., send to an email service)
      console.log("Form submitted successfully:", form);
      setIsSubmitted(true);
      // Reset form fields
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000); // Clear the success message after 3 seconds
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  // Validates form fields
  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}

        {/* Email field */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Message field */}
        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
        {errors.message && <p className="error">{errors.message}</p>}

        {/* Submit button */}
        <button type="submit">Send</button>
      </form>
      {/* Success message */}
      {isSubmitted && (
        <p className="success">Your message has been sent successfully!</p>
      )}

      <style jsx>{`
        .error {
          color: red;
          font-size: 0.8rem;
          margin-top: -10px;
          margin-bottom: 10px;
        }
        .success {
          color: green;
          font-size: 1rem;
          margin-top: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
