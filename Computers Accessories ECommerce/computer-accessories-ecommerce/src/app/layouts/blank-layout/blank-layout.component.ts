import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { BlankNavbarComponent } from "../../components/blank-navbar/blank-navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [BlankNavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.css'
})
export class BlankLayoutComponent {

}
