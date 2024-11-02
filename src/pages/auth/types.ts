export type FormState = {
  email: string;
  password: string;
};

export type FormHandler = (formState: FormState) => void;

export type AuthResponse = {
  message: string;
  token: string;
};
