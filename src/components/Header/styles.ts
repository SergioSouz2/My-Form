import styled from 'styled-components/native';
import { COLORS } from '../../theme';


export const Container = styled.View`
    width: 100%;
    margin-top: 32px;

`;

export const Title = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: ${COLORS.black};
    margin-top: 60px
`;

export const Subtitle = styled.Text`
    font-size: 15px;
    color:  ${COLORS.text_01};
    line-height: 25px;
`;