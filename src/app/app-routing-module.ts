import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TypeScriptComponent } from './typescript/typescript.component';
import { AngularComponent } from './angular/angular.component';
import { AngularProjectComponent } from './angular/project/project.component';
import { AngularViewerComponent } from "./angular/viewer/viewer.component";
import { AngularObserverTutorialComponent } from './angular/observer-tutorial/observer-tutorial.component';
import { AwsComponent } from './aws/aws.component';
import { AwsViewerComponent } from './aws/viewer/viewer.component';
import { ProjectComponent } from './project/project.component';
import { ProjectViewerComponent } from './project/viewer/viewer.component';

const appRoutes: Routes = [
  {path: 'project/:user/:repo', 'component': ProjectComponent , children: [
    { path: 'viewer/:filename', 'component': ProjectViewerComponent }
  ] },

  {path: 'angular', 'component': AngularComponent},
  {path: 'angular/project/:name', 'component': AngularProjectComponent}, 
    
  {path: 'angular/project/:name', 'component': AngularProjectComponent, children: [
    { path: ':filename', 'component': AngularViewerComponent }
  ] },

  {path: 'angular/observer/tutorial', 'component': AngularObserverTutorialComponent },
  {path: 'typescript', 'component': TypeScriptComponent},
  {path: 'angular', 'component': AngularComponent},
  {path: 'aws', 'component': AwsComponent, children: [
    { path: ':id', 'component': AwsViewerComponent }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}