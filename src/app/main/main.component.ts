import { Component, OnInit } from '@angular/core';
declare let $;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  Onclick() {
    $( "#datepicker,#date" ).datepicker();
  } ;
  ngOnInit() {
  }

}
