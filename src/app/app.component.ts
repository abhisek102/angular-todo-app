import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'To Do app';
  tasks: any = [];
  pushtoapp(item: any) {
    this.tasks.push({ id: this.tasks.length, name: item });
    console.warn(this.tasks);
  }
  Removefromapp(id: any) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }
}
