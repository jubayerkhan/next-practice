"use client";
import { useState } from "react";

export default function ReactForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    alert(`Name: ${form.name}, Email: ${form.email}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-5 border rounded-lg"
    >
      <h2 className="text-xl font-semibold mb-4">User Form</h2>

      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          placeholder="Enter your full name"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        />
      </div>
      <br />
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          placeholder="Enter your email address"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <br />
      <button type="submit" className="button_style">
        Submit
      </button>

      {/* <p>Your name is: {form.name}</p>
      <p>Your email is: {form.email}</p> */}
    </form>
  );
}
