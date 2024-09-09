import { Stats } from 'fs';
import { styled, theme, Z_INDEX } from 'styles/theme';

export const UploadStatusStyle = {
    Wrapper: styled.div<{ margin?: string, title: string }>`
    background: ${({ theme }) => theme.colors.lightGray};
    border-radius: 6px;
    margin: ${({ margin }) => `${margin}` || '0'};
    max-width: 500px;
    width: 20%;
    height: 40px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    `,
    Title: styled.div`
        font-size: 18px;
        font-weight: 600;
        padding: 0 8px;

        display: flex;
        align-items: center;
    `,
    Stats: styled.div`
        font-size: 14px;
        margin-left: auto;
        font-weight: initial;
    `,
    Stat: styled.span<{color: keyof typeof theme.colors}>`
        color: ${(props) => props.theme.colors[props.color]}
    `,
    Bar: styled.div`
        width: 100%;
        height: 5px;
        background-color: ${(props) => props.theme.colors.lighterBlue};
        margin-top: 6px;
    `,
    Progress: styled.div<{width?: number}>`
        height: 100%;
        width: ${(props) => props.width || '10'}%;
        background-color: ${(props) => props.width ? props.theme.colors.green: props.theme.colors.gray};
    `
}


    // top: ${({ positionTop }) => `${positionTop}px` || '56px'};
