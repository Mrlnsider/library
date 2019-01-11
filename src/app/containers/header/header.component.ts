import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'logo';
  public logoUrl = 'https://webstockreview.net/images/geology-clipart-bio-lab-10.gif';

  constructor() { }

  ngOnInit() {
  }

}
