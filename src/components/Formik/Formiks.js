import React from "react";
import "./formiks.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const Formiks = () => {
  return (
    <div className="container">
      <div className="brand-box">
        <h1>Formiks</h1>
        <p>Build forms in react without tears.</p>
      </div>
      <div className="magic-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            agree: false,
            favoriteColor: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("İsim boş bırakılamaz"),
            email: Yup.string().email().required("Email boş bırakılamaz"),
            agree: Yup.bool().oneOf([true], "Koşulları kabul etmelisiniz"),
            favoriteColor: Yup.string()
              .required("Sevdiğiniz rengi seçmelisiniz!")
              .oneOf(["red", "blue", "green"]),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleReset,
            handleChange,
            dirty,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <h3>Kaydol</h3>
              <label htmlFor="name">Adınız</label>
              <input
                type="text"
                placeholder="Adınızı giriniz."
                id="name"
                className="input"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email giriniz."
                id="email"
                className="input"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="favoriteColor">Favori Renginizi Seçin</label>
              <select
                id="favoriteColor"
                value={values.favoriteColor}
                onChange={handleChange}
                style={{
                  width: "150px",
                  marginTop: 10,
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Renk Seç"></option>
                <option value="red" label="Kırmızı"></option>
                <option value="blue" label="Mavi"></option>
                <option value="green" label="Yeşil"></option>
              </select>
              {errors.favoriteColor && touched.favoriteColor && (
                <div className="input-feedback">{errors.favoriteColor}</div>
              )}

              <div className="checkbox topMargin">
                <input
                  id="agree"
                  type="checkbox"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree" className="checkbox.label">
                  {" "}
                  Sözleşmeyi okudum kabul ediyorum
                </label>
              </div>
              {errors.agree && (
                <div className="input-feedback">{errors.agree}</div>
              )}
              <button type="submit" disabled={!dirty || isSubmitting}>
                Kaydol
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Formiks;
