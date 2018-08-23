import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  template: `
    <p>
      callback works!
    </p>
  `,
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
