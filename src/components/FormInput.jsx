import { useEffect, useRef } from "react";

function FormInput(props) {
  const { label, name, error, isRequired, ...inputProps } = props;

  const inputRef = useRef(null);

  useEffect(() => {
    if (error[name]) {
      inputRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [error, name]);

  return (
    <div className="flex w-full flex-col gap-2 text-black">
      <label>{label} {isRequired ? <span className="text-red-500">*</span> : ""}</label>
      <input
        name={name}
        className="input input-neutral w-full bg-white placeholder:text-gray-400"
        ref={inputRef}
        {...inputProps}
      />
      {error[name] && <span className="text-red-500 leading-4">{error[name]}</span>}
    </div>
  );
}

export default FormInput;
