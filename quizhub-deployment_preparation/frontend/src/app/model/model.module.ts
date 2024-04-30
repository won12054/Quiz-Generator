import { NgModule, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuestionRepository } from './question.repository';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { QuizRepository } from './quiz.repository';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    QuestionRepository,
    QuizRepository,
    StaticDataSource,
    RestDataSource,
    {provide: StaticDataSource, useClass: RestDataSource},
    AuthService
  ]
})
export class ModelModule { }
