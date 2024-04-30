import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/model/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public user!: User;
    public errorMessage?: string;

    constructor(
      private router: Router,
      private auth: AuthService
    ){

    }

    ngOnInit(): void {
      this.user = new User();
    }

    register(form: NgForm): void
    {
      if(form.valid)
      {
        this.auth.register(this.user).subscribe(data => { 
          if(data.success){
            this.router.navigateByUrl("/login");
          } else {
            this.errorMessage = data.msg.message;
            console.log("errorMessage", this.errorMessage)
          }
        })
      }
    }
}
