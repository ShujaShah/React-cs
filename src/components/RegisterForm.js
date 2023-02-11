import { useState } from "react";
function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "Shuja",
    lastName: "Shah",
    email: "shuja.ashraf11@gmail.com",
  });

  return (
    <>
      <label>
        First Name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>

      <label>
        Last Name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>

      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>

      <p>
        First name is : <strong>{form.firstName}</strong>
        <br />
        Last name is : <strong>{form.lastName}</strong>
        <br />
        Email is : <strong>{form.email}</strong>
      </p>
    </>
  );
}
export default RegisterForm;
