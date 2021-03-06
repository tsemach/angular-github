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
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectLeftMenuComponent } from './project/left-menu/left-menu.component';
import { DropdownDirective } from './tree-view/dropdown.directive';
import { TypeScriptComponent } from './typescript/typescript.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ReadFileHttpClientService } from './services/read-file.httpclient.service';
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
import { ProjectConfigService } from './services/projects-config.service';
import { MarkdownModule } from 'angular2-markdown';
import { ProjectTopbarNavComponent } from './project/topbar-nav/topbar-nav.component';
import { ProjectDropdownDirective } from './project/left-menu/dropdown.directive';
import { ProjectTopbarComponent } from './project/topbar/topbar.component';

import { ProjectViewerChangeDirective } from './project/viewer/viewer-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProjectViewerComponent,
    ProjectComponent,
    TopbarNavbarBrandComponent,
    SidebarComponent,
    ProjectLeftMenuComponent,
    DropdownDirective,
    TypeScriptComponent,
    TreeViewComponent,
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
    ProjectTopbarNavComponent,   
    ProjectDropdownDirective, 
    ProjectTopbarComponent,
    ProjectViewerChangeDirective,
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
    CodemirrorModule,
    MarkdownModule.forRoot(),
  ],
  providers: [ReadFileHttpClientService, ProjectConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
