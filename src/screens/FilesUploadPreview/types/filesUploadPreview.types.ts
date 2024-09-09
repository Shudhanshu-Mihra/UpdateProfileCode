export interface IFILES_UPLOAD_PREVIEW_INITIAL_STATE {
  previewFiles: { fileSrc: string; fileName: string; fileType: string }[];
  filesArray: File[];
  activeIndex: number;
}

export type LocationState = {
  from: Location;
  action?: string;
};

export type loany = {
  from: {
    state: {
      action: string;
    }
  };
}