import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateQuizComponent } from './page/create-update-quiz/create-update-quiz.component';
import { ListQuizComponent } from './page/list-quiz/list-quiz.component';
import { OwnedQuizComponent } from './page/owned-quiz/owned-quiz.component';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { QuestionComponent } from './page/question/question.component';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  {path: 'list-quiz', component: ListQuizComponent},
  {path: 'create-quiz', component: CreateUpdateQuizComponent, canActivate: [AuthGuard]},
  {path: 'edit-quiz', component: CreateUpdateQuizComponent, canActivate: [AuthGuard]},
  {path: 'manage-quizzes', component: OwnedQuizComponent, canActivate: [AuthGuard]},
  {path: "welcome", component:WelcomeComponent},
  {path: "question", component:QuestionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/list-quiz', pathMatch: 'full'},
  {path: '**', redirectTo: '/list-quiz'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
