import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AsyncPipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [AsyncPipe, MatMenuModule, MatButtonModule]
})
export class MenuComponent {
  constructor(private menuService: MenuService) {}
  
  get menuItems$() {
    return this.menuService.menuItems$;
  }

  toggleMenuItem(item: string) {
    this.menuItems$.subscribe(currentItems => {
      this.menuService.updateMenuItems({
        item1Enabled: item === 'item1' ? !currentItems.item1Enabled : currentItems.item1Enabled,
        item2Enabled: item === 'item2' ? !currentItems.item2Enabled : currentItems.item2Enabled,
      });
    });
  }
}
