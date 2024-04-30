import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PartialModule } from '../partial/partial.module';
import { CreateUpdateQuizComponent } from './create-update-quiz/create-update-quiz.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ModelModule } from '../model/model.module';
import { MatSelectModule } from '@angular/material/select';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { OwnedQuizComponent } from './owned-quiz/owned-quiz.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';
import { ChangeBgDirective } from './change-bg.directive';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    CreateUpdateQuizComponent,
    ListQuizComponent,
    OwnedQuizComponent,
    WelcomeComponent,
    QuestionComponent,
    LoginComponent,
    ChangeBgDirective,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PartialModule,
    FormsModule,
    MatIconModule,
    MatOptionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ModelModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    RouterModule
  ],
  exports: [
    PartialModule,
  ]
})
export class PageModule { }
