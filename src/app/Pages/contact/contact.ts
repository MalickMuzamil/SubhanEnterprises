import { Component } from '@angular/core';
import { ContactHero } from '../../Components/Contact/contact-hero/contact-hero';
import { ContactInfo } from "../../Components/Contact/contact-info/contact-info";
import { ContactForm } from "../../Components/Contact/contact-form/contact-form";
import { ContactMap } from "../../Components/Contact/contact-map/contact-map";

@Component({
  selector: 'app-contact',
  imports: [ContactHero, ContactInfo, ContactForm, ContactMap],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
