import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from "./hero/hero.component";
import {FeaturesComponent} from "./features/features.component"
import { FooterComponent } from './footer/footer.component';
import { EmailComponent } from './email/email.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent,FeaturesComponent, FooterComponent,EmailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}
