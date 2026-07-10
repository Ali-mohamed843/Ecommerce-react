import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!form.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Enter a valid email";
    if (!form.password) err.password = "Password is required";
    else if (form.password.length < 6) err.password = "At least 6 characters";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      navigate("/");
    }
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-surface-container-lowest rounded-xl border border-outline-variant p-8">
        <h1 className="text-2xl font-semibold text-primary mb-6 text-center">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-primary block mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              className={`w-full border ${errors.email ? "border-error" : "border-outline-variant"} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors`}
            />
            {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-primary block mb-1">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={handleChange("password")}
              className={`w-full border ${errors.password ? "border-error" : "border-outline-variant"} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors`}
            />
            {errors.password && <p className="text-error text-xs mt-1">{errors.password}</p>}
          </div>
          <button type="submit" className="w-full bg-primary text-on-primary rounded-lg py-2.5 text-sm font-semibold hover:opacity-80 transition-opacity">
            Sign In
          </button>
        </form>
        <p className="text-sm text-on-surface-variant text-center mt-6">
          Don't have an account? <Link to="/register" className="text-secondary font-semibold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}
