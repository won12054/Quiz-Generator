import { Component,OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //*********welcome.compoenet.html***********/
  @ViewChild('name') nameKey!: ElementRef;

  public quizTitle!: string;

  constructor(private route: Router) { 
      this.quizTitle = window.history.state.quizTitle;
  }

  ngOnInit(): void {
  }

  startQuiz(){
    const quizId = window.history.state.quizId;
    localStorage.setItem("testCandidateName", this.nameKey.nativeElement.value);
    this.route.navigateByUrl("/question", {state: {quizId, quizTitle: this.quizTitle}});
  }
}
