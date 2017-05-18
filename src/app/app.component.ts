import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//import { INCREMENT, DECREMENT, RESET } from './counter';
import { Observable } from 'rxjs/Observable';
import { State } from "./state-management/state/main-state";
import { INCREMENT, DECREMENT, RESET } from "./state-management/actions/main-action-creator";
// interface AppState {
//   counter: number;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
	// template: `
	// 	<button (click)="increment()">Increment</button>
	// 	<div>Current Count: {{ counter | async }}</div>
	// 	<button (click)="decrement()">Decrement</button>

	// 	<button (click)="reset()">Reset Counter</button>
	// `,  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  displayText = '';
	// counter: Observable<number>;

	// constructor(private store: Store<AppState>){
	// 	this.counter = store.select('counter');
	// }

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}  

    constructor (private store:Store<State>) {
      console.log('We have a store! ' + store);
      store.select('mainReducer')
        .subscribe( (data:State )=> {
          this.displayText = 'data is ' + data.counter;
					console.log(this.displayText);
        }); 

      this.store.dispatch({ type: INCREMENT });
  }
}
