import { fireEvent, render } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { AvatarBox } from './AvatarBox';

let isHover = false;
const onMouseEnterHandler = jest.fn();

const onMouseLeaveHandler = jest.fn();
const onChangeAvatarHandler = jest.fn();

const setupFc = () => {
  const { getByRole, getByText, getByTestId, queryByTestId } = render(
    <AppTheme>
      <AvatarBox
        isActiveAccount
        onMouseEnterHandler={onMouseEnterHandler}
        userFullName="Test User"
        id="avatar"
        name="upload"
        onChangeAvatarHandler={onChangeAvatarHandler}
        avatarSrc="avatar.png"
        userRole={'user'}
        isUploadingPhoto={false}
        isHover={isHover}
        onMouseLeaveHandler={onMouseLeaveHandler}
      />
    </AppTheme>
  );

  return { getByRole, getByText, getByTestId, queryByTestId };
};
describe('SlideArrow component', () => {
  it('render component', () => {
    const { getByTestId } = setupFc();

    expect(getByTestId(/avatarBox/i)).toBeInTheDocument();
  });

  it('onMouseEnterHandler and onMouseLeaveHandler works well', () => {
    const { getByTestId } = setupFc();

    const label = getByTestId('input-label');
    expect(label).toBeInTheDocument();
    fireEvent.mouseEnter(label);
    fireEvent.mouseLeave(label);

    expect(onMouseEnterHandler).toBeCalled();
    expect(onMouseLeaveHandler).toBeCalled();
  });

  it('user name is rendered', () => {
    const { getByText } = setupFc();
    expect(getByText(/test user/i)).toBeInTheDocument();
  });

  it('hoverUploadLogo is not rendered', () => {
    const { queryByTestId } = setupFc();
    expect(queryByTestId('hover-upload-logo')).not.toBeInTheDocument();
  });

  it('hoverUploadLogo is rendered', () => {
    isHover = true;
    const { getByTestId } = setupFc();

    const component = getByTestId('hover-upload-logo');
    expect(component).toBeInTheDocument();
    expect(component).toHaveStyle('opacity: 0.5');
  });
});
