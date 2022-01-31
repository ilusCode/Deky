import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotesComponent } from './views/notes/notes.component';
import { ProgramsComponent } from './views/programs/programs.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "programs",
  component: ProgramsComponent
},
{
  path: "notes",
  component: NotesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
