import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoggerService } from 'src/app/services/logger.service';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { CommunicatorService } from 'src/app/services/communicator.service';

@Component({
  selector: 'app-add-bid-sheet',
  templateUrl: './add-bid-sheet.component.html',
  styleUrls: ['./add-bid-sheet.component.css']
})
export class AddBidSheetComponent implements OnInit {
  public static messageKey = 'AddBidSheetComponent';
  bidForm: FormGroup;
  private auctionId: string;


  constructor(
    private logger: LoggerService,
    private auctionDataService: AuctionsDataService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private sheetRef: MatBottomSheetRef,
    private comms: CommunicatorService
  ) {
    this.auctionId = data.id;
    this.logger.log(data.id);
    this.comms.getMessages().subscribe(message => {
      if (message.dest === AddBidSheetComponent.messageKey) {
        const commData = message.data;
        if ('saveBids' in commData) {
          this.sheetRef.dismiss();
        }
      }
    });
  }

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
    this.logger.log('making api call', bid1);
    this.auctionDataService.saveBid(AddBidSheetComponent.messageKey, bid1, 'saveBids', this.auctionId);
  }

}
