import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { api } from "@/api";

import type { AuthResponse, FormState } from "../types";
import { type AxiosResponse } from "axios";

const signUp = (formState: FormState) =>
  api
    .post<FormState, AxiosResponse<AuthResponse>>("/users/create", formState)
    .then((res) => res.data);

export const useSignUp = () =>
  useMutation({
    mutationFn: signUp,
  });

const logIn = (formState: FormState) =>
  api
    .post<FormState, AxiosResponse<AuthResponse>>("/users/login", formState)
    .then((res) => res.data);

export const useLogIn = () => useMutation({ mutationFn: logIn });

export const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);
};
