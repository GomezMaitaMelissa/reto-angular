import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task, TaskState } from '../commons/reducers/task.reducer';
import { AuthState } from '../commons/reducers/authentification.reducer';
import { TaskActions } from '../commons/actions/task.actions';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent implements OnInit {
  taskForm: FormGroup;
  tasks$: Observable<Task[]>;
  user: string | null = null;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: AuthState; tasks: TaskState }>,
  ) {
    this.taskForm = this.fb.group({
      task: ['', [Validators.required]],
    });
    this.tasks$ = this.store.select((state) => state.tasks.tasks);
    this.store
      .select((state) => state.auth.user)
      .subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {}

  addTask() {
    if (this.taskForm.valid) {
      const task = this.taskForm.value.task;
      this.store.dispatch(TaskActions.addTask({ task }));
      this.taskForm.reset();
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  removeTask(index: number) {
    this.store.dispatch(TaskActions.removeTask({ index }));
  }

  toggleTask(index: number) {
    this.store.dispatch(TaskActions.toggleTask({ index }));
  }
}
