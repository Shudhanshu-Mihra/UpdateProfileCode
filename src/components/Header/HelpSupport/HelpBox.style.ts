import { Link, PathMatch } from 'react-router-dom';
import { styled } from 'styles/theme';

export const ExtraLinkStyles = {
  Link: styled(Link)<{
  }>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
