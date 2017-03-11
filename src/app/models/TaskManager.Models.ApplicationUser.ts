import { 
    IProjectModel, 
	IProjectModelProperties, 
	IProjectModelNavigationProperties, 
	IProjectModelOdataNavigationProperties, 
	IProjectModelExpandables, 
	IProjectModelSelectables, 
	IProjectModelFilterables, 
	IProjectModelOrderBy, 
	IProjectModelKeys 
} from './TaskManager.Models.Project';

import { 
    ITaskActionModel, 
	ITaskActionModelProperties, 
	ITaskActionModelNavigationProperties, 
	ITaskActionModelOdataNavigationProperties, 
	ITaskActionModelExpandables, 
	ITaskActionModelSelectables, 
	ITaskActionModelFilterables, 
	ITaskActionModelOrderBy, 
	ITaskActionModelKeys 
} from './TaskManager.Models.TaskAction';

import { 
    IIdentityUserClaimModel, 
	IIdentityUserClaimModelProperties, 
	IIdentityUserClaimModelNavigationProperties, 
	IIdentityUserClaimModelOdataNavigationProperties, 
	IIdentityUserClaimModelExpandables, 
	IIdentityUserClaimModelSelectables, 
	IIdentityUserClaimModelFilterables, 
	IIdentityUserClaimModelOrderBy, 
	IIdentityUserClaimModelKeys 
} from './Microsoft.AspNet.Identity.EntityFramework.IdentityUserClaim';

import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { IOdataModelWrapper } from './IOdataModelWrapper';

export type IApplicationUserModelKeys = string;


export interface IApplicationUserModel {
    SecurityStamp?: string;
    PasswordHash?: string;
    Email?: string;
    EmailConfirmed: boolean;
    PhoneNumber?: string;
    PhoneNumberConfirmed: boolean;
    TwoFactorEnabled: boolean;
    LockoutEndDateUtc?: string;
    LockoutEnabled: boolean;
    AccessFailedCount: number;
    Roles?: any[];
    Logins?: any[];
    Id?: string;
    UserName?: string;
    'Projects@odata.count'?: number;
    'TaskActions@odata.count'?: number;
    'Claims@odata.count'?: number;
}

export interface IApplicationUserModelProperties {
    SecurityStamp?: any;
    PasswordHash?: any;
    Email?: any;
    EmailConfirmed?: any;
    PhoneNumber?: any;
    PhoneNumberConfirmed?: any;
    TwoFactorEnabled?: any;
    LockoutEndDateUtc?: any;
    LockoutEnabled?: any;
    AccessFailedCount?: any;
    Roles?: any;
    Logins?: any;
    Id?: any;
    UserName?: any;
}

export interface IApplicationUserModelNavigationProperties {
   Projects?: Array<IProjectModel & IProjectModelNavigationProperties>;
   TaskActions?: Array<ITaskActionModel & ITaskActionModelNavigationProperties>;
   Claims?: Array<IIdentityUserClaimModel & IIdentityUserClaimModelNavigationProperties>;
}

export interface IApplicationUserModelOdataNavigationProperties {
   Projects?: IProjectModelProperties & IProjectModelOdataNavigationProperties;
   TaskActions?: ITaskActionModelProperties & ITaskActionModelOdataNavigationProperties;
   Claims?: IIdentityUserClaimModelProperties & IIdentityUserClaimModelOdataNavigationProperties;
}

export interface IApplicationUserModelExpandables extends IExpandable {
   Projects?: IProjectModelExpandables;
   TaskActions?: ITaskActionModelExpandables;
   Claims?: IIdentityUserClaimModelExpandables;
}

export interface IApplicationUserModelSelectables extends ISelectable {
    SecurityStamp?: any;
    PasswordHash?: any;
    Email?: any;
    EmailConfirmed?: any;
    PhoneNumber?: any;
    PhoneNumberConfirmed?: any;
    TwoFactorEnabled?: any;
    LockoutEndDateUtc?: any;
    LockoutEnabled?: any;
    AccessFailedCount?: any;
    Roles?: any;
    Logins?: any;
    Id?: any;
    UserName?: any;
    Projects?: IProjectModelSelectables;
    TaskActions?: ITaskActionModelSelectables;
    Claims?: IIdentityUserClaimModelSelectables;
}

export interface IApplicationUserModelFilterables extends IFilterable<
    IApplicationUserModelProperties & IApplicationUserModelOdataNavigationProperties,
    IApplicationUserModelOdataNavigationProperties,
    IApplicationUserModelFilterables
> {
    Projects?: IProjectModelFilterables;
    TaskActions?: ITaskActionModelFilterables;
    Claims?: IIdentityUserClaimModelFilterables;
}

export interface IApplicationUserModelOrderBy extends IOrderByCommand<
    IApplicationUserModelProperties & IApplicationUserModelOdataNavigationProperties,
    IApplicationUserModelOrderBy
> {
    Projects?: IProjectModelOrderBy;
    TaskActions?: ITaskActionModelOrderBy;
    Claims?: IIdentityUserClaimModelOrderBy;
}
