import React, { useState } from "react";
import { useDispatch } from "react-redux";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";

import "./Form.css";
import { addRow } from "../../store";

const isNotEmpty = (value) => {
  return !isEmpty(value);
};

const fieldsConfig = [
  { id: "firstName", name: "First Name *", validator: isNotEmpty },
  { id: "lastName", name: "Last Name *", validator: isNotEmpty },
  { id: "email", name: "Email *", validator: isEmail },
];

export const Form = () => {
  const dispatch = useDispatch();

  const getInitialState = () => {
    const initialState = { message: "" };
    fieldsConfig.forEach((field) => {
      initialState[field.id] = "";
    });

    return initialState;
  };
  const [formState, setFormState] = useState(getInitialState());
  const [validFields, setValidFields] = useState(getInitialState());

  const validateForm = () => {
    const validatedFields = {
      message: isLength(formState.message, { min: 10 }),
    };

    fieldsConfig.forEach((field) => {
      validatedFields[field.id] = field.validator(formState[field.id]);
    });

    setValidFields(validatedFields);

    const notValidFields = Object.values(validatedFields).filter(
      (value) => value === false || value === ""
    );

    return !notValidFields.length;
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      dispatch(addRow(formState));
      setFormState(getInitialState());
      alert("New row has been added to the table");
    }
  };

  const fields = fieldsConfig.map((field) => {
    return (
      <React.Fragment key={field.id}>
        <label htmlFor={field.id}>{field.name}</label>
        <input
          id={field.id}
          name={field.id}
          size="30"
          type="text"
          value={formState[field.id]}
          onChange={handleChange}
          className={validFields[field.id] !== false ? "" : "notValid"}
        />
      </React.Fragment>
    );
  });

  return (
    <div className="form">
      <fieldset>
        {fields}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          name="message"
          onChange={handleChange}
          value={formState.message}
          className={validFields.message !== false ? "" : "notValid"}
        ></textarea>
      </fieldset>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
