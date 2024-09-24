import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.scss'
})
export class NgSwitchComponent {
  selectedOption = 'B'; 

}
