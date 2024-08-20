import { Component } from '@angular/core';
import { HwH1Component } from '@viswanathaswamy-pk-techskillz-academy/hw-nglib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HwH1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hwh1-sampleapp';
}
