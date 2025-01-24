import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menuItemsSubject = new BehaviorSubject<{ item1Enabled: boolean; item2Enabled: boolean }>({ item1Enabled: false, item2Enabled: false });
  menuItems$ = this.menuItemsSubject.asObservable();

  constructor() {
    // Simulate async data fetching (replace with actual API call)
    setTimeout(() => {
      this.updateMenuItems({ item1Enabled: false, item2Enabled: true }); 
    }, 1000); 
  }

  updateMenuItems(items: { item1Enabled: boolean; item2Enabled: boolean }) {
    this.menuItemsSubject.next(items);
  }
}
