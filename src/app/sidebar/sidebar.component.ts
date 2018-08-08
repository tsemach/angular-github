import { Component, OnInit } from '@angular/core';
import { ProjectConfigService } from '../services/projects-config.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  projects = [];
  isProjectsReady = new Subject();

  constructor(private config: ProjectConfigService) { 
    this.projects = this.config.getProjects()['projects'];    
  }

  ngOnInit() {
    this.isProjectsReady.subscribe(
      (data) => {
        this.projects = this.config.getProjects()['projects']; 
        console.log("SidebarComponent: projects = " + JSON.stringify(this.projects, undefined, 2));    
      }
    )
    this.config.loadProjects(this.isProjectsReady);  

  }

}
