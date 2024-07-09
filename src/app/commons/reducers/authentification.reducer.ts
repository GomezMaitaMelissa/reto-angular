import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/athentification.action';

export interface AuthState {
  user: string | null;
}

export const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, { user }) => ({ ...state, user })),
);
