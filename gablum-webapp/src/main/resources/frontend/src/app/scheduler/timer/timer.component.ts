import { Component, OnInit, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable, interval, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {

  // @Input()
  startAt = 0; /** the time period of the auction/ registeration is defined here */

  // @Output()
  counterState = new EventEmitter();
  timeRemaining = '';
  currentSubscription: Subscription;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.startAt = 86400000;
    this.start();
  }
    public start() {
    this.timeRemaining = this.formatValue(this.startAt);
    this.changeDetector.detectChanges();
    const t: Observable<number> = interval(1000);
    this.currentSubscription = t.pipe(take(this.startAt) , map(v => this.startAt - v)).subscribe(v => {
    this.timeRemaining = this.formatValue(v);
    this.changeDetector.detectChanges();
  }, err => {
    this.counterState.emit('something is up');
  }, () => {
    this.timeRemaining = '00:00:00:00';
    this.counterState.emit('Time is UP');
    this.changeDetector.detectChanges();
  });
  }
  public stop() {
    this.currentSubscription.unsubscribe();
    this.counterState.emit('ABORTED');
  }

  private day(t: number) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }
  private hour(t: number) {
   return Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ;
  }
  private minute(t: number) {
    return Math.floor(((t % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60)) ;
  }
  private second(t: number) {
    return Math.floor(((t % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60) / (1000)) ;
  }


  private formatValue(timePeriod: number) {
    const days = this.day(timePeriod);
    const hours = this.hour(timePeriod);
    const minutes = this.minute(timePeriod);
    const seconds = this.second(timePeriod);
    return `${days}: ${hours} : ${minutes} : ${seconds}` ;
  }

}
