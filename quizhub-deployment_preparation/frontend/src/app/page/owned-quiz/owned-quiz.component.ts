import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QuizRepository } from 'src/app/model/quiz.repository';
import { Quiz } from 'src/app/model/quiz.model';
import { Router } from '@angular/router';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Component({
  selector: 'app-owned-quiz',
  templateUrl: './owned-quiz.component.html',
  styleUrls: ['./owned-quiz.component.css']
})
export class OwnedQuizComponent implements OnInit{
  displayedColumns: string[] = ['_id','title', 'author','description', "actions"]
  quizs: Quiz[] = [];

  constructor(
    private repository: QuizRepository,
    private dataSource: RestDataSource,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.getOwnedQuiz();
  }

  getOwnedQuiz(){
      this.dataSource.getQuizes(localStorage.getItem("username") || "").subscribe((data: any) => {
      this.quizs = data;
      console.log(this.quizs)
    })
  }

  delteQuiz(quizId: string){
    this.dataSource.deleteQuiz(quizId).subscribe((data: any) => {
      this.getOwnedQuiz(); 
    })
  }

  toEditPage = (quiz: Quiz): void => {
      this.router.navigateByUrl('/edit-quiz', { state: {quiz} })
  }
}
