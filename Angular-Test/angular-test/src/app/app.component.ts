import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test';

  name:string = "Mohammed Magdy";
  email:string = "mmagdy1690@gmail.com";
  phone:number = 1225901435;

  favIcon:string = './angular-test/public/desktop-wall.jpg';

  sayHello():void{
    alert("Welcome MoMo");
  }
}
