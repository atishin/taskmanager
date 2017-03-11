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

export type IProjectTaskModelKeys = string;


export interface IProjectTaskModel {
    Id?: string;
    Title: string;
    Description?: string;
    ProjectId?: string;

    'TaskActions@odata.count'?: number;
}

export interface IProjectTaskModelProperties {
    Id?: any;
    Title?: any;
    Description?: any;
    ProjectId?: any;
}

export interface IProjectTaskModelNavigationProperties {
   Project?: IProjectModel & IProjectModelNavigationProperties;
   TaskActions?: Array<ITaskActionModel & ITaskActionModelNavigationProperties>;
}

export interface IProjectTaskModelOdataNavigationProperties {
   Project?: IProjectModelProperties & IProjectModelOdataNavigationProperties;
   TaskActions?: ITaskActionModelProperties & ITaskActionModelOdataNavigationProperties;
}

export interface IProjectTaskModelExpandables extends IExpandable {
   Project?: IProjectModelExpandables;
   TaskActions?: ITaskActionModelExpandables;
}

export interface IProjectTaskModelSelectables extends ISelectable {
    Id?: any;
    Title?: any;
    Description?: any;
    ProjectId?: any;
    Project?: IProjectModelSelectables;
    TaskActions?: ITaskActionModelSelectables;
}

export interface IProjectTaskModelFilterables extends IFilterable<
    IProjectTaskModelProperties & IProjectTaskModelOdataNavigationProperties,
    IProjectTaskModelOdataNavigationProperties,
    IProjectTaskModelFilterables
> {
    Project?: IProjectModelFilterables;
    TaskActions?: ITaskActionModelFilterables;
}

export interface IProjectTaskModelOrderBy extends IOrderByCommand<
    IProjectTaskModelProperties & IProjectTaskModelOdataNavigationProperties,
    IProjectTaskModelOrderBy
> {
    Project?: IProjectModelOrderBy;
    TaskActions?: ITaskActionModelOrderBy;
}
