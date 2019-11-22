import { BidScore } from './bid-score';
import { UserProfile } from './user';

export interface NewBid {
    seller: UserProfile;
    price: number;
    unitPrice: number;
    rank: number;
    scores: BidScore[];
    totalScore: number;
}
