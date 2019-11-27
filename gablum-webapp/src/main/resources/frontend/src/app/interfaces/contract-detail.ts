// import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Time } from '@angular/common';

export interface ContractDetail {
    contractId: string;
    auctionDetails: any;
    BidDetails: any;
    buyerDetails: any;
    sellerDetails: any;
    createdTimeStamp: any;
    contractStatus: boolean;
    hash: string;
}
