import { 
    IApplicationUserModel, 
	IApplicationUserModelProperties, 
	IApplicationUserModelNavigationProperties, 
	IApplicationUserModelOdataNavigationProperties, 
	IApplicationUserModelExpandables, 
	IApplicationUserModelSelectables, 
	IApplicationUserModelFilterables, 
	IApplicationUserModelOrderBy, 
	IApplicationUserModelKeys 
} from './TaskManager.Models.ApplicationUser';

import { 
    IProjectTaskModel, 
	IProjectTaskModelProperties, 
	IProjectTaskModelNavigationProperties, 
	IProjectTaskModelOdataNavigationProperties, 
	IProjectTaskModelExpandables, 
	IProjectTaskModelSelectables, 
	IProjectTaskModelFilterables, 
	IProjectTaskModelOrderBy, 
	IProjectTaskModelKeys 
} from './TaskManager.Models.ProjectTask';

import { 
    ITaskStatusModel, 
	ITaskStatusModelProperties, 
	ITaskStatusModelNavigationProperties, 
	ITaskStatusModelOdataNavigationProperties, 
	ITaskStatusModelExpandables, 
	ITaskStatusModelSelectables, 
	ITaskStatusModelFilterables, 
	ITaskStatusModelOrderBy, 
	ITaskStatusModelKeys 
} from './TaskManager.Models.TaskStatus';

import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { IOdataModelWrapper } from './IOdataModelWrapper';

export type IProjectModelKeys = string;


export interface IProjectModel {
    Id?: string;
    Title: string;
    Description?: string;
    AdministratorId?: string;

    'ProjectTasks@odata.count'?: number;
    'TaskStatuses@odata.count'?: number;
}

export interface IProjectModelProperties {
    Id?: any;
    Title?: any;
    Description?: any;
    AdministratorId?: any;
}

export interface IProjectModelNavigationProperties {
   ProjectManager?: IApplicationUserModel & IApplicationUserModelNavigationProperties;
   ProjectTasks?: Array<IProjectTaskModel & IProjectTaskModelNavigationProperties>;
   TaskStatuses?: Array<ITaskStatusModel & ITaskStatusModelNavigationProperties>;
}

export interface IProjectModelOdataNavigationProperties {
   ProjectManager?: IApplicationUserModelProperties & IApplicationUserModelOdataNavigationProperties;
   ProjectTasks?: IProjectTaskModelProperties & IProjectTaskModelOdataNavigationProperties;
   TaskStatuses?: ITaskStatusModelProperties & ITaskStatusModelOdataNavigationProperties;
}

export interface IProjectModelExpandables extends IExpandable {
   ProjectManager?: IApplicationUserModelExpandables;
   ProjectTasks?: IProjectTaskModelExpandables;
   TaskStatuses?: ITaskStatusModelExpandables;
}

export interface IProjectModelSelectables extends ISelectable {
    Id?: any;
    Title?: any;
    Description?: any;
    AdministratorId?: any;
    ProjectManager?: IApplicationUserModelSelectables;
    ProjectTasks?: IProjectTaskModelSelectables;
    TaskStatuses?: ITaskStatusModelSelectables;
}

export interface IProjectModelFilterables extends IFilterable<
    IProjectModelProperties & IProjectModelOdataNavigationProperties,
    IProjectModelOdataNavigationProperties,
    IProjectModelFilterables
> {
    ProjectManager?: IApplicationUserModelFilterables;
    ProjectTasks?: IProjectTaskModelFilterables;
    TaskStatuses?: ITaskStatusModelFilterables;
}

export interface IProjectModelOrderBy extends IOrderByCommand<
    IProjectModelProperties & IProjectModelOdataNavigationProperties,
    IProjectModelOrderBy
> {
    ProjectManager?: IApplicationUserModelOrderBy;
    ProjectTasks?: IProjectTaskModelOrderBy;
    TaskStatuses?: ITaskStatusModelOrderBy;
}
