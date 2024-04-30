import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "./question.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
import { Quiz } from "./quiz.model";

@Injectable()
export class QuizRepository 
{
    private  quizs: Quiz[] = [];
    private  ownedQuizs: Quiz[] = [];
    
    constructor(private dataSource: RestDataSource){
        dataSource.getQuizes().subscribe(data  => {
            this.quizs = data;
        })

        dataSource.getQuizes(localStorage.getItem('name') || "").subscribe(data => {
            this.ownedQuizs = data; 
        })
    }

    getQuizs(): Quiz[] {
        return this.quizs
    } 

    getOwnedQuiz(): Quiz[]{
        return this.ownedQuizs
    }

    getQuizList(): Observable<Quiz[]>
    {
        return this.dataSource.getQuizes();
    }

    addQuiz(quiz: Quiz): Observable<Quiz>
    {
        return this.dataSource.addQuiz(quiz);
    }

    editQuiz(quiz:Quiz): Observable<Quiz>
    {
        return this.dataSource.editQuiz(quiz);
    }

    deleteQuiz(quizId:string): Observable<string>
    {
        return this.dataSource.deleteQuiz(quizId);
    }
}