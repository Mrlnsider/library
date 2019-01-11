import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/library.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibraryService } from '../../shared/services/library.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public receivedUser: User; // полученный пользователь
  public done: Boolean = false;
  public email: String;
  public password: String;
  public error: String;


myForm: FormGroup;
constructor( private servise: LibraryService ) {
    this.myForm = new FormGroup({
        'email': new FormControl('', [
                            Validators.required,
                            Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
                        ]),
        'password' : new FormControl('', Validators.compose([
          Validators.minLength(6),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])),
    });
}

submit(event) {
  event.preventDefault();
  this.servise.postLog(this.myForm.value).subscribe(
    data => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
    },
    error => {
      // this.errors = error.status;
      error.status === 401 ? this.error = 'No user found' : this.error = 'Email or password error';
    }
  );

}

ngOnInit() {

}

}
