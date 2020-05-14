import { Component, OnInit } from '@angular/core';
import { faPenAlt, faCode, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import *  as  data from '../assets/datos.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aboutMe';
  icons = {
    pencil: faPenAlt,
    code: faCode,
    card: faAddressCard
  };
  latest: any = (data as any).default;
  
  ngOnInit() { }
}
