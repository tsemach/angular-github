import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { AngularSplitModule } from 'angular-split';
import { CodemirrorModule } from 'ng2-codemirror';

import { AppComponent } from './app.component';
import { ProjectViewerComponent } from './project/viewer/viewer.component';
import { AppRoutingModule } from './app-routing-module';
import { ProjectComponent } from './project/project.component';
import { TopbarNavbarBrandComponent } from './project/topbar-navbar-brand/topbar-navbar-brand.component';
import { TopbarNavComponent } from './project/topbar-nav/topbar-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectLeftMenuComponent } from './project/left-menu/left-menu.component';
import { DropdownDirective } from './tree-view/dropdown.directive';
import { TypeScriptComponent } from './typescript/typescript.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ReadFileHttpClientService } from './services/read-file.httpclient.service';
import { ViewerChangeDirective } from './project/viewer/viewer-change.directive';
import { ProjectDescriptionComponent } from './project/description/description.component';
import { ProjectOutputComponent } from './project/output/output.component';
import { AngularComponent } from './angular/angular.component';
import { AngularProjectComponent } from './angular/project/project.component';
import { AngularFileMenuComponent } from './angular/file-menu/file-menu.component';
import { AngularViewerComponent } from './angular/viewer/viewer.component';
import { AngularObserverTutorialComponent } from './angular/observer-tutorial/observer-tutorial.component';
import { AngularObserverTutorialHeaderComponent } from './angular/observer-tutorial/observer-tutorial-header/observer-tutorial-header.component';
import { AngularObserverTutorialFirstComponent } from './angular/observer-tutorial/observer-tutorial-first/observer-tutorial-first.component';
import { AngularObserverTutorialSecondComponent } from './angular/observer-tutorial/observer-tutorial-second/observer-tutorial-second.component';
import { AwsComponent } from './aws/aws.component';
import { AwsFileMenuComponent } from './aws/file-menu/file-menu.component';
import { AwsViewerComponent } from './aws/viewer/viewer.component';
import { AwsNgxGistComponent } from './aws/ngx-gist/ngx-gist.component';
import { AwsDescriptionComponent } from './aws/description/description.component';
import { ProjectService } from './services/projects.service';
import { ProjectConfigService } from './services/projects-config.service';
import { GistService } from './services/gist.service';

import { PythonViewerComponent } from './python/viewer/viewer.component';
import { PythonComponent } from './python/python.component';
import { PythonLeftMenuComponent } from './python/left-menu/left-menu.component';
import { PythonDescriptionComponent } from './python/description/description.component';
import { PythonOutputComponent } from './python/output/output.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectViewerComponent,
    ProjectComponent,
    TopbarNavbarBrandComponent,
    TopbarNavComponent,
    SidebarComponent,
    ProjectLeftMenuComponent,
    DropdownDirective,
    TypeScriptComponent,
    TreeViewComponent,
    ViewerChangeDirective,
    ProjectDescriptionComponent,
    ProjectOutputComponent,
    AngularComponent,
    AngularProjectComponent,
    AngularFileMenuComponent,
    AngularViewerComponent,
    AngularObserverTutorialComponent,
    AngularObserverTutorialHeaderComponent,
    AngularObserverTutorialFirstComponent,
    AngularObserverTutorialSecondComponent,
    AwsComponent,
    AwsFileMenuComponent,
    AwsViewerComponent,
    AwsNgxGistComponent,
    AwsDescriptionComponent,
    PythonViewerComponent,
    PythonComponent,
    PythonLeftMenuComponent,
    PythonDescriptionComponent,
    PythonOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    SortableModule.forRoot(),
    AngularSplitModule,
    HttpClientModule,
    CodemirrorModule
  ],
  providers: [ReadFileHttpClientService, ProjectService, GistService, ProjectConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
