import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-viewer-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class ProjectDescriptionComponent implements OnInit {
  @Input() description = '';
  @Input() from = '';

  constructor() { }

  ngOnInit() {
  }

}
