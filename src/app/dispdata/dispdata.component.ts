import { Component, Input, OnInit } from '@angular/core';
import { USer } from '../user/user';

@Component({
  selector: 'app-dispdata',
  templateUrl: './dispdata.component.html',
  styleUrls: ['./dispdata.component.css']
})
export class DispdataComponent implements OnInit {
  @Input() nuser:USer;
  constructor() { }

  ngOnInit(): void {
  }

}
