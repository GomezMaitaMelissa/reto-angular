import { createAction, props } from '@ngrx/store';

export const TaskActions = {
  addTask: createAction('[Task] Add Task', props<{ task: string }>()),
  removeTask: createAction('[Task] Remove Task', props<{ index: number }>()),
  toggleTask: createAction('[Task] Toggle Task', props<{ index: number }>()),
};
