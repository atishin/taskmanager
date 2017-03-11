import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { IOdataModelWrapper } from './IOdataModelWrapper';

export interface IIdentityUserRoleModelKeys {
                
            }


export interface IIdentityUserRoleModel {
    UserId?: string;
    RoleId?: string;

}

export interface IIdentityUserRoleModelProperties {
    UserId?: any;
    RoleId?: any;
}

export interface IIdentityUserRoleModelNavigationProperties {

}

export interface IIdentityUserRoleModelOdataNavigationProperties {

}

export interface IIdentityUserRoleModelExpandables extends IExpandable {

}

export interface IIdentityUserRoleModelSelectables extends ISelectable {
    UserId?: any;
    RoleId?: any;

}

export interface IIdentityUserRoleModelFilterables extends IFilterable<
    IIdentityUserRoleModelProperties & IIdentityUserRoleModelOdataNavigationProperties,
    IIdentityUserRoleModelOdataNavigationProperties,
    IIdentityUserRoleModelFilterables
> {

}

export interface IIdentityUserRoleModelOrderBy extends IOrderByCommand<
    IIdentityUserRoleModelProperties & IIdentityUserRoleModelOdataNavigationProperties,
    IIdentityUserRoleModelOrderBy
> {

}
