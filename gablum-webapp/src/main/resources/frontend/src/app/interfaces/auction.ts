type uuid = string;

export interface Auction {
    auctionId: uuid;
    proposalId: uuid;

    auctionStatus: boolean;

    participantsVerificationId: uuid;
    selectedParticipantList: uuid[];
    bidIdList: uuid[];

    createdOn: Date;
    updatedOn: Date;
    createdBy: uuid;
    updatedBy: uuid;

    auctionStartDate: Date;
    auctionEndDate: Date;
}
