import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
    templateUrl: './counter-page.component.html',
    changeDetection:ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
    counter = 10;
    counterSignal = signal(10);

    constructor(){}

    increaseByOne(value:number){
        this.counter += value;
        // this.counterSignal.set(this.counterSignal()+value);
        this.counterSignal.update((current) => current + value);
    }
    decreaseByOne(value:number){
        this.counter -= value;
        this.counterSignal.update((current) => current - value);
    }
    resetCounter(){
        this.counter = 0;
        this.counterSignal.set(0);
    }
}