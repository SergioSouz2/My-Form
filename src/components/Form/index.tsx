import React from "react";

import { useForm } from "react-hook-form";

import { Button } from "../Button";
import { ContolledInput } from "../ControlledInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container } from "./styles";

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const schema = yup.object({
  name: yup.string().required("Informe seu nome"),
  email: yup.string().email("E-mail inválido").required("Informe seu email"),
  password: yup
    .string()
    .min(8, "A senha deve ter ao menos 8 digitos")
    .required("Informe a senha"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password")], "A senha não confere"),
});

export function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  function handleUserRegister(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <ContolledInput
        control={control}
        name="name"
        icon="user"
        placeholder="Nome"
        error={errors.name}
      />

      <ContolledInput
        name="email"
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />
      <ContolledInput
        name="password"
        control={control}
        icon="lock"
        placeholder="Senha"
        secureTextEntry
        error={errors.password}
      />
      <ContolledInput
        name="password_confirm"
        control={control}
        icon="lock"
        placeholder="Confirme a senha"
        secureTextEntry
        error={errors.password_confirm}
      />

      <Button title="Cadastrar" onPress={handleSubmit(handleUserRegister)} />
    </Container>
  );
}
