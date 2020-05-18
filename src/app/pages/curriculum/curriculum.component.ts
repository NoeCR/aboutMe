import { Component, OnInit } from '@angular/core';
import { faRss } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  icons = {
    rss: faRss
  }
  constructor() { }

  ngOnInit() {
  }

}
