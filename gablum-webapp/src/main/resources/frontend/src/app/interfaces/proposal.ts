type uuid = string;

export interface Proposal {

    proposalId: uuid;
    productId: uuid;
    createdBy: uuid;
    updatedBy: uuid;
    businessDomain: string;
    BusinessSubDomain: string;
    productName: string;
    quantity: number;
    price: number;
    deliveryDate: Date;
    creditPeriod: number;
    qualityCertificate: boolean;
    methodOfSupply: boolean;
    regStartDate: Date;
    regEndDate: Date;
    auctionStartDate: Date;
    auctionEndDate: Date;
    createdOn: Date;
    updatedOn: Date;
    thresholdParticipants: number;
    views: number;
    interested: number;
    interestedUsersEmail: [];
}
