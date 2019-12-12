// import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Time } from '@angular/common';
import { Auction } from './auction';
import { Bid } from './bid';

export interface ContractDetail {
    _id: string;
    contractId: string;
    auctionId: string;
    bidId: string;
    auctionDetails: Auction;
    BidDetails: any;
    buyerEmail: string;
    buyerESign: string;
    sellerESign: string;
    sellerEmail: string;
    contractStatus: boolean;
    currentHash: string;
    previousHash: string;
    createdOn: Date;
}
