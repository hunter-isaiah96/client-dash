import { Component, OnInit } from '@angular/core';
import { faGrin } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  faGrin = faGrin;
  faArrowDown = faArrowDown;

  constructor() {}

  ngOnInit(): void {}
}
