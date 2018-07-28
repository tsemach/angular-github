import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/projects.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  projects = [];

  constructor(private projectsService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();    
  }

}
