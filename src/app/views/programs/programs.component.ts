import { Component, OnInit } from '@angular/core';
import { ProgramDataGeneral } from 'src/app/class/program-data-general';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  programs: Array<ProgramDataGeneral>;
  constructor(nss: NotesServiceService) {
    this.programs = nss.getPrograms();
  }
  ngOnInit(): void {

  }

}
