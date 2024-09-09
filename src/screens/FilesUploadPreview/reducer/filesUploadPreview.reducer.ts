import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFILES_UPLOAD_PREVIEW_INITIAL_STATE } from '../types/filesUploadPreview.types';

export const FILES_UPLOAD_PREVIEW_INITIAL_STATE: IFILES_UPLOAD_PREVIEW_INITIAL_STATE =
  {
    previewFiles: [],
    filesArray: [],
    activeIndex: 0,
  };

const initialState = FILES_UPLOAD_PREVIEW_INITIAL_STATE;

export const FilesUploadPreviewSlice = createSlice({
  name: 'filesUploadPreviewSlice',
  initialState,
  reducers: {
    deleteFile: (
      state: IFILES_UPLOAD_PREVIEW_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      const deleteItemIndex = state.previewFiles.findIndex(
        (item) => item.fileName === action.payload
      );
      state.activeIndex =
        state.activeIndex - deleteItemIndex >= 1
          ? state.activeIndex - 1
          : deleteItemIndex !== state.previewFiles.length - 1 &&
            deleteItemIndex === state.activeIndex
          ? deleteItemIndex
          : state.activeIndex === deleteItemIndex
          ? deleteItemIndex - 1
          : state.activeIndex;

      state.filesArray = state.filesArray.filter(
        (file) => file.name !== action.payload
      );
      state.previewFiles = state.previewFiles.filter(
        (src) => src.fileName !== action.payload
      );
    },
    setActiveIndex: (
      state: IFILES_UPLOAD_PREVIEW_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      state.activeIndex = state.previewFiles.findIndex(
        (item) => item.fileName === action.payload
      );
    },
    resetState: () => initialState,
    setFiles: (
      state: IFILES_UPLOAD_PREVIEW_INITIAL_STATE,
      action: PayloadAction<
        Omit<IFILES_UPLOAD_PREVIEW_INITIAL_STATE, 'activeIndex'>
      >
    ) => {
      state.filesArray = action.payload.filesArray;
      state.previewFiles = action.payload.previewFiles;
      state.activeIndex = 0;
    },
  },
});

export const { setFiles, resetState, deleteFile, setActiveIndex } =
  FilesUploadPreviewSlice.actions;

export const filesUploadReducer = FilesUploadPreviewSlice.reducer;
