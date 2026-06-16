import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/volunteer", form);
      setMessage("Registered Successfully ✅");

      setForm({
        name: "",
        email: "",
        phone: "",
        skills: ""
      });

    } catch (err) {
      setMessage("Error ❌");
      console.log(err);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Volunteer Registration</h3>

        {message && (
          <div className="alert alert-info text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-control mb-3"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="form-control mb-3"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills"
            className="form-control mb-3"
            value={form.skills}
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;