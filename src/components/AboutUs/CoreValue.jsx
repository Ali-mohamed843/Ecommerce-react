export default function CoreValue({ title, icon, children }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 duration-500 hover:scale-[1.05]">
      <div className="w-12 h-12 bg-[#dbeafe] text-[#1e40af] rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}
