import { BLOGS } from './../core/interfaces/data-blogs';
import { Component, OnInit } from '@angular/core';
import { FilterDataBlogs } from '../core/interfaces/data-blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  public arrayOfBlogs: FilterDataBlogs [] = BLOGS;
  dataSource = BLOGS;
  displayedColumns: string[] = ['ID_number', 'name','link'];
  constructor() { }

  ngOnInit(): void {
  }

}
