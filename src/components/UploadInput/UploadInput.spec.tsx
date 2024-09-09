import { render, screen, fireEvent } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { UploadInput } from './UploadInput';

const renderComponentFc = () =>
  render(
    <AppTheme>
      <UploadInput />
    </AppTheme>
  );
describe('Upload input component', () => {
  it('Render component', () => {
    renderComponentFc();
    expect(screen.getByTestId('upload-file')).toBeInTheDocument();
  });

  it('Onchange works well', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    renderComponentFc();
    const input = screen.getByTestId('upload-file') as any;
    expect(input).toBeInTheDocument();
    fireEvent.change(input, {
      target: { files: [file] },
    });
    expect(input.files[0].name).toBe('hello.png');
    expect(input.files[0]).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
  });

  it('Multiple uploading works well', () => {
    const files = [
      new File(['hello'], 'hello.png', { type: 'image/png' }),
      new File(['there'], 'there.png', { type: 'image/png' }),
    ];
    renderComponentFc();
    const input = screen.getByTestId('upload-file') as any;
    expect(input).toBeInTheDocument();
    fireEvent.change(input, {
      target: { files: [...files] },
    });
    expect(input.files[0].name).toBe('hello.png');
    expect(input.files[0]).toStrictEqual(files[0]);
    expect(input.files).toHaveLength(2);
  });
});
