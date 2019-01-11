import { Injectable } from '@angular/core';
import { User } from '../models/library.models';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LibraryService {

  constructor(private http: HttpClient) { }
    postReg(user: User) {
        const body = { fullName: user.fullName, email: user.email, password: user.password};
        return this.http.post('https://localhost:3000/auth/register', body);
    }
    postLog(user: User) {
        const body = {login: user.email, password: user.password};
        return this.http.post('https://localhost:3000/auth/login', body);
    }
}
