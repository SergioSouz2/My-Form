import styled from 'styled-components/native';
import { COLORS } from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.primary};
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.white};
`;