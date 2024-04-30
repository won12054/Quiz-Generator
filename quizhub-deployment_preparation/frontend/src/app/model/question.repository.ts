import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "./question.model";
import { RestDataSource } from "./rest.datasource";
// import { RestDataSource } from "./rest.datasource";


@Injectable()
export class QuestionRepository
{
    private questions!: Question[];
    private loaded = false;

    constructor(private dataSource: RestDataSource)
    {
    }

    getQuestions(): Question[] {
        return this.questions
    }
    
    createUpdateQuestions(questionsObj: any): Observable<any>
    {
        return this.dataSource.createUpdateQuestions(questionsObj);
    }
} 