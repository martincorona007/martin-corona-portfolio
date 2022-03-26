import { FilterDataProjectInfo, FilterDataProjects, PROJECTS, PROJECTSDETAILS } from './../core/interfaces/data-projects';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SheetButtonComponent } from './sheet-button/sheet-button.component';
import { IdataTransfer } from '../core/interfaces/IdataTransfer';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  
 public arrayOfProjects: FilterDataProjects [] = PROJECTS;
  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }
  openBtnSheet(id_P: number){
    const template: IdataTransfer = {
      data: {id: id_P},
      panelClass: 'size-bottom-sheet'
    }
    this._bottomSheet.open(SheetButtonComponent,template);
  }
}
