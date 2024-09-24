import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  logMessage(message: string): void {
    console.log(`LoggingService: ${message}`);
  }

  logError(error: string): void {
    console.error(`LoggingService Error: ${error}`);
  }
}
