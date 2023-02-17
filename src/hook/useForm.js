import { useState } from "react";

//import React from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormstate] = useState(initialForm);

  const onImputChange = ({ target }) => {
    const { name, value } = target;
    setFormstate({
      ...formState,
      [name]: value,
    });
  };
  ///////////////////////////////////////////
  const onResetForm = () => {
    setFormstate(initialForm);
  };

  return {
    ...formState,
    formState,
    onImputChange,
    onResetForm,
  };
};
