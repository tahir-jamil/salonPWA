import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!

  constructor(
    private swUpdate: SwUpdate
  ) { }

  ngOnInit() {
    this.reloadCache();
  }

  reloadCache() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available! would you like to update?')) {
          window.location.reload();
        }
      });
    }
  }

}
