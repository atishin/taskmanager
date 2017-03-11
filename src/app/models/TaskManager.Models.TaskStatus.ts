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

import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { IOdataModelWrapper } from './IOdataModelWrapper';

export type ITaskStatusModelKeys = string;


export interface ITaskStatusModel {
    Id?: string;
    Title: string;
    ProjectId?: string;

    'TaskActions@odata.count'?: number;
}

export interface ITaskStatusModelProperties {
    Id?: any;
    Title?: any;
    ProjectId?: any;
}

export interface ITaskStatusModelNavigationProperties {
   Project?: IProjectModel & IProjectModelNavigationProperties;
   TaskActions?: Array<ITaskActionModel & ITaskActionModelNavigationProperties>;
}

export interface ITaskStatusModelOdataNavigationProperties {
   Project?: IProjectModelProperties & IProjectModelOdataNavigationProperties;
   TaskActions?: ITaskActionModelProperties & ITaskActionModelOdataNavigationProperties;
}

export interface ITaskStatusModelExpandables extends IExpandable {
   Project?: IProjectModelExpandables;
   TaskActions?: ITaskActionModelExpandables;
}

export interface ITaskStatusModelSelectables extends ISelectable {
    Id?: any;
    Title?: any;
    ProjectId?: any;
    Project?: IProjectModelSelectables;
    TaskActions?: ITaskActionModelSelectables;
}

export interface ITaskStatusModelFilterables extends IFilterable<
    ITaskStatusModelProperties & ITaskStatusModelOdataNavigationProperties,
    ITaskStatusModelOdataNavigationProperties,
    ITaskStatusModelFilterables
> {
    Project?: IProjectModelFilterables;
    TaskActions?: ITaskActionModelFilterables;
}

export interface ITaskStatusModelOrderBy extends IOrderByCommand<
    ITaskStatusModelProperties & ITaskStatusModelOdataNavigationProperties,
    ITaskStatusModelOrderBy
> {
    Project?: IProjectModelOrderBy;
    TaskActions?: ITaskActionModelOrderBy;
}
