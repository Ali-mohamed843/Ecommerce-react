import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Enter a valid email";
    if (!form.password) err.password = "Password is required";
    else if (form.password.length < 6) err.password = "At least 6 characters";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(form.password))
      err.password = "Must include uppercase, lowercase and a number";
    if (!form.confirmPassword) err.confirmPassword = "Please confirm your password";
    else if (form.password !== form.confirmPassword) err.confirmPassword = "Passwords do not match";
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

  const inputClass = (field) =>
    `w-full border ${errors[field] ? "border-error" : "border-outline-variant"} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors`;

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-surface-container-lowest rounded-xl border border-outline-variant p-8">
        <h1 className="text-2xl font-semibold text-primary mb-6 text-center">Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-primary block mb-1">Full Name</label>
            <input type="text" value={form.name} onChange={handleChange("name")} className={inputClass("name")} />
            {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-primary block mb-1">Email</label>
            <input type="email" value={form.email} onChange={handleChange("email")} className={inputClass("email")} />
            {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-primary block mb-1">Password</label>
            <input type="password" value={form.password} onChange={handleChange("password")} className={inputClass("password")} />
            {errors.password && <p className="text-error text-xs mt-1">{errors.password}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-primary block mb-1">Confirm Password</label>
            <input type="password" value={form.confirmPassword} onChange={handleChange("confirmPassword")} className={inputClass("confirmPassword")} />
            {errors.confirmPassword && <p className="text-error text-xs mt-1">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="w-full bg-primary text-on-primary rounded-lg py-2.5 text-sm font-semibold hover:opacity-80 transition-opacity">
            Register
          </button>
        </form>
        <p className="text-sm text-on-surface-variant text-center mt-6">
          Already have an account? <Link to="/login" className="text-secondary font-semibold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
