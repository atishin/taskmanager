import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { IOdataModelWrapper } from './IOdataModelWrapper';

export interface IIdentityUserLoginModelKeys {
                
            }


export interface IIdentityUserLoginModel {
    LoginProvider?: string;
    ProviderKey?: string;
    UserId?: string;

}

export interface IIdentityUserLoginModelProperties {
    LoginProvider?: any;
    ProviderKey?: any;
    UserId?: any;
}

export interface IIdentityUserLoginModelNavigationProperties {

}

export interface IIdentityUserLoginModelOdataNavigationProperties {

}

export interface IIdentityUserLoginModelExpandables extends IExpandable {

}

export interface IIdentityUserLoginModelSelectables extends ISelectable {
    LoginProvider?: any;
    ProviderKey?: any;
    UserId?: any;

}

export interface IIdentityUserLoginModelFilterables extends IFilterable<
    IIdentityUserLoginModelProperties & IIdentityUserLoginModelOdataNavigationProperties,
    IIdentityUserLoginModelOdataNavigationProperties,
    IIdentityUserLoginModelFilterables
> {

}

export interface IIdentityUserLoginModelOrderBy extends IOrderByCommand<
    IIdentityUserLoginModelProperties & IIdentityUserLoginModelOdataNavigationProperties,
    IIdentityUserLoginModelOrderBy
> {

}
