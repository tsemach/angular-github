import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProjectRepository } from './project-repository.interface';
import { ReadFileHttpClientService } from './read-file.httpclient.service';
import { Subject } from 'rxjs/Subject';

import  * as yaml from 'js-yaml';
import * as marked from 'marked';

@Injectable()
export class ProjectConfigService {  

  /**
   * load: list | direct | gist
   *   list: use project.list file in the repository same as pyexamples.
   *   direct: load direct using gitHub api
   *   gist: load from gist
   */
  projectsYaml = `
    projects:
    - repo: docker
      user: tsemach
      load: direct
    - repo: angular-http-client
      user: tsemach
      load: list
    - repo: angular-observers
      user: tsemach
      load: list
    - repo: typescript-txjs
      user: tsemach
      load: list
    - repo: javascript-rxjs
      user: tsemach
      load: list
    - repo: angular-rabbitmq
      user: tsemach
      load: list  
    - repo: angular-github
      user: tsemach
      load: list  
    - repo: angular-skeleton
      user: tsemach
      load: list  
    - repo: pyexamples
      user: tsemach  
      load: list
  `;

  current = new ProjectRepository();    
  projects = {};  
  fileIsReady = new Subject<string>();

  constructor(private readFileService: ReadFileHttpClientService) {

    // set default projects as defined here
    this.projects = yaml.load(this.projectsYaml);

    // try loading 'projects.yml' from github
    // this.readFileService.setProject(environment.config.repository, environment.user);
    // this.getFile('projects.yml');
  }

  setUser(user: string) {
    this.current.user = user;
    this.current.path = '';
    this.current.base = `https://api.github.com/repos/${this.current.user}/${this.current.repo}/contents`;
  }

  setRepo(repo: string) {
    this.current.repo = repo;
    this.current.path = '';
    this.current.base = `https://api.github.com/repos/${this.current.user}/${this.current.repo}/contents`;    
  }

  setCurrent(current: ProjectRepository) {
    this.current = current;
    this.current.path = '';
    this.current.base = `https://api.github.com/repos/${this.current.user}/${this.current.repo}/contents`;    
  }

  getProjects() {
    return this.projects;
  }

  loadProjects(isProjectsReady) {
    // set default projects as defined here
    this.projects = yaml.load(this.projectsYaml);

    // try loading 'projects.yml' from github
    this.readFileService.setProject(environment.config.repository, environment.user);
    this.getFile('projects.yml', isProjectsReady);
  }

  private getFile(filename, isProjectsReady) {      
    this.fileIsReady.subscribe(
      (data: string) => {                
        console.log("ProjectConfigService: data = " + JSON.stringify(data, undefined, 2));    
        this.projects = yaml.load(data);
        console.log("ProjectConfigService: projects = " + JSON.stringify(this.projects, undefined, 2));    
        isProjectsReady.next(this.projects);
      }
    );
    this.readFileService.getFile(filename, this.fileIsReady);
  }
}

