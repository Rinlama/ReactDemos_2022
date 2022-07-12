import React, { useState } from "react";

function useForm(props) {
  const [formState, setFromState] = useState(props);

  const setFormNameValue = (name, value) => {
    setFromState({
      data: {
        ...formState.data,
        [name]: value,
      },
      error: { ...formState.error, ...validate(name, value) },
    });
  };

  const clearForm = () => {
    setFromState(props);
    console.log(props);
  };

  const validate = (name, value) => {
    const error = {};
    if (!value) {
      error[name] = `${name} is required`;
    } else {
      error[name] = "";
    }
    return error;
  };

  const isValid =
    Object.keys(formState.error).length ==
      Object.values(formState.data).length &&
    Object.values(formState.error).every((d) => d == "");

  return {
    formState,
    setFormNameValue,
    isValid,
    clearForm,
  };
}

export default useForm;
