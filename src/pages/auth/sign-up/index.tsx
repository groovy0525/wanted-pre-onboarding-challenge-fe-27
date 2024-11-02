import { useNavigate } from "react-router-dom";

import { useAuth, useSignUp } from "../hooks/auth";

import { AuthForm } from "../components/form/form";

import type { FormState } from "../types";

const SignUp = () => {
  const { mutate } = useSignUp();
  const navigation = useNavigate();
  useAuth();

  const handleSubmit = (formState: FormState) => {
    mutate(formState, {
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        navigation("/");
      },
    });
  };

  return <AuthForm authType="signUp" onSubmit={handleSubmit} />;
};

export default SignUp;
