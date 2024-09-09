import { Link } from 'react-router-dom';
import { styled } from 'styles/theme';

export const AvatarBoxStyles = {
  LoaderWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `,
  Avatar: styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `,
  AvatarWrapper: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 50%;
  `,
  IconWrapper: styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.white};
  `,
};
