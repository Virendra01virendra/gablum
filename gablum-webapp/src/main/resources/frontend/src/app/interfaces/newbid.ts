import { BidScore } from './bid-score';
import { UserProfile } from './user';

export interface NewBid {
    price: number;
    creditPeriod: number;
    qaqcCertificate: boolean;
    typeOfSupply: boolean;
    timeOfDelivery: number;
}
