import { createAction, props } from '@ngrx/store';

export const AuthActions = {
  login: createAction('[Auth] Login', props<{ user: string }>()),
};
