import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-add-bid-sheet',
  templateUrl: './add-bid-sheet.component.html',
  styleUrls: ['./add-bid-sheet.component.css']
})
export class AddBidSheetComponent implements OnInit {
  bidForm: FormGroup;

  constructor(
    private logger: LoggerService
  ) { }

  ngOnInit() {
    this.bidForm = new FormGroup({
      newPrice: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$')]),
      newCreditPeriod: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$')]),
      newQaqcCertificate: new FormControl('false'),
      newTypeOfDelivery: new FormControl('false'),
      newTimeOfDelivery: new FormControl(''),
      });
  }

  onSubmit(form: FormGroup) {
    const bid1 = {
    price: form.value.newPrice,
    creditPeriod: form.value.newCreditPeriod,
    qaqcCertificate: form.value.newQaqcCertificate,
    typeOfSupply: form.value.newTypeOfDelivery,
    timeOfDelivery: form.value.newTimeOfDelivery,
    };

    const bidData = {
      bid: bid1,
      // auctionID: this.auctionId
    };

    this.logger.log('making api call', bid1);

    // this.http.post<Ibid>(this.url, bid, httpOptions).subscribe((response) => {
    //   console.log('response ::', response);
    // });

    // this.ws.sendBid(bid);

    // this.http.post('http://localhost:8080/api/auctions/auctions/' + this.auctionId + '/bid', bid, httpOptions)
    // .subscribe(Response => {console.log(Response); });

    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.data = bidData;
    // dialogConfig.width = '40%';
    // this.matDialog.open(BidSubmissionDialogComponent, dialogConfig);

  }

}
