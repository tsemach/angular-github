import 'codemirror/mode/python/python'; 
import { CodeMirror } from 'codemirror';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';

//import { ProjectService } from '../../services/projects.service';
import { ReadFileHttpClientService } from '../../services/read-file.httpclient.service';
import { ProjectCodeParser } from './project-code-parser';
import { ProjectConfigService } from '../../services/projects-config.service';

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

  fileIsReady = new Subject<string>();

  constructor(private route: ActivatedRoute, 
              private projectConfigService: ProjectConfigService,
              private readFileService: ReadFileHttpClientService) {     
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
  
  getFile(filename) {
    //this.readFileService.setProject('pyexamples');
  
    this.fileIsReady.subscribe(
      (data: string) => {        
        this.code = this.parser.parse(data);
        this.description = this.parser.description;
        this.output = this.parser.output;
        this.from = this.parser.from;
      }
    );
    this.readFileService.getFile(filename, this.fileIsReady);
  }

}
