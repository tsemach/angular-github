import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/merge';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import  * as yaml from 'js-yaml';

@Injectable()
export class GistService {

  projectYaml: string;
  user = 'tsemach';

  private cached = new Map<string, string>();    
  private httpOptions = {
    headers: new HttpHeaders({ 
      //'Access-Control-Allow-Origin': '*',      
      'Authorization': `'token ' + ${environment.token}'`    
    })
  };

  constructor(private http: HttpClient) {
    let isGistReady = new Subject<string>();

    // isGistReady.subscribe(
    //   (data: string) => {
    //     this.readProjectGistYaml(data);
    //   }
    // );
    // this.readProjectGistUrl(isGistReady);
  }

  getProjectYaml() {
    return this.projectYaml;
  }

  readProjectGistUrl(isReady: Subject<string>) {    
    let isGistReady = new Subject<string>();    
    isGistReady.subscribe(      
      (data: string) => {
        let gists = JSON.parse(data);

        gists.forEach(e => {
          let filename = Object.getOwnPropertyNames(e.files)[0];
          if (filename === 'github-viewer-projects.yml') {
            console.log("readProjectGist: filename = " + filename);
            console.log("readProjectGist: url = " + e.files[filename]['raw_url']);
            isReady.next(e.files[filename]['raw_url']);
          }    
        });
      });
    this.getData(isGistReady, `https://api.github.com/users/${this.user}/gists`);
  }

  readProjectGistYaml(url: string) {
    let isGistUrlReady = new Subject<string>();    

    isGistUrlReady.subscribe(
      (data: string) => {
        console.log("YAML = " + data);
        this.projectYaml = data;
        //let projects = JSON.parse(data);
      });
    this.getData(isGistUrlReady, url);
  }

  getData(isReady: Subject<string>, fullurl: string) {
    /**
     * retreive a file from github
     * @param file the relative path of a file in github project
     */    
    console.log("GistService:getData: fullurl = " + fullurl);
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

