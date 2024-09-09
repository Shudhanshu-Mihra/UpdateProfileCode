import { css } from 'styled-components';

export const STATUS_COLORS = {
  processing: css`
    color: ${(props) => props.theme.colors.blue};
  `,
  review: css`
    color: ${(props) => props.theme.colors.darkyellow};
  `,
  approved: css`
    color: ${(props) => props.theme.colors.green};
  `,
  accepted: css`
    color: ${(props) => props.theme.colors.green};
  `,
  rejected: css`
    color: ${(props) => props.theme.colors.darkRed};
  `,
};
