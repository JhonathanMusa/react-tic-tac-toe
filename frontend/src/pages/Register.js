import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import ConfirmPasswordInput from "../components/ConfirmPasswordInput";
import Prompt from "../components/Prompt";
import CTA from "../components/CTA";
import Error from "../components/Error";
import useForm from "../hooks/useForm";
import useAuth from "../hooks/useAuth";

export default function Register() {
  const { values, handleChange } = useForm({
    initialValues: {
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const { registerUser, error } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(values);
  };

  return (
    <div className="page" style={{ justifyContent: "center" }}>
      <div className="inlineForm">
        <h3>Register</h3>
        <div className="inlineForm__notif">
          {error && <Error error={error.message} />}
        </div>
        <form onSubmit={handleRegister}>
          <FormInput
            type={"text"}
            placeholder={"Email"}
            name={"email"}
            value={values.email}
            handleChange={handleChange}
          />

          <FormInput
            type={"text"}
            placeholder={"Username"}
            name={"username"}
            value={values.username}
            handleChange={handleChange}
          />

          <ConfirmPasswordInput
            type={"password"}
            handleChange={handleChange}
            name={"password"}
            nameConfirm={"passwordConfirm"}
            placeholder={"Password"}
            placeholderConfirm={"Confirm password"}
            value={values.password}
            valueConfirm={values.passwordConfirm}
          />

          <div className="inlineForm__submit">
            <Link to="/login">
              <Prompt prompt={"Existing account? Log in."} />
            </Link>
            <CTA name={"register"} type={"submit"} />
          </div>
        </form>
      </div>
    </div>
  );
}
