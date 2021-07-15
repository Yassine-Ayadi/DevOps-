import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-company-sign-in',
  templateUrl: './company-sign-in.component.html',
  styleUrls: ['./company-sign-in.component.css']
})
export class CompanySignInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit( loginForm: NgForm){
    this.authService.login(loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data['id']);
        this.router.navigate(['profile']);
      },
      (erreur) => alert("Veuillez vérifier vos coordonnées")
    )
  }

}
