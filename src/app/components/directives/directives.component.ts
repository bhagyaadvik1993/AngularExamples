import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  isActive: boolean = true;
  isVisible: boolean = true;
   items: number[] = [1, 2, 3, 4, 5];


  toggleStatus() {
    this.isActive = !this.isActive;
  }

}
