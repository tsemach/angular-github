import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

// import  * as yaml from 'js-yaml';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  direction: 'vertical';

  // projects = `
  // projects:
  // - name: angualr-services
  //   user: tsemach
  // - name: angular-github
  //   user: tsemach  
  // `;
  constructor(private titleService: Title, private router: Router) {
    titleService.setTitle('Tsemach');

    // const projects = yaml.load(this.projects);
    //console.log("projects = " + JSON.stringify(projects, undefined, 2));
    //this.projectsService.getProjects();
  }

}
