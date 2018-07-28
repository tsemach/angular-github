import 'codemirror/mode/python/python'; 
import { CodeMirror } from 'codemirror';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { ProjectService } from '../../services/projects.service';
import { ProjectCodeParser } from './project-code-parser';

/**
 * checkout https://stackoverflow.com/questions/36467020/codemirror-as-angular2-component
 */

@Component({
  selector: 'app-project-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ProjectViewerComponent implements OnInit {
  code: string = '';
  description = '';
  output = '';
  from = '';
  parser = new ProjectCodeParser();

  filename: string;
  config={
    mode: "python",
    lineNumbers: true,
    theme: "eclipse",
    tabSize: 2,  
    readOnly: true
  };

  editor:CodeMirror.Editor;

  isFileReady = new Subject<string>();

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {     
  }

  ngOnInit() {
    this.filename = this.route.snapshot.params['filename'];
    
    this.route.params.subscribe(
      (params: Params) => {
        console.log("ProjectViewerComponent: file = " + params['filename']);
        this.filename = params['filename'];        
        this.getFile(this.filename);
      }
    )
  }
  
  getFile(path) {
    //this.readFileService.setProject('pyexamples');
  
    this.isFileReady.subscribe(
      (data: string) => {        
        this.code = this.parser.parse(data);
        this.description = this.parser.description;
        this.output = this.parser.output;
        this.from = this.parser.from;
      }
    );
    this.projectService.getFile(path, this.isFileReady);
  }

}
