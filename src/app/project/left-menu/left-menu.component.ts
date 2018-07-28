import { Component, OnInit, ElementRef, Renderer2, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TreeViewComponent } from '../../tree-view/tree-view.component';
import { Directory } from '../../services/directory';
import { ReadFileHttpClientService } from '../../services/read-file.httpclient.service';
import { ParseProjectFiles } from '../../services/parser-filelist';
import { ProjectService } from '../../services/projects.service';
import { ProjectRepository } from '../../services/project-repository.interface';

/**
 * GitHub API:
 * -) getting all content of the root: https://api.github.com/repos/tsemach/angular-monitor/contents/
 * -) getting content of file: https://api.github.com/repos/tsemach/docker/contents/tutorial/rabbitmq/rabbitmq.run
 *    then follow the download_url property.
 */

@Component({
  selector: 'app-project-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class ProjectLeftMenuComponent implements OnInit, OnDestroy {
  // @Input() user: string = '';
  // @Input() repo: string = '';

  directories: Array<Directory>;
  htmlProjectFilelist: string = '';
  source = 'viewer';

  fileIsReady = new Subject<string>();
  isProjectReady = new Subject<Array<string>>();

  constructor(
    private readFileService: ReadFileHttpClientService, 
    private projectService: ProjectService) {
    
    // let fall2014 = new Directory('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);
    // let summer2014 = new Directory('Summer 2014',[],['image10.jpg','image20.jpg','image30.jpg']);
    // let pics = new Directory('Pictures',[summer2014,fall2014],[]);
    // let music = new Directory('Music',[],['song1.mp3','song2.mp3']);
    // this.directories = [pics,music];    

    // let decorators = new Directory('decorators',[],['decorator_01.py','decorator_02.py']);
    // let metaclasses = new Directory('metaclasses',[], ['metaclasses_01.py', 'metaclasses_02.py']);
    // let pyexamples = new Directory('pyexamples',[decorators, metaclasses],['main.py']);
    // this.directories = [pyexamples]; 

    // console.log("directories = " + JSON.stringify(this.directories, undefined, 2));
  }

  ngOnInit() {
    // path is: https://raw.githubusercontent.com/tsemach/pyexamples/master/pyexamples.list
    // this.readFileService.setProject('pyexamples');

    // this.fileIsReady.subscribe(
    //   (data: string) => {
    //     //this.directories = this.parse(data);       
    //   }
    // );
    // this.readFileService.getFile('pyexamples.list', this.fileIsReady);

    //-------------------------------------------------------------------------------------------------------------------
    console.log("LeftMenu: user = " + this.projectService.current.user + ", repo = " + this.projectService.current.repo);
    let filelist = new Array<string>();
    let dirlist = new Array<string>();

    this.isProjectReady.subscribe(
      (data: Array<string>) => {
        let list = '';
        data.forEach((e) => {          
          if (e !== '') { list += e + '\n'; } 
        });

        this.directories = this.parse(list);                
        //console.log('LeftMenu: dirrectories = ' + JSON.stringify(this.directories, undefined, 2));
      }
    )
    this.projectService.getProjectList(filelist, dirlist, this.isProjectReady);
    //console.log("LeftMenu: filelist = " + filelist);
    //-------------------------------------------------------------------------------------------------------------------
  }

  parse(filelist) {    
    let filesArray = filelist.split(/\r?\n/);
    
    let parser = new ParseProjectFiles();

    let basedir = parser.parse(filesArray); 
    
    return [basedir]; 
  }

  ngOnDestroy() {
    this.fileIsReady.unsubscribe();    
    this.isProjectReady.unsubscribe();
  }
  
}

