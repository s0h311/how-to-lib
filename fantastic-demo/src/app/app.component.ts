import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FantasticDialogComponent } from 'fantastic-dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FantasticDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('fantasticDialog')
  public fantasticDialog!: FantasticDialogComponent;

  public openDialog(): void {
    this.fantasticDialog.showModal();
  }
}
