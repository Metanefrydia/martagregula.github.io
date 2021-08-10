import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  public contactForm: FormGroup = new FormGroup({});
  public messageStatus: string = '';
  public constructor(
    private _formBuilder: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      name: new FormControl('', [Validators.required]),
      subject: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  public sendEmail(e: Event) {
    emailjs.sendForm(environment.serviceId, environment.templateId, e.target as HTMLFormElement, environment.userId)
      .then((result: EmailJSResponseStatus) => {
        this.contactForm.reset();
        this.messageStatus = "Thank you! Message has been sent. I'll try to reply as soon as possible!";
      }, (error) => {
        this.messageStatus = "Sorry, an error occurred. Please contact me directly: gregulamarta@gmail.com";
      });
  }
}
