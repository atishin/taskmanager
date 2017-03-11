import { Odata, Guid } from 'odata-context';
export { Guid } from 'odata-context';

export namespace ViewModels {
    export interface IProject {
        Id?: Guid;
        Title: string;
        Description?: string;
        AdministratorId: string;
    }
    export interface IProjectONP {
        ProjectManager: IApplicationUser & Partial<IApplicationUserONP>;
        ProjectTasks: IProjectTask & Partial<IProjectTaskONP>;
        TaskStatuses: ITaskStatus & Partial<ITaskStatusONP>;
    }
    export interface IProjectNP {
        ProjectManager: IApplicationUser & Partial<IApplicationUserNP>;
        ProjectTasks: IProjectTask & Partial<Array<IProjectTaskNP>>;
        TaskStatuses: ITaskStatus & Partial<Array<ITaskStatusNP>>;
    }
    export interface IProjectFunctions {}

    export interface IProjectTask {
        Id?: Guid;
        Title: string;
        Description?: string;
        ProjectId: Guid;
    }
    export interface IProjectTaskONP {
        Project: IProject & Partial<IProjectONP>;
        TaskActions: ITaskAction & Partial<Array<ITaskActionONP>>
    }
    export interface IProjectTaskNP {
        Project: IProject & Partial<IProjectNP>;
        TaskActions: ITaskAction & Partial<Array<ITaskActionNP>>
    }
    export interface IProjectTaskFunctions {}

    export interface ITaskStatus {
        Id?: Guid;
        Title: string;
        ProjectId: Guid;
    }
    export interface ITaskStatusONP {
        TaskActions: ITaskAction & Partial<Array<IProjectTaskONP>>;
        Project: IProject & Partial<IProjectONP>
    }
    export interface ITaskStatusNP {
        TaskActions: ITaskAction & Partial<Array<IProjectTaskNP>>;
        Project: IProject & Partial<IProjectNP>
    }
    export interface ITaskStatusFunctions {}

    export interface ITaskAction {
        Id?: Guid;
        Title: string;
        Description?: string;
        ProjectId: Guid;
        TaskStatusId: Guid;
        ExecutorId: string;
    }
    export interface ITaskActionONP {
        TaskStatus: ITaskStatus & Partial<ITaskStatusONP>;
        Executor: IApplicationUser & Partial<IApplicationUserONP>
    }
    export interface ITaskActionNP {
        TaskStatus: ITaskStatus & Partial<ITaskStatusNP>;
        Executor: IApplicationUser & Partial<IApplicationUserNP>
    }
    export interface ITaskActionFunctions {}

    export interface IApplicationUser {}
    export interface IApplicationUserONP {}
    export interface IApplicationUserNP {}
    export interface IApplicationUserFunctions {}


}

export type IOdataSets = {
    Projects: Odata.OdataSet<
        ViewModels.IProject,
        ViewModels.IProjectONP,
        Partial<ViewModels.IProjectNP>,
        Partial<ViewModels.IProjectFunctions>
    >;
    ProjectTasks: Odata.OdataSet<
        ViewModels.IProjectTask,
        ViewModels.IProjectTaskONP,
        Partial<ViewModels.IProjectTaskNP>,
        Partial<ViewModels.IProjectTaskFunctions>
    >;
    TaskActions: Odata.OdataSet<
        ViewModels.ITaskAction,
        ViewModels.ITaskActionONP,
        Partial<ViewModels.ITaskActionNP>,
        Partial<ViewModels.ITaskActionFunctions>
    >;
    TaskStatuses: Odata.OdataSet<
        ViewModels.ITaskStatus,
        ViewModels.ITaskStatusONP,
        Partial<ViewModels.ITaskStatusNP>,
        Partial<ViewModels.ITaskStatusFunctions>
    >;
}

export type IProject = ViewModels.IProject & Partial<ViewModels.IProjectNP> & Partial<ViewModels.IProjectFunctions>;
export type IProjectTask = ViewModels.IProjectTask & Partial<ViewModels.IProjectTaskNP> & Partial<ViewModels.IProjectTaskFunctions>;
export type ITaskAction = ViewModels.ITaskAction & Partial<ViewModels.ITaskActionNP> & Partial<ViewModels.ITaskActionFunctions>;
export type ITaskStatus = ViewModels.ITaskStatus & Partial<ViewModels.ITaskStatusNP> & Partial<ViewModels.ITaskStatusFunctions>;