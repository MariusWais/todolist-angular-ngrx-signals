import { Component } from '@angular/core';
import { CheckboxModule } from "primeng/checkbox";
import { Button, ButtonDirective } from "primeng/button";
import { Ripple } from "primeng/ripple";
import { NgOptimizedImage } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CheckboxModule,
    Ripple,
    NgOptimizedImage,
    InputTextModule,
    Button,
    ButtonDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
