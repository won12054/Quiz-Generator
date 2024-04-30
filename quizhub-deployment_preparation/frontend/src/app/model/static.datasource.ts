import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { Observable, from } from 'rxjs';
@Injectable()
export class StaticDataSource
{
    private Questions: Question[] = 
    [
        new Question(1, 2, "How are you today", ['Good', 'Bad', 'Tired', 'High'], 0),
        new Question(2, 2, "How are you yesterday", ['Good', 'Bad', 'Tired', 'High'], 1),
        new Question(3, 2, "How are you tomorrow", ['Good', 'Bad', 'Tired', 'High'], 3)
    ];

    constructor(){}

    getQestions(): Observable<Question[]>
    {
        return from([this.Questions]);
    }

}