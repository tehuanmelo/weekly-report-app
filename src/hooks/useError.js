import { useState } from "react";
import { WEEKDAYS } from "../utils/constants";

function validateEmail(email) {
  if (
    !email.trim() ||
    email.length < 9 ||
    !email.includes("@") ||
    !email.includes(".")
  ) {
    return true;
  }
  return false;
}

function useError() {
  const [error, setError] = useState({});
  const newError = {};
  const validateForm = (values) => {
    if (validateEmail(values.email)) {
      newError.email = "Invalid email.";
    }
    if (!values.psName) newError.psName = "Select your ps and name";
    if (!values.base) newError.base = "Select your base";

    ["mon", "tue", "wed", "thu"].forEach((day) => {
      if (!values[day]) newError[day] = "This field is required";
    });
    ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].forEach((day) => {
      if (values[day] !== "" && !/^\d+$/.test(values[day]))
        newError[day] = "Only numbers allowed";
    });

    setError(newError);
    const result = Object.keys(newError).length > 0;
    return result;
  };

  return { error, validateForm };
}

export default useError;
