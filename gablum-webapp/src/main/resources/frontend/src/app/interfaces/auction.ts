type uuid = string;

export interface Auction {
    auctionId: uuid;
    proposalId: uuid;

    isAuctionActive: boolean;

    participantsVerificationId: uuid;
    selectedParticipantList: string[];
    bidIdList: uuid[];

    createdOn: Date;
    updatedOn: Date;
    createdBy: string;
    updatedBy: string;

    auctionStartDate: Date;
    auctionEndDate: Date;
}
