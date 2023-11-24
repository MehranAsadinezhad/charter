import React, { useState } from "react";

const FormSolution = () => {
  const [forms, setForms] = useState([{ id: 0 }]);

  const handleChange = (e, index) => {
    const newForms = [...forms];
    newForms[index][e.target.name] = e.target.value;
    setForms(newForms);
  };

  const handleRemove = (index) => {
    const newForms = forms.filter((_, i) => i !== index);
    setForms(newForms);
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    const newForms = [...forms];
    const newFormId = newForms.length + 1;
    newForms.push({ id: newFormId });
    setForms(newForms);
  };

  const passengers = [];
  const mob = document.getElementById("mobille_passenger");

  const handleSubmit = (e) => {
    e.preventDefault();
    forms.forEach((form) => {
      const m = {
        fname: form.fname,
        lname: form.lname,
        passenger_code: form.passenger_code,
        type: form.type,
        gender: form.gender,
        mobile: mob?.value,
      };

      passengers.push(m);
    });

    // Here you can do your POST request with the formData object
    console.log(passengers);
  };

  return (
    <div
      name="form-container"
      id="form-container"
      className="m-32 flex flex-col bg-sky-300 p-2"
    >
      {forms?.map((form, index) => (
        <form
          key={form.id}
          className="form-passenger flex items-center gap-5 p-2"
        >
          <p>{index + 1}</p>
          <select
            required
            name="type"
            className="rounded-lg p-2"
            onChange={(e) => handleChange(e, index)}
          >
            <option hidden>رده سنی</option>
            <option value="ADL" className="my-2">
              بزرگسال
            </option>
            <option value="CHI">کودک</option>
          </select>
          <select
            required
            name="gender"
            className="rounded-lg p-2"
            onChange={(e) => handleChange(e, index)}
          >
            <option hidden>جنسیت</option>
            <option value="1">آقا</option>
            <option value="0">خانم</option>
          </select>
          <input
            required
            onChange={(e) => handleChange(e, index)}
            type="text"
            placeholder="name"
            name="fname"
            className="mx-3 rounded-lg p-2"
          />
          <input
            required
            onChange={(e) => handleChange(e, index)}
            type="text"
            placeholder="lastname"
            name="lname"
            className="mx-3 rounded-lg p-2"
          />
          <input
            required
            onChange={(e) => handleChange(e, index)}
            type="number"
            placeholder="passenger code"
            name="passenger_code"
            className="mx-3 rounded-lg p-2"
          />
          {form.id === 0 ? (
            <button
              className="m-1 self-end rounded-full bg-slate-200 p-2"
              onClick={handleAddForm}
            >
              add form
            </button>
          ) : (
            <button
              onClick={() => handleRemove(index)}
              className="rounded-lg bg-red-400 p-2"
            >
              remove
            </button>
          )}
        </form>
      ))}
      <input
        required
        type="tel"
        name="mobile"
        id="mobille_passenger"
        placeholder="mobile"
        className="mt-10 self-end rounded-lg p-2"
      />
      <button
        className="m-1 mt-2 self-end rounded-full bg-slate-200 p-2"
        onClick={handleAddForm}
      >
        Add Form
      </button>
      <button
        type="submit"
        className="m-1 self-end rounded-full bg-slate-200 p-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default FormSolution;
