import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() code = '';
  direction = 'horizontal';

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService) {              
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
    
        this.projectService.setUser(params['user']);
        this.projectService.setRepo(params['repo']);        
    });
    
  }    

}

