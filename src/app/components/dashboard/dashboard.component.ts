import { Component, OnInit } from '@angular/core';
import { OdataService } from 'services/OdataService';
import { AuthService } from 'auth/index';
import { IProjectModel, IProjectModelNavigationProperties} from 'models/TaskManager.Models.Project';

type IProject = IProjectModel & Partial<IProjectModelNavigationProperties>;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private projects: IProject[] = [];
  constructor(private auth: AuthService, private odata: OdataService) { }

  async ngOnInit() {
    const context = await this.odata.getContext();
    const wrapper = await context.Projects.Get();
    this.projects = wrapper.value;
  }

}
