import { styled } from 'styles/theme';

import { STATUS_COLORS } from 'constants/status-colors';

const COLORS = STATUS_COLORS;

export const StatusLabelStyles = {
  Label: styled.div<{ color: keyof typeof Statuses; isDashboard?: boolean }>`
    width: 100%;
    display: flex;
    padding-right: 9px;
    padding-left: 9px;
    font-size: ${(props) => props.theme.size.default};
    ${(props) => props.color && COLORS[props.color]};
    ${(props) => props.isDashboard && 'padding: 0; justify-content: end'};
  `,
};
