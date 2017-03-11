import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { IOdataModelWrapper } from './IOdataModelWrapper';

export type IIdentityUserClaimModelKeys = number;


export interface IIdentityUserClaimModel {
    Id?: number;
    UserId?: string;
    ClaimType?: string;
    ClaimValue?: string;

}

export interface IIdentityUserClaimModelProperties {
    Id?: any;
    UserId?: any;
    ClaimType?: any;
    ClaimValue?: any;
}

export interface IIdentityUserClaimModelNavigationProperties {

}

export interface IIdentityUserClaimModelOdataNavigationProperties {

}

export interface IIdentityUserClaimModelExpandables extends IExpandable {

}

export interface IIdentityUserClaimModelSelectables extends ISelectable {
    Id?: any;
    UserId?: any;
    ClaimType?: any;
    ClaimValue?: any;

}

export interface IIdentityUserClaimModelFilterables extends IFilterable<
    IIdentityUserClaimModelProperties & IIdentityUserClaimModelOdataNavigationProperties,
    IIdentityUserClaimModelOdataNavigationProperties,
    IIdentityUserClaimModelFilterables
> {

}

export interface IIdentityUserClaimModelOrderBy extends IOrderByCommand<
    IIdentityUserClaimModelProperties & IIdentityUserClaimModelOdataNavigationProperties,
    IIdentityUserClaimModelOrderBy
> {

}
