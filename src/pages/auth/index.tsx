import { useNavigate } from "react-router-dom";

import { useAuth, useLogIn } from "./hooks/auth";

import { AuthForm } from "./components/form/form";

import type { FormState } from "./types";

const LogIn = () => {
  const { mutate } = useLogIn();
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

  return <AuthForm authType="logIn" onSubmit={handleSubmit} />;
};

export default LogIn;
