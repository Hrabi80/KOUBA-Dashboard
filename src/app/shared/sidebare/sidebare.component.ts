import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebare',
  templateUrl: './sidebare.component.html',
  styleUrls: ['./sidebare.component.scss']
})
export class SidebareComponent {
  public isExpanded = true;
  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
  
}
