import { OdataDbSet } from 'odata-context';

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

export interface IOdataSets {
    TaskStatus: OdataDbSet<ITaskStatusModel, ITaskStatusModelProperties, ITaskStatusModelNavigationProperties, ITaskStatusModelOdataNavigationProperties, ITaskStatusModelExpandables, ITaskStatusModelSelectables, ITaskStatusModelFilterables, ITaskStatusModelOrderBy, ITaskStatusModelKeys>;
    Projects: OdataDbSet<IProjectModel, IProjectModelProperties, IProjectModelNavigationProperties, IProjectModelOdataNavigationProperties, IProjectModelExpandables, IProjectModelSelectables, IProjectModelFilterables, IProjectModelOrderBy, IProjectModelKeys>;
    TaskActions: OdataDbSet<ITaskActionModel, ITaskActionModelProperties, ITaskActionModelNavigationProperties, ITaskActionModelOdataNavigationProperties, ITaskActionModelExpandables, ITaskActionModelSelectables, ITaskActionModelFilterables, ITaskActionModelOrderBy, ITaskActionModelKeys>;
    ProjectTasks: OdataDbSet<IProjectTaskModel, IProjectTaskModelProperties, IProjectTaskModelNavigationProperties, IProjectTaskModelOdataNavigationProperties, IProjectTaskModelExpandables, IProjectTaskModelSelectables, IProjectTaskModelFilterables, IProjectTaskModelOrderBy, IProjectTaskModelKeys>;
}
