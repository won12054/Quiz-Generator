import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from "rxjs";
// import { JwtHelperService } from '@auth0/angular-jwt'
import { Quiz } from "./quiz.model";
import { Question } from "./question.model";
import { environment } from "src/environments/environment";
import { User } from "./user.model";

const { protocol, port } = environment;
@Injectable()
export class RestDataSource
{
    baseUrl!: string;
    authToken?: string;
    user?:User;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        })
    }

    constructor(private http: HttpClient)
    {
        console.log("env :: ", environment);
        this.baseUrl = `${protocol}://${location.hostname}${!port ? "": `:${port}`}/`;
    }

    getQuizes(name?: string): Observable<Quiz[]>
    {
        const params = name ? new HttpParams().set('author', name) : {};
        return this.http.get<Quiz[]>( this.baseUrl + 'api/quiz', {params});
    }

    getQuestionsByQuizId(id?: string): Observable<Question[]>
    {
        return this.http.get<Question[]>(this.baseUrl + `api/quiz/questions/${id}`);
    }

    addQuiz(quiz: Quiz): Observable<Quiz>
    {
        return this.http.post<Quiz>(this.baseUrl + 'api/add-quiz', quiz);
    }

    editQuiz(quiz: Quiz): Observable<Quiz>
    {
        return this.http.post<Quiz>(this.baseUrl + `api/edit-quiz/${quiz._id}`, quiz);
    }

    deleteQuiz(quizId: string): Observable<string>
    {
        return this.http.get<string>(this.baseUrl + `api/delete-quiz/${quizId}`);
    }

    createUpdateQuestions(questionsObj: any): Observable<any>
    {
        console.log("questionsObj ::: ", questionsObj)
        return this.http.post<any>(this.baseUrl + `api/quiz/createAndUpdateQuestions`, questionsObj);
    }


    private loadToken(): void
    {
        const token = localStorage.getItem('id_token');
        this.authToken = token!;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', `${this.authToken}`) //??
    }

    authenticate(user: User): Observable<any>{
        return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions)
    }

    register(user: User): Observable<any>{
        return this.http.post<any>(this.baseUrl + 'register', user, this.httpOptions)
    }

    storeUserData(token: any, user: User): void
    {
        localStorage.setItem("id_token", 'Bear '+ token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("username", user.username);
        this.authToken = token;
        this.user = user;
    }

    logout(): Observable<any>
    {
        localStorage.clear();
        this.authToken = undefined;
        this.user = undefined;
        return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions)
    }

    loggedIn(): boolean
    {
        this.loadToken();
        if(!!this.authToken){
            return true;
        }
        return false;
    }

}