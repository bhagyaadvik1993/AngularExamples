import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
message = "Hello from Parent";
recievedMessage: string = '';

recieveMessage(message: string){
  this.recievedMessage = message;
}
}
