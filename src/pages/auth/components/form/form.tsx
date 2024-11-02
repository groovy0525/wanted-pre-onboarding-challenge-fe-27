import { useReducer } from "react";

import { INIT_AUTH_STATE, reducer } from "./reducer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormHandler } from "../../types";

type Props = {
  authType: "logIn" | "signUp";
  onSubmit: FormHandler;
};

export const AuthForm = ({ authType, onSubmit }: Props) => {
  const title = authType === "logIn" ? "로그인" : "회원가입";

  const [{ email, password, errors }, dispatch] = useReducer(
    reducer,
    INIT_AUTH_STATE
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSubmit({ email, password });
  };

  const isValidateForm = !(errors.email && errors.password);

  return (
    <div>
      <h1>{title}</h1>
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) =>
              dispatch({ type: "EMAIL", payload: e.target.value })
            }
          />
        </div>
        <div>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) =>
              dispatch({ type: "PASSWORD", payload: e.target.value })
            }
          />
        </div>
        <Button type="submit" disabled={isValidateForm}>
          {title}
        </Button>
      </form>
    </div>
  );
};
