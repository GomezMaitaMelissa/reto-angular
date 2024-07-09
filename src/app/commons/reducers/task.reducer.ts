import { createReducer, on } from '@ngrx/store';
import { TaskActions } from '../actions/task.actions';

export interface Task {
  text: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, { text: task, completed: false }],
  })),
  on(TaskActions.removeTask, (state, { index }) => ({
    ...state,
    tasks: state.tasks.filter((_, i) => i !== index),
  })),
  on(TaskActions.toggleTask, (state, { index }) => ({
    ...state,
    tasks: state.tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task,
    ),
  })),
);
