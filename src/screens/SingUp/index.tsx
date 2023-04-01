import React from "react";
import { Container } from "./styles";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";

export function SingUp() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Header />
          <Form />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
