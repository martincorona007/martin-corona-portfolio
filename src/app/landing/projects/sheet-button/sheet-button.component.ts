
import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FilterDataProjectInfo, PROJECTSDETAILS } from '../../core/interfaces/data-projects';

@Component({
  selector: 'app-sheet-button',
  templateUrl: './sheet-button.component.html',
  styleUrls: ['./sheet-button.component.scss']
})
export class SheetButtonComponent implements OnInit {
  public arrayOfProjectInfo: FilterDataProjectInfo [] = PROJECTSDETAILS;
  public imgProject: string = '';
  public nameProject: string = '';
  public longInfo: string = '';
  public techUsed: string = '';
  public isGithubActive ? : number = 0;
  public linkGithub ? : string = '';
  public isYoutubeActive ? : number = 0;
  public linkYoutube ? : string = '';
  public isWebSiteActive ? : number = 0;
  public linkWebSite ? : string = '';
  
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomsheet: MatBottomSheetRef<SheetButtonComponent>,
  ) { }

  ngOnInit(): void {
   // console.log("MY DTT ",this.data.id)
   
    //console.log(">>>>> ",this.arrayOfProjectInfo[this.data.id].ID_numberInfo)
    
    for(let i = 0; i < this.arrayOfProjectInfo.length; i++){
    
      if(this.arrayOfProjectInfo[i].ID_numberInfo == this.data.id){
        ///console.log(">> Y",this.arrayOfProjectInfo[i].ID_numberInfo);
        //console.log(">> Y",this.arrayOfProjectInfo[i].imgProject);
        this.nameProject = this.arrayOfProjectInfo[i].nameProject;
        this.imgProject = this.arrayOfProjectInfo[i].imgProject;
        this.longInfo = this.arrayOfProjectInfo[i].longInfo;
        this.techUsed = this.arrayOfProjectInfo[i].techUsed;
        this.isGithubActive = this.arrayOfProjectInfo[i].isGithubActive;
        this.linkGithub = this.arrayOfProjectInfo[i].linkGithub;
        this.isWebSiteActive = this.arrayOfProjectInfo[i].isWebSiteActive;
        this.linkWebSite = this.arrayOfProjectInfo[i].linkWebSite;
        this.isYoutubeActive = this.arrayOfProjectInfo[i].isYoutubeActive;
        this.linkYoutube = this.arrayOfProjectInfo[i].linkYoutube;
    
        
      }else{
       // console.log(">> N",);
      } 
      
    }
  }
  close() { 
    this.bottomsheet.dismiss();
  }

}
