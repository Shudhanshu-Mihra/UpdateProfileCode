import { styled } from 'styles/theme';

import { STATUS_COLORS } from 'constants/status-colors';

const COLORS = STATUS_COLORS;

export const StatusBarStyles = {
  MainWrapper: styled.div<{ status?: keyof typeof Statuses }>`
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.size.default};
    ${({ status }) => (status ? COLORS[status] : COLORS.review)};
    display: flex;
    align-items: center;
  `,
  Text: styled.span`
   margin-left:10px;
  `
};
