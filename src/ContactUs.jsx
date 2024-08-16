import React, { useEffect } from "react";
import { Formik } from "formik";

const ContactUs = (props) => {
  useEffect(() => {
    // Load saved form data from localStorage on component mount
    const savedData = JSON.parse(localStorage.getItem("contactFormData")) || {};
    setFormData(savedData);
  }, []);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const myStyle = {
    input: {
      border: "none",
      background: "transparent",
      borderBottom: "1px solid #ccc",
      padding: "8px",
      marginBottom: "10px",
      width: "100%",
      color: `${props.mode === "light" ? "black" : "white"}`,
      backgroundColor: `${props.mode === "light" ? "white" : "#1e3021"}`,
    },
    button: {
      textAlign: "center",
      marginTop: "20px",
    },
  };

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          color: `${props.mode === "light" ? "black" : "white"}`,
        }}
      >
        Contact Us
      </h1>
      <Formik
        initialValues={formData}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // Save form data to localStorage
          localStorage.setItem("contactFormData", JSON.stringify(values));
          setTimeout(() => {
            console.log("Form Values:", values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12 p-3">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Enter your name"
                    style={myStyle.input}
                  />
                </div>

                <div className="col-lg-6 col-sm-12 p-3">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter your email "
                    style={myStyle.input}
                  />
                </div>
              </div>
              <div className="row col-lg-8 col-sm-12 p-3 ">
                <textarea
                  type="text"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  rows={5}
                  placeholder="Drop A message"
                  style={{ ...myStyle.input, height: "100px" }}
                />
              </div>
              <div style={myStyle.button}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-success"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
