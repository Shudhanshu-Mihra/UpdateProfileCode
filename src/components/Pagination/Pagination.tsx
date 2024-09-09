import { NavigationButton } from 'components/NavigationButton';
import { Input } from 'components/Input';
import { Icon } from 'components/Icons';
import { theme } from 'styles/theme';

import { PaginationStyles as Styled } from './Pagination.style';

export const Pagination = (props: any) => {
  const {
    onChangePage,
    onChangePaginationInputValue,
    onEnterGoToClick,
    onGoToClick,
    onForwardClick,
    onBackwardClick,
    currentPage,
    pages,
    inputPaginationValue,
  } = props;

  return (
    <Styled.Wrapper data-testid="pagination">
      <Styled.Pages>
        <NavigationButton
          iconBehavior="iconBack"
          isArrow
          onClick={onBackwardClick}
          isDisabled={currentPage === 0 ? true : false}
          themedButton="pagination"
        />
        <Styled.MyPaginate
          pageCount={pages}
          onPageChange={onChangePage}
          previousLabel={
            <Icon type="arrowLeft" fill={theme.colors.lightBlack} />
          }
          nextLabel={<Icon type="arrowRight" fill={theme.colors.lightBlack} />}
          breakLabel="...."
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          forcePage={currentPage}
          data-testid="page"
        />
        <NavigationButton
          iconBehavior="iconForward"
          isArrow
          onClick={onForwardClick}
          isDisabled={currentPage === pages - 1 ? true : false}
          themedButton="pagination"
        />
      </Styled.Pages>
      <Styled.GoToWrapper>
        <NavigationButton
          themedButton="pagination"
          isWithoutArrow
          onClick={onGoToClick}
        >
          Go to
        </NavigationButton>
        <Styled.InputWrapper>
          <Input
            value={inputPaginationValue}
            inputType="number"
            onChangeValue={onChangePaginationInputValue}
            onKeyDown={onEnterGoToClick}
            isRemoveBoxShadow
          />
        </Styled.InputWrapper>
      </Styled.GoToWrapper>
    </Styled.Wrapper>
  );
};
