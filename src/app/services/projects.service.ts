import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import  * as yaml from 'js-yaml';
import * as marked from 'marked';

import { ProjectRepository } from './project-repository.interface';

/**
 * example of https://api.github.com/repos/${user}/${repo}/contents/
   {
    "name": "angular.json",
    "path": "angular.json",
    "sha": "b9c7475f00b9b91ae075421836541730ecd8b1e2",
    "size": 3516,
    "url": "https://api.github.com/repos/tsemach/angular-services/contents/angular.json?ref=master",
    "html_url": "https://github.com/tsemach/angular-services/blob/master/angular.json",
    "git_url": "https://api.github.com/repos/tsemach/angular-services/git/blobs/b9c7475f00b9b91ae075421836541730ecd8b1e2",
    "download_url": "https://raw.githubusercontent.com/tsemach/angular-services/master/angular.json",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/tsemach/angular-services/contents/angular.json?ref=master",
      "git": "https://api.github.com/repos/tsemach/angular-services/git/blobs/b9c7475f00b9b91ae075421836541730ecd8b1e2",
      "html": "https://github.com/tsemach/angular-services/blob/master/angular.json"
    }
  },
 */
@Injectable()
export class ProjectService {
  // <start: projects-yaml>
  projectsYaml = `
    projects:
    - repo: docker
      user: tsemach
    - repo: angular-github
      user: tsemach
    - repo: pyexamples
      user: tsemach  
    - repo: angular-rabbitmq
      user: tsemach
    - repo: angular-routing
      user: tsemach    
    `;
  // <end: projects-yaml>  
  
  projects = {};  
  current = new ProjectRepository();
  //isProjectReady = new Subject<{filelist: Array<string>, dirlist: Array<string>}>();
  
  private cached = new Map<string, string>();    
  private httpOptions = {
    headers: new HttpHeaders({ 
      //'Access-Control-Allow-Origin': '*',
      'Authorization': 'token 9a9bcacdb9d27ec1a81d3d5db07b8de51b4c4a31'      
    })
  };

  constructor(private http: HttpClient) {
    this.projects = yaml.load(this.projectsYaml);
    console.log("projects = " + JSON.stringify(this.projects, undefined, 2));      
    //marked.setOptions({});  
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
    return this.projects['projects'];
  }

  getProjectList(filelist: Array<string>, dirlist: Array<string>, isProjectReady) {
    let isGitHubReady = new Subject<string>();

    //console.log("ProjectService:getProjectList: fullurl = " + this.current.base + this.current.path);
    //this.current.base = `https://tsemach:Colo16LLT@api.github.com/repos/${this.current.user}/${this.current.repo}/contents`;

     isGitHubReady.subscribe(
      (data: string) => {
        
        let json = JSON.parse(data);
        //console.log("getProjectList: json.id = " + JSON.stringify(json, undefined, 2));

        json.forEach(e => {          
          if (e.type === 'file') {
            //console.log("ProjectSevice:getProjectList: add file path = " + e.path);
            filelist.push(e.path);
          }
          if (e.type === 'dir') {
            dirlist.push(e.path);
            //console.log("ProjectSevice:getProjectList: add dir path = " + e.path);            
          }          
        });

        if (dirlist.length === 0) {
          isProjectReady.next(filelist);
          isGitHubReady.unsubscribe();
          //console.log("ProjectSevice:getProjectList: final filelist = " + JSON.stringify(filelist, undefined, 2));
        }
        else {
          this.current.path = '/' + dirlist.shift();          
          this.getProjectList(filelist, dirlist, isProjectReady);
        }
      }
    );
    this.getData(isGitHubReady, this.current.base + this.current.path);
  }       

  getFile(path, isFileReady) {
    let isGitHubReady = new Subject<string>();

    isGitHubReady.subscribe(
      (data: string) => {
        console.log("data = " + JSON.parse(data)['download_url']);
        this.getCode(isFileReady, JSON.parse(data)['download_url']);            
        isGitHubReady.unsubscribe();
      });
    this.getData(isGitHubReady, this.current.base + path);    
  }

  getCode(isReady: Subject<string>, fullurl: string) {
    /**
     * retreive a file from github
     * @param file the relative path of a file in github project
     */    
    console.log("ProjectService:getData: fullurl = " + fullurl);
    if (this.cached.has(fullurl)) {
      return this.cached.get(fullurl);
    }      

    let file = this.http.get(fullurl, {responseType: 'text'});
    file.subscribe(data => {           
        this.cached[fullurl] = file;

        isReady.next(data);
      },
      (error) => console.log(error)
    );
  }     

  getData(isReady: Subject<string>, fullurl: string) {
    /**
     * retreive a file from github
     * @param file the relative path of a file in github project
     */    
    console.log("ProjectService:getData: fullurl = " + fullurl);
    if (this.cached.has(fullurl)) {
      return this.cached.get(fullurl);
    }      

    let file = this.http.get(fullurl, {responseType: 'text', headers: this.httpOptions.headers});
    file.subscribe(data => {           
        this.cached[fullurl] = file;

        isReady.next(data);
      },
      (error) => console.log(error)
    );
  }     

}

