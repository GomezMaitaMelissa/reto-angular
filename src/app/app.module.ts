import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { authReducer } from './commons/reducers/authentification.reducer';
import { TareasComponent } from './tareas/tareas.component';
import { taskReducer } from './commons/reducers/task.reducer';
import { AlphabetNumericOnlyDirective } from './commons/directives/alphanumeric-only.directive';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tareas', component: TareasComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TareasComponent,
    AlphabetNumericOnlyDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ auth: authReducer, tasks: taskReducer }),
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
