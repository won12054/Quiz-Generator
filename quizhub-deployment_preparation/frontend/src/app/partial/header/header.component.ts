import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user?: User;
  public isCollaspeMenuDisplay = false;

  constructor(
      private router: Router,
      private authService: AuthService
  ) { }
    
    toCreatePage = (): void => {
      this.router.navigateByUrl('/create-quiz')
    }

    toManagePage = (): void => {
      this.router.navigateByUrl('/manage-quizzes')
    }

    isloggedIn():boolean{
      const result = this.authService.authenticated;
      if(result)
      {
        this.user = JSON.parse(localStorage.getItem('user') || "");
      }
      return result;
    }

    logout(){
      this.authService.logout();
      this.router.navigateByUrl("/list-quiz");
    }

    collapse(){
      this.isCollaspeMenuDisplay = !this.isCollaspeMenuDisplay;
    }
}
