import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { Modal } from '../../../Shared/modal/modal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [Modal, FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  modalVisible = false;
  modalTitle = '';
  modalMessage = '';
  isSending = false;

  constructor() {
    emailjs.init('IhUnYU45kPjCq5Hpr');
  }

  sendEmail(e: Event) {
    this.isSending = true;

    emailjs
      .sendForm(
        'service_hzmjwoq',
        'template_vt295ku',
        e.target as HTMLFormElement
      )
      .then(
        () => {
          this.modalTitle = 'Message Sent ✅';
          this.modalMessage =
            'Thank you for contacting us. We will get back to you shortly.';
          this.modalVisible = true;
          this.isSending = false;
          (e.target as HTMLFormElement).reset();
        },
        () => {
          this.modalTitle = 'Error ❌';
          this.modalMessage = 'Something went wrong. Please try again later.';
          this.modalVisible = true;
          this.isSending = false;
        }
      );
  }

  onModalClosed() {
    this.modalVisible = false;
  }
}
