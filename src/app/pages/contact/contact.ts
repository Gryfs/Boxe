import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  contactForm: FormGroup = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  submitted: boolean = false;
  formSent = false;
  sending: boolean = false;

  onSubmit() {
    // gestion de la soumission du formulaire ici
    
    if (this.contactForm.valid) {
      this.sending = true;
      setTimeout(() => {
        console.log(this.contactForm.value);
        this.formSent = true;
        this.contactForm.reset();
        this.submitted = false;
        this.sending = false;
      }, 1500);
    }else {
      this.submitted = true;
    }
  }
}
