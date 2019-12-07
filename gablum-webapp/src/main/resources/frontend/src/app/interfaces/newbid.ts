// import { BidScore } from './bid-score';
// import { UserProfile } from './user';

// export interface NewBid {
//     price: number;
//     seller: UserProfile;
//     unitPrice: number;
//     rank: number;
//     scores: BidScore[];
//     totalScore: number;
//     estimatedDispatchDate: Date;
//     creditPeriodInDays: number;
//     certifications: string[];
// }

import { BidScore } from './bid-score';
import { UserProfile } from './user';

export interface NewBid {
    bidId: string;
    auctionId: string;
    bid: {
        price: number;
        creditPeriod: number;
        qaqcCertificate: boolean;
        typeOfSupply: boolean;
        timeOfdelivery: Date;
        score: number;
        };
    score: number;
    createdBy: string;
}
