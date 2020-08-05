import { Component, OnInit } from '@angular/core';
import { faPen, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  faPen = faPen;
  faSearch = faSearch;
  faBell = faBell;

  constructor() {}

  ngOnInit(): void {}
}
