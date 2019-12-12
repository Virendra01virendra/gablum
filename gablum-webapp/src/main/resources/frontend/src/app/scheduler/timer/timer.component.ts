import { Component, OnInit, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable, Subscription, timer, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Proposal } from 'src/app/interfaces/proposal';
import { LoggerService } from 'src/app/services/logger.service';
import { Auction } from 'src/app/interfaces/auction';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input()
  timerDetails; /** the time period of the auction/ registeration is defined here */
  // @Input()
  // timerDetails1: Auction['proposal'];

  @Output()
  counterState = new EventEmitter();
  public auctionStartDate: Date;
  public auctionEndDate: Date;
  public currentTime = new Date();
  public days = 0;
  public hours = 0;
  public minutes = 0;
  public seconds = 0;
  public toStartMsg: string;
  public endedMsg: string;
  public liveMsg: string;
  timerEventTime: number;
  currentSubscription: Subscription;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private logger: LoggerService
    ) { }

  ngOnInit() {
    const timerObject = Object.assign({}, this.timerDetails);
    console.log('time object :::', timerObject);
    this.auctionStartDate = new Date(timerObject.auctionStartDate);
    this.auctionEndDate = new Date(timerObject.auctionEndDate);
    this.timerLogic(this.auctionStartDate, this.auctionEndDate, this.currentTime);
    this.start();
  }
  ngOnDestroy() {
    this.stop();
  }
    public start() {
    const t = timer(0, 1000);
    this.currentSubscription = t.pipe(map(v => (this.timerEventTime - v * 1000))).subscribe(v => {
      this.formatValue(v);
      this.changeDetector.detectChanges();
    }, err => {
      this.counterState.emit('something is up');
    }, () => {
      this.timerEventTime = 0;
      this.counterState.emit('Time is UP');
      this.changeDetector.detectChanges();
    });
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
  public stop() {
    this.currentSubscription.unsubscribe();
    this.counterState.emit('ABORTED');
  }


  private formatValue(timePeriod: number) {
    this.days = this.day(timePeriod);
    this.hours = this.hour(timePeriod);
    this.minutes = this.minute(timePeriod);
    this.seconds = this.second(timePeriod);
  }

  public timerLogic(timetoStart: Date, timeToEnd: Date, localTime: Date) {
    if (localTime.getTime() < timetoStart.getTime()) {
      this.toStartMsg = 'Auction Begins in -->';
      this.timerEventTime = timetoStart.getTime() - localTime.getTime();
    } else if (localTime.getTime() >= timetoStart.getTime() && localTime.getTime() < timeToEnd.getTime() ) {
      this.liveMsg = 'You are now live! Place your bids.';
      this.timerEventTime = timeToEnd.getTime() - localTime.getTime();
      this.formatValue(this.timerEventTime);
    } else if (localTime.getTime() > timeToEnd.getTime()) {
      this.endedMsg = 'Event has ended';
    }
  }


}
