import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  typeOfCategory: Array<any> = [];
  @Input() categories: any = {}
  @Output() selectedCategory: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    //if (Object.keys(this.categories).length)
    this.typeOfCategory = Object.keys(this.categories);
    this.typeOfCategory.unshift('All');
    console.log(' oninot => ', this.categories);
  }

  selectCategory(item) {
    this.selectedCategory.emit(item);
  }

}
