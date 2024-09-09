import { styled, theme } from 'styles/theme';

export const FilesUploadStyles = {
    // background-color: #ff0;
    ScreenWrapper: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    UploadSpace: styled.div`
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        overflow-y: auto;
        // background: #ff725e;
        background: ${({ theme }) => theme.colors.lightGray};
        // border: 2px dashed ${({ theme }) => theme.colors.lightRed};
        // &:hover {
        //     border: 2px dashed ${({ theme }) => theme.colors.darkRed};
        // }
        border-radius: 10px;
        padding: 20px;
        // cursor: pointer;
    `,
    Title: styled.div`
        font-size: 40px;
        color: ${({ theme }) => theme.colors.darkGray};
    `,
    warnings: styled.div`
        margin-top: -10px;
        font-size: 20px;
        color: ${({ theme }) => theme.colors.darkRed};
    `,
    ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    `,
    Label: styled.label<{ isRoundedButton?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    font-size: ${(props) => props.theme.size.medium};
    // max-height: 40px;
    // min-height: 38px;
    border-radius: ${({ isRoundedButton }) =>
            isRoundedButton ? '50px' : '6px'};
    box-shadow: ${(props) =>
            `0px 0px 5px ${props.theme.colors.boxShadowBlackButton}`};
    background-color: ${(props) => props.theme.colors.darkRed};
    color: ${(props) => props.theme.colors.white};
    margin-top: 50px;
    padding: 10px 30px;
    cursor: pointer;
    `,

    BoxWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 125px;
    `,
    ButtonText: styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.normal};
    color: ${({ theme }) => theme.colors.halfTranparentBlack};
    `,
};