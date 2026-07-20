export default function FormInput({ label, id, type = "text", placeholder, value, onChange, error, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
        <span className="text-red-500 ml-0.5">*</span>
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3.5 py-2.5 text-sm border rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors ${error ? "border-error" : "border-gray-200"}`}
      />
      {error && <p className="text-error text-xs mt-1">{error}</p>}
    </div>
  );
}
