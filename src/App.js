import { Login } from "./components/LoginModal/Login";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import "./styles.css";
import * as yup from "yup";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const initialValues = {
    email: "",
    password: ""
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  const SignUpSchema = yup.object({
    email: yup.string().email().required("E-mail é requerido"),
    password: yup.string().required("Password é requerido")
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button type="button" onClick={() => setOpenModal(!openModal)}>
        {" "}
        ToggleModal{" "}
      </button>
      {openModal && (
        <Modal
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          component={Login}
          validationSchema={SignUpSchema}
          onClose={setOpenModal}
        />
      )}
    </div>
  );
}
