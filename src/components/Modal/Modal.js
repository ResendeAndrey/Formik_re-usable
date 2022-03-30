import { Formik } from "formik";
import React from "react";
import { Form } from "semantic-ui-react";

import "./styles.css";

const Modal = ({
  component: Component,
  initialValues,
  handleSubmit,
  children,
  validationSchema,
  onClose,

  ...props
}) => {
  return (
    <div className="modalContainer">
      <div className="modalContent">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <>
              <Component formik={formik} />
            </>
          )}
        </Formik>
        <span className="closeIcon" onClick={() => onClose(false)}>
          X
        </span>
      </div>
    </div>
  );
};

export default Modal;
