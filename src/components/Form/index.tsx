import React, { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "./styles";

export function Form() {
  function handleUserRegister() {}
  return (
    <Container>
      <Input icon="user" placeholder="Nome" />
      <Input
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input icon="lock" placeholder="Senha" secureTextEntry />
      <Input icon="lock" placeholder="Confirme a senha" secureTextEntry />

      <Button title="Cadastrar" onPress={handleUserRegister} />
    </Container>
  );
}
