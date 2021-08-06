import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public openResume(): void {
    window.location.href='./assets/files/resume-marta-gregula.pdf'
  }
}
