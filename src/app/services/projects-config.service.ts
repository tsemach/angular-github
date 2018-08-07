import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProjectRepository } from './project-repository.interface';

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
  
  // // 'Authorization': `'token ' + ${environment.token}'`    
  // private httpOptions = {
  //   headers: new HttpHeaders({ 
  //     //'Access-Control-Allow-Origin': '*',      
  //     'Authorization': 'token 323fc73a52b1d77abe8c6d74377aee19eaa7db8b'    
  //   })
  // };

  constructor() {
    this.projects = yaml.load(this.projectsYaml);
    //console.log("projects = " + JSON.stringify(this.projects, undefined, 2));
    //console.log("token = " + environment.token);    
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

  gerProjects() {
    return this.projects;
  }
}

