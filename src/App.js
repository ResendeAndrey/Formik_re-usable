import { Login } from "./components/LoginModal/Login";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import "./styles.css";
import { email, password } from "./utils/validations";
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
  const validations = yup.object({
    email: email,
    password: password
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
          validationSchema={validations}
          onClose={setOpenModal}
        />
      )}
    </div>
  );
}
