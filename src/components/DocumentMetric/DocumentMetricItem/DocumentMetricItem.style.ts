import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

import { styled } from 'styles/theme';

const STATUSES: Record<string, FlattenInterpolation<ThemeProps<any>>> = {
  processing: css`
    background-color: ${(props) => props.theme.colors.lighterBlue};
  `,
  review: css`
    background-color: ${(props) => props.theme.colors.yellow};
  `,
  accepted: css`
    background-color: ${(props) => props.theme.colors.lemon};
  `,
  rejected: css`
    background-color: ${(props) => props.theme.colors.lightRed};
  `,
};

export const DocumentMetricItemStyles = {
  Wrapper: styled.div<{ statuses: string }>`
    width: calc((100% - 2 * 18px) / 2);
    height: 145px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 80px;
    height: 100%;
    box-shadow: ${({ theme }) => theme.colors.metricBoxShadow};
    border-radius: ${(props) => props.theme.size.borderRadius};
    padding: 15px;
    ${(props) => props.statuses && STATUSES[props.statuses]};
    margin-bottom: 23px;
    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
    &:nth-child(2n + 1) {
      margin-right: 36px;
    }
  `,
  Content: styled.div`
    display: flex;
    align-items: center;
    max-height: 40px;
  `,
  Status: styled.p`
    margin-top: 2px;
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightBlack};
  `,
  Numerics: styled.p`
    font-weight: 600;
    font-size: 14px;
    margin-left: 20px;
    color: ${({ theme }) => theme.colors.lightBlack};
  `,
};
