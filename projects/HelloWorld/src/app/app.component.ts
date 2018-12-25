import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationModule } from './registration/registration.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  greeter = 'Gopi';
}
