import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = '../../../../assets/myResume.pdf';
    link.download = 'Ilkin Rufullayev Pdf.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
