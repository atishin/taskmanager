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

import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { IOdataModelWrapper } from './IOdataModelWrapper';

export type ITaskActionModelKeys = string;


export interface ITaskActionModel {
    Id?: string;
    Title: string;
    Description?: string;
    TaskStatusId?: string;
    ProjectTaskId?: string;
    ExecutorId?: string;



}

export interface ITaskActionModelProperties {
    Id?: any;
    Title?: any;
    Description?: any;
    TaskStatusId?: any;
    ProjectTaskId?: any;
    ExecutorId?: any;
}

export interface ITaskActionModelNavigationProperties {
   TaskStatus?: ITaskStatusModel & ITaskStatusModelNavigationProperties;
   ProjectTask?: IProjectTaskModel & IProjectTaskModelNavigationProperties;
   Executor?: IApplicationUserModel & IApplicationUserModelNavigationProperties;
}

export interface ITaskActionModelOdataNavigationProperties {
   TaskStatus?: ITaskStatusModelProperties & ITaskStatusModelOdataNavigationProperties;
   ProjectTask?: IProjectTaskModelProperties & IProjectTaskModelOdataNavigationProperties;
   Executor?: IApplicationUserModelProperties & IApplicationUserModelOdataNavigationProperties;
}

export interface ITaskActionModelExpandables extends IExpandable {
   TaskStatus?: ITaskStatusModelExpandables;
   ProjectTask?: IProjectTaskModelExpandables;
   Executor?: IApplicationUserModelExpandables;
}

export interface ITaskActionModelSelectables extends ISelectable {
    Id?: any;
    Title?: any;
    Description?: any;
    TaskStatusId?: any;
    ProjectTaskId?: any;
    ExecutorId?: any;
    TaskStatus?: ITaskStatusModelSelectables;
    ProjectTask?: IProjectTaskModelSelectables;
    Executor?: IApplicationUserModelSelectables;
}

export interface ITaskActionModelFilterables extends IFilterable<
    ITaskActionModelProperties & ITaskActionModelOdataNavigationProperties,
    ITaskActionModelOdataNavigationProperties,
    ITaskActionModelFilterables
> {
    TaskStatus?: ITaskStatusModelFilterables;
    ProjectTask?: IProjectTaskModelFilterables;
    Executor?: IApplicationUserModelFilterables;
}

export interface ITaskActionModelOrderBy extends IOrderByCommand<
    ITaskActionModelProperties & ITaskActionModelOdataNavigationProperties,
    ITaskActionModelOrderBy
> {
    TaskStatus?: ITaskStatusModelOrderBy;
    ProjectTask?: IProjectTaskModelOrderBy;
    Executor?: IApplicationUserModelOrderBy;
}
