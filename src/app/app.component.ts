import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  posts = [
    {
      title:  `Nightview`,
      imageUrl: `assets/nightview.jpeg`,
      username: `nature`,
      content: `Awesome view from appartment balcony`
   },
   {
     title:  `Sushila`,
     imageUrl: `assets/sush.jpeg`,
     username: `mypic`,
     content: `Photo from my friend´s wedding`
  },
  { 
    title:  `Windmill`,
    imageUrl: `assets/windmill.jpeg`,
    username: `renewable energy`,
    content: `Picture of windmill from the shore`
   }
  ];
}
