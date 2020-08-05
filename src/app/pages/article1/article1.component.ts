import { Component, OnInit } from '@angular/core';
import {
  faBookmark,
  faPen,
  faHeart,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { LoremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-article1',
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.scss'],
})
export class Article1Component implements OnInit {
  faBookmark = faBookmark;
  faPen = faPen;
  faHeart = faHeart;
  faCommentAlt = faCommentAlt;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  lorem: LoremIpsum;

  constructor() {}

  ngOnInit(): void {
    this.lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 3,
        min: 3,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });
  }
}
