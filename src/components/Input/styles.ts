import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

import { COLORS } from "../../theme";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color:  ${COLORS.white};

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${COLORS.primary};
    `};
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  background-color: ${COLORS.white};
  color:  ${COLORS.text_01};
  padding: 0 23px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color:  ${COLORS.primary};
    `};
`;
