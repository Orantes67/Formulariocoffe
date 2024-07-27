function Input({ type, placeholder, label, value, onChange, checked }) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} checked={checked} className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm"
      />
    </div>
  );
}

export default Input;
