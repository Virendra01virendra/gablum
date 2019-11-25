import { Component, OnInit, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable, Subscription, timer, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {

  @Input()
  startAt ; /** the time period of the auction/ registeration is defined here */

  @Output()
  counterState = new EventEmitter();
  private startDate = new Date('11/22/2019 10:53:30');
  private endDate = new Date('2019/11/25 10:53:30');
  public currentTime = new Date();
  public days = 0;
  public hours = 0;
  public minutes = 0;
  public seconds = 0;
  public toStartMsg: string;
  public endedMsg: string;
  timerEventTime: number;
  currentSubscription: Subscription;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    // this.startAt = this.currentTime; /** Here we set the timer to Client system time so that the timer can be bound to this value */
    this.timerLogic(this.startDate, this.endDate, this.currentTime);
    this.start();
  }
    public start() {
    const t: Observable<number> = interval(1000);
    this.currentSubscription = t.pipe(map(v => this.timerEventTime - v)).subscribe(v => {
    this.formatValue(v);
    this.changeDetector.detectChanges();
    this.timerEventTime = v;
    this.changeDetector.detectChanges();
  }, err => {
    this.counterState.emit('something is up');
  }, () => {
    this.timerEventTime = 0;
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
    this.days = this.day(timePeriod);
    this.hours = this.hour(timePeriod);
    this.minutes = this.minute(timePeriod);
    this.seconds = this.second(timePeriod);
  }

  public timerLogic(timetoStart: Date, timeToEnd: Date, localTime: Date) {
    if (localTime.getTime() < timetoStart.getTime()) {
      this.toStartMsg = 'The Event is yet to Begin';
    } else if (localTime.getTime() >= timetoStart.getTime() && localTime.getTime() < timeToEnd.getTime() ) {
      this.timerEventTime = timeToEnd.getTime() - localTime.getTime();
      this.formatValue(this.timerEventTime);
    } else if (localTime.getTime() > timeToEnd.getTime()) {
      this.endedMsg = 'Event has ended';
    }
  }

}
