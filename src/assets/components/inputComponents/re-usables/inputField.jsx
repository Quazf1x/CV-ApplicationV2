function InputField({
  id,
  value,
  dataKey,
  label,
  handleChange,
  placeholder,
  maxLength = 23,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        maxLength={maxLength}
        id={id}
        value={value}
        name={dataKey}
        data-key={dataKey}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default InputField;
