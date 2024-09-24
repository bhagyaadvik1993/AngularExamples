import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
@Input() message : string = '';
@Output() messageEmitter = new EventEmitter<string>();


sendMessage(){
  this.messageEmitter.emit("Hello from child");
}
}
