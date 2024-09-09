import { styled } from 'styles/theme';
import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const MasterModalStyles = {
  content: {
    ...modalContentStyles,
    width: '420px',
    height: 'max-content',
    maxHeight:'90vh'// Adjust height to auto for responsiveness
    // padding: "10px",
  },
  overlay,
};

export const MasterModalWindowStyles = {
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ModelWWrapper: styled.div`
      padding: 22px;
      display:flex;
      gap:20px;
      flex-direction:column;`,
  InputWraper: styled.div`
      display:flex;
      gap:20px;
      flex-direction:column;`,
  MainContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    // padding: 20px 33px 2px 33px;
    width: 100%;
    flex: 1;
  `,
  RadioGroup: styled.div`
    display: flex;
gap:20px;    `,
  RadioLabel: styled.label<{ isChecked: boolean }>`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${props => (props.isChecked ? '#DF1C29' : '#333')};
    cursor: pointer;
    position: relative;
    padding-left: 25px;
    margin-bottom: 10px;
    user-select: none;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 3px solid ${props => (props.isChecked ? '#DF1C29' : '#ccc')};
      background: white;
    }

    input[type="radio"] {
      display: none;
    }

    input[type="radio"]:checked + & {
      color: #DF1C29;

      &::before {
        border-color: #DF1C29;
      }

      &::after {
        content: '';
        position: absolute;
        left: 4px;
        top: 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #DF1C29;
      }
    }
  `,
  RadioButton: styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  `,
  SubTitle: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.black};
    line-height: 19px;
    margin: 32px 0 25px 0;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
    margin-top: 15px;
  `,
  AttachmentsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-height: 90px;
    overflow: hidden;
    overflow-y: scroll;
    margin-bottom: 26px;
    border-radius: 5px;
  `,
    CloseIconWrapper: styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`,
};
