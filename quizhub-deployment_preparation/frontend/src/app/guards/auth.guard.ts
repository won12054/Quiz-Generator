import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/model/auth.service";
import { Router } from "@angular/router";


@Injectable()
export class AuthGuard
{
    path?: ActivatedRouteSnapshot[];
    route?: ActivatedRouteSnapshot;

    constructor(private router: Router, private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        if (this.auth.authenticated)
        {
            console.log("authenticated");
            return true;
        }
        else
        {
            console.log("cannot authenticate")
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}