export interface User {
    name: string;
    email: string;
    address: string;
    phone: string;
    companyName: string;
    username: string;
    businessLicense: string;
    businessDomain: string;
    businessSubDomain: string;
    userDomainDetails: any;
    hashEncryptionKeyList: any;
    blockchain: any;
    contractIdList: string[];
    proposalIdList: string[];
    auctionIdList: string[];
    bidIdList: string[];
    role: any;
    rating: number;
    active: number;
    isLocked: boolean;
    isExpired: boolean;
    isEnabled: boolean;
    createdOn: Date;
}
