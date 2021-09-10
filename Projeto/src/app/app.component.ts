import { environment } from './../environments/environment.prod';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eDeGraca';

  constructor(
    public auth: AuthService,
    private router: Router
  ){}

  ngOnInit(){
    if (environment.token == ''){
      this.router.navigate(['/home'])
    }
  }
}
