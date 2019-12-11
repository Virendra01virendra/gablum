import { Proposal } from './proposal';

type uuid = string;

export interface Auction {
    auctionId: uuid;
    auctionName: string;
    proposal: Proposal;
    isAuctionActive: boolean;
    participantsVerificationId: string;
    selectedParticipantList: string[];
    bidIdList: string[];
    createdOn: Date;
    updatedOn: Date;
    createdBy: string;
    updatedBy: string;
    auctionStartDate: Date;
    auctionEndDate: Date;
    socketToken?: string;
}
