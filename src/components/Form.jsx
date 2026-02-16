import { useState, React } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

import useError from "../hooks/useError";
import useSubmit from "../hooks/useSubmit";

import { COACHES, BASES, WEEKDAYS } from "../utils/constants.js";
import {
  formatter,
  getFormatedDate,
  getLastMonday,
} from "../utils/dateUtils.js";

function Form() {
  const navigate = useNavigate();
  const { submit, loading } = useSubmit();
  const { error, validateForm } = useError();
  const [values, setValues] = useState({
    week: formatter.format(getLastMonday()),
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
      navigate("/error", { state: { message: error.message } });
    }
  };
  return (
    <div className="w-full max-w-md px-4">
      <form
        onSubmit={handleSubmit}
        className="card bg-white p-6 shadow-md border border-gray-200 w-full flex flex-col gap-3 justify-center items-center mb-4"
      >
        <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-6">
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
        </div>
        <div className="border w-full border-gray-200 rounded-lg p-5 space-y-6">
          <div>
            <p className="font-semibold">Required days</p>
            <p className="text-sm text-gray-400">
              Please fill in all required days (Mon–Thu).
            </p>
          </div>
          {WEEKDAYS.map((day, idx) => {
            const key = day.toLowerCase();
            return (
              <div className="w-full" key={key}>
                {day == "Fri" ? (
                  <p className="mb-6 font-semibold">Optional days</p>
                ) : null}
                <FormInput
                  label={`${day} - ${getFormatedDate(idx + 1)}`}
                  value={values[key]}
                  type="text"
                  name={day.toLowerCase()}
                  error={error}
                  onChange={handleChange}
                  placeholder={`Total of students for ${day}`}
                  isRequired={idx <= 3 ? true : false}
                />
              </div>
            );
          })}
        </div>
        <button
          className="btn btn-info p-6 text-lg text-white w-full font-semibold mt-4 disabled:bg-gray-300 disabled:text-gray-400"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner" />
          ) : (
            <span className="tracking-wide">SUBMIT</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
