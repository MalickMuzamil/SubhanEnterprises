import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from "../../Shared/navbar/navbar";
import {Footer} from "../../Shared/footer/footer";
import { Whatsapp } from '../../Shared/whatsapp/whatsapp';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar, Footer, Whatsapp],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
