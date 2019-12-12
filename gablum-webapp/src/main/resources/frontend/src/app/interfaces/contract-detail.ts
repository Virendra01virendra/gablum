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
    buyer: any;
    buyerESign: string;
    sellerESign: string;
    sellerEmail: string;
    seller: any;
    contractStatus: boolean;
    currentHash: string;
    previousHash: string;
    createdOn: Date;
}
