type ActionType =
  | { type: "EMAIL"; payload: string }
  | { type: "PASSWORD"; payload: string };

const AUTH_VALIDATION = {
  email: /^[^@]+@[^@]+\.[^@]+$/,
  password: /^.{8,}$/,
};

export const INIT_AUTH_STATE = {
  email: "",
  password: "",
  errors: {
    email: false,
    password: false,
  },
};

export const reducer = (
  state: typeof INIT_AUTH_STATE,
  { type, payload }: ActionType
): typeof INIT_AUTH_STATE => {
  switch (type) {
    case "EMAIL": {
      const newState = { ...state };
      newState.errors.email = false;
      newState.email = payload;

      if (AUTH_VALIDATION.email.test(payload)) {
        newState.errors.email = true;
      }

      return newState;
    }
    case "PASSWORD": {
      const newState = { ...state };
      newState.errors.password = false;
      newState.password = payload;

      if (AUTH_VALIDATION.password.test(payload)) {
        newState.errors.password = true;
      }

      return newState;
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
