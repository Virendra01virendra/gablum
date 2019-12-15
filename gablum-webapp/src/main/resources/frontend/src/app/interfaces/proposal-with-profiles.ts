import {Proposal} from './proposal';
import {Profile} from './profile';

export interface ProposalWithProfiles {
    proposal: Proposal;
    profileList: Profile[];
}
