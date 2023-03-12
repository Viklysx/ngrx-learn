import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { clear, countSelector, decrease, increase, updatedAtSelector } from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$ = this.store.select(countSelector); // подписчик на состояние хранилища
  cannotDecrease$ = this.count$.pipe(
    map(count => count <= 0)
  );
  updatedAt$ = this.store.select(updatedAtSelector)

  constructor (private store: Store) {
    
  }

  get cannotDecrease(): boolean {
    return false ;
  }

  increase():void {
    this.store.dispatch(increase())
  }

  decrease():void {
    this.store.dispatch(decrease())
  }

  clear():void {
    this.store.dispatch(clear())
  }
}
