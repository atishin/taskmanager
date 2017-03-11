import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent, RegisterDialogComponent } from './auth/index';
import { MdDialog } from '@angular/material';
import { OdataService } from './services/OdataService';
import { AuthService } from './auth/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private isAuthentificated = false;

  public constructor(private dialog: MdDialog, private odata: OdataService, private auth: AuthService) {}

  public async ngOnInit() {
    this.isAuthentificated = await this.auth.isAuthentificated();
    this.auth.onAuthentificationChanged.subscribe(result => {
      this.isAuthentificated = result;
    })
  }

  private signIn() {
    const dialogRef = this.dialog.open(LoginDialogComponent);
    const res = dialogRef.afterClosed().toPromise();
  }

  private signUp() {
    const dialogRef = this.dialog.open(RegisterDialogComponent);
  }

  private signOut() {
    this.auth.signOut();
  }
}
