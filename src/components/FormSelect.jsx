import { useEffect, useRef } from "react";

function FormSelect(props) {
  const { options, placeholder, label, error, name, ...inputProps } = props;

  const selectRef = useRef(null);
  
    useEffect(() => {
      if (error[name]) {
        selectRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, [error, name]);

  return (
    <div className="w-full flex flex-col gap-2">
      <label>{label} <span className="text-red-500">*</span></label>
      <select name={name} className="select select-neutral bg-white w-full" {...inputProps}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {error[name] && <span className="text-red-500 leading-4">{error[name]}</span>}
    </div>
  );
}

export default FormSelect;
