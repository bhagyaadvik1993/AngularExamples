import { Component } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-dependency-injection',
  standalone: true,
  imports: [],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.scss'
})
export class DependencyInjectionComponent {
  constructor(private loggingService: DataService) {
    // Now loggingService is available inside this component
  }

  logInfo(): void {
    this.loggingService.logMessage('This is a log message.');
  }

  logAnError(): void {
    this.loggingService.logError('This is an error log.');
  }

}
