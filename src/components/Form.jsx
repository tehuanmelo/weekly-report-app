import { useState, React } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

import useError from "../hooks/useError";
import useSubmit from "../hooks/useSubmit";

import { COACHES, BASES, WEEKDAYS } from "../utils/constants.js";
import { getFormatedDate, getLastMonday } from "../utils/dateUtils.js";

function Form() {
  const navigate = useNavigate();
  const { submit, loading } = useSubmit();
  const { error, validateForm } = useError();
  const [values, setValues] = useState({
    week: getLastMonday().toISOString().split("T")[0],
    email: "",
    psName: "",
    base: "",
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "",
    sat: "",
    sun: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const hasError = validateForm(values);
      if (hasError) return;
      const payload = { ...values };
      await submit(payload);
      navigate("/done");
    } catch (error) {
      console.log(error.message);
      navigate("/error", {state: {message: error.message}})
    }
  };
  return (
    <div className="w-full max-w-md px-4">
      <form
        onSubmit={handleSubmit}
        className="card bg-white p-6 shadow-md border border-gray-200 w-full flex flex-col gap-3 justify-center items-center mb-4"
      >
        <FormInput
          label="Email"
          name="email"
          type="text"
          error={error}
          value={values.email}
          onChange={handleChange}
          placeholder="example@email.com"
          isRequired={true}
        />
        <FormSelect
          label="Ps Name"
          name="psName"
          value={values.psName}
          onChange={handleChange}
          options={COACHES}
          error={error}
          placeholder="-- Select your ps and name --"
        />
        <FormSelect
          label="Base"
          name="base"
          value={values.base}
          onChange={handleChange}
          options={BASES}
          error={error}
          placeholder="-- Select your base --"
        />
        <div className="border w-full border-gray-300 mt-2" />
        {WEEKDAYS.map((day, idx) => {
          const key = day.toLowerCase()
          return (
            <div className="w-full" key={key}>
              <FormInput
                label={`${day} - ${getFormatedDate(idx + 1)}`}
                value={values[key]}
                type="text"
                name={day.toLowerCase()}
                error={error}
                onChange={handleChange}
                placeholder="Total of students"
                isRequired={idx <= 3 ? true : false}
              />
              {day == "Thu" ? (
                <div className="border w-full border-gray-300 mt-5" />
              ) : null}
            </div>
          );
        })}
        <button className="btn btn-info p-6 text-lg text-white w-full font-semibold mt-5 disabled:bg-gray-400 disabled:text-white" disabled={loading}>
          {loading ? <span className="loading loading-spinner" /> : "submit"}
        </button>
      </form>
    </div>
  );
}

export default Form;
