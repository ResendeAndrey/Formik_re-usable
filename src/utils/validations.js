import * as yup from "yup";

export const SignUpSchema = yup.object({
  email: yup.string().email().required("E-mail é requerido"),
  password: yup.string().required("Password é requerido")
});

export const email = yup.string().email().required("E-mail é requerido");
export const password = yup.string().required("Password é requerido");
