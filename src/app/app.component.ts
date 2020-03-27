import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  obj1 = {
    icon: "http://placehold.it/50/55C1E7/fff&text=U",
    surname: "Jack Sparrow",
    time: "12 mins ago",
    text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum
ornar dolor, quis ullamcorper ligula sodales.`

  }


  obj2 = {
    icon: "http://placehold.it/50/FA6F57/fff&text=ME",
    surname: "Bhaumik Patel",
    time: "13 mins ago",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum
 ornare dolor, quis ullamcorper ligula sodales.`

  }


  obj3 = {
    icon: "http://placehold.it/50/55C1E7/fff&text=U",
    surname: "Jack Sparrow",
    time: "14 mins ago",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum
ornare dolor, quis ullamcorper ligula sodales.`

  }

  obj4 = {
    icon: "http://placehold.it/50/FA6F57/fff&text=ME",
    surname: "Bhaumik Patel",
    time: "15 mins ago",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum
ornare dolor, quis ullamcorper ligula sodales.`

  }

  obj = [this.obj1, this.obj2, this.obj3, this.obj4]
}
