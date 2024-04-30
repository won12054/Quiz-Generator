import { Component,OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { QuestionService } from 'src/app/service/question.service';
import { Question } from 'src/app/model/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {


  public name : string="";
  public quizId: string;
  public quizTitle: string;
  //////////////////////////updated questionlist type

public questionList: Question[] = [];

  ///////////////////////////////

  public currentQuestion : number =0; //************************ */
  public points : number =0; //************************ */
  counter=60; //************************ */
  correctAnswer: number =0;
  inCorrectAnswer: number =0;
  interval$ :any;
  progress: string ="0"; //*********122.31 */
  isQuizCompleted : boolean = false; //********142.15 */

  constructor(
    private questionService : QuestionService, 
    private dataSource: RestDataSource
  ) {
    this.quizId = window.history.state.quizId;
    this.quizTitle = window.history.state.quizTitle;
  }

  ngOnInit(): void {
    this.name = localStorage.getItem("testCandidateName")!;
    // this.getAllQuestions();
    this.getQuestionsByQuizId(this.quizId);
    this.startCounter();
  }

    getQuestionsByQuizId(quizId: string){
      this.dataSource.getQuestionsByQuizId(quizId).subscribe(data => {
        this.questionList = data;
      })
    }

    /////////////////////////////////////// Change this.questionList = res;
    // getAllQuestions() {
    //   this.questionService.getQuestionJson()
    //     .subscribe(res => {
    //       this.questionList = res;
    //       // console.log(this.questionList);
    //     });
    // }

    ////////////////////////////////////
    //**************59.45 */
    nextQuestion(){
      this.counter=60;
      this.currentQuestion++;
      // reset background color of all options
      const options = document.querySelectorAll('.option');
      options.forEach(option => {
      (option as HTMLElement).style.backgroundColor = '';
      });
      console.log("NextQue is clicked");
    }
    
    //****************59.45 */
    previousQuestion(){
      this.currentQuestion--; 
    }

    getCorrectAns(currentQno: number){
      const ans = this.questionList[currentQno].answer
      return ans;
    }
////////////////////////////////////////////// change answer method codes
    answer(currentQno: number, optionIndex: number) {
      if (optionIndex === this.getCorrectAns(currentQno)) {
        this.points += 10;
        this.correctAnswer++;
        setTimeout(() => {
          this.currentQuestion++;
          this.resetCounter();
          this.getProgressPercent();
        }, 1000);
      }
      else {
        this.inCorrectAnswer++;
        setTimeout(() => {
          this.currentQuestion++;
          this.resetCounter();
          this.getProgressPercent();
        }, 1000);
      }

      if (currentQno + 1 === this.questionList.length) {
        setTimeout(() => {
          this.isQuizCompleted = true;
          this.stopCounter();
        }, 900)
        return;
      }
    }
////////////////////////////////////////////////////////////////
  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=60;

      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },600000);
  }

  isExceedQuestionCount(currentQuestion: number): boolean{
    return currentQuestion + 1 >= 2;
  }

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;

  }

  resetCounter(){
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  //**********119.10 */
  resetQuiz(){
    this.resetCounter();
    // this.getAllQuestions();
    this.points=0;
    this.counter=60;
    this.currentQuestion=0;
    this.progress= "0";

  }

  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }

}