import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IInvites, IINVITES_INITIAL_STATE } from '../types/invites.types';

export const INVITES_INITIAL_STATE: IINVITES_INITIAL_STATE = {
  invites: { result: [], count: 0 },
};

const initialState = INVITES_INITIAL_STATE;

export const InvitesSlice = createSlice({
  name: 'invitesSlice',
  initialState,
  reducers: {
    setInvites: (
      state: IINVITES_INITIAL_STATE,
      action: PayloadAction<{ invites: IInvites[]; count: number }>
    ) => {
      state.invites.result = action.payload.invites;
      state.invites.count = action.payload.count;
    },
  },
});

export const { setInvites } = InvitesSlice.actions;

export const InvitesReducer = InvitesSlice.reducer;
