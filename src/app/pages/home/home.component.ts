import { Component, OnInit } from '@angular/core';
import { faPenAlt, faCode, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import *  as  data from '../../../assets/datos.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'NCR'
  icons = {
    pencil: faPenAlt,
    code: faCode,
    card: faAddressCard
  };
  latest: any = (data as any).default;
  
  constructor() { }

  ngOnInit() {
  }

}
