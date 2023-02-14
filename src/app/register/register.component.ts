import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public signupForm !: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signUp() {
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value).subscribe(res => {
      alert('Signup Successful');
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err => {
      alert('Signup Failed');
    });
  }

}
