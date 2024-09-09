import ReactPaginate from 'react-paginate';

import { styled } from 'styles/theme';

export const PaginationStyles = {
  MyPaginate: styled(ReactPaginate).attrs({
    activeClassName: 'active',
  })`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    li {
      display: flex;
    }

    li a {
      border-radius: 5px;
      padding: 3px 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li.previous a,
    li.next a,
    li.break a {
      border-color: transparent;
    }

    li.break a {
      margin: 0;
      padding: 0;
    }

    li.previous a,
    li.next a {
      margin: 0 10px;
    }

    li.active a {
      background-color: ${(props) => props.theme.colors.darkRed};
      border-color: transparent;
      color: white;
      width: 25px;
      height: 25px;
    }
    li.active {
      display: flex;
      align-items: center;
    }
    li.disabled a {
      color: grey;
    }

    li.disable,
    li.disabled a {
      cursor: default;
      opacity: 0.5;
    }
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  Pages: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
  GoToWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  InputWrapper: styled.div`
    max-width: 60px;
  `,
  Dots: styled.div`
    width: 100%;
  `,
};
