import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isMenuSmall:boolean = true;
  sideBarOpen: boolean = false;

  @HostListener('click', ['$event.target.id'])onClick(id: any) {
    if (id == "collapseBtn") {
       document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
       this.sideBarOpen = true;
    } else {
     if (this.sideBarOpen) {
        document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
     }
    }
  }

  toggleSideBar() {
  }

  constructor() { }

  ngOnInit() {
  }

}
