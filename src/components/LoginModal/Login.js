import { Field, Form, useField } from "formik";
import React from "react";

export const Login = ({ formik }) => {
  return (
    <div>
      <h3 className="Main">Login</h3>
      <Form>
        <div className="Form">
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="Form">
          <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit"> Submit </button>
      </Form>
    </div>
  );
};
