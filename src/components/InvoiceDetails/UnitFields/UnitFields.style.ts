import { styled } from 'styles/theme';

export const UnitFieldsStyles = {
  MainWrapper: styled.div`
    margin: 16px 30px 16px 21px;
    display: grid;
    grid-template-columns: minmax(150px, 179px) 1fr;
    column-gap: 66px;
  `,
  ColumnsDevider: styled.div`
    display: grid;
    grid-template-columns:
      minmax(70px, 85px) minmax(70px, 85px)
      minmax(70px, 85px) minmax(70px, 85px) minmax(70px, 85px) minmax(70px, 85px);
    column-gap: 23px;
  `,
};
