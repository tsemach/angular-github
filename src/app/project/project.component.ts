import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProjectConfigService } from '../services/projects-config.service';
import { ProjectLeftMenuComponent } from './left-menu/left-menu.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  //@Input() code = '';
  @ViewChild(ProjectLeftMenuComponent) leftMenu: ProjectLeftMenuComponent;

  direction = 'horizontal';

  constructor(private route: ActivatedRoute,
              private projectConfigService: ProjectConfigService) {              
  }

  ngOnInit() {

    // this.projectService.setUser(this.route.params['user']);
    // this.projectService.setRepo(this.route.params['repo']);
    // this.projectService.setUser('tsemach');
    // this.projectService.setRepo('angular-monitor');
    
    this.route.params.subscribe(
      (params: Params) => {
        console.log("ProjectComponent:init: user=" + params['user']);
        console.log("ProjectComponent:init: repo=" + params['repo']);
    
        this.projectConfigService.setUser(params['user']);
        this.projectConfigService.setRepo(params['repo']);        

        this.leftMenu.loadProjectList();
    });
    
  }    

}

