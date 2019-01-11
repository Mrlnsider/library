import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/library.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibraryService } from '../../shared/services/library.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public receivedUser: User; // полученный пользователь
    public done: Boolean = false;
    public email: String;
    public password: any;


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
          'fullName': new FormControl('', [Validators.required, Validators.minLength(2),
             Validators.maxLength(150), Validators.pattern('^[a-zA-Z]+$')]),
      });
  }

  submit(event) {
    event.preventDefault();
    this.servise.postReg(this.myForm.value).subscribe(data => {
        console.log(data);
    });
    console.log(this.myForm);
  }

  ngOnInit() {

  }
}
