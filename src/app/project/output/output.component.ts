import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-viewer-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class ProjectOutputComponent implements OnInit {
  @Input() output = '';

  constructor() { }

  ngOnInit() {
  }

}
