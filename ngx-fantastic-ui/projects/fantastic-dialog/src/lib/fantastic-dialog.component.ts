import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-fantastic-dialog',
  standalone: true,
  imports: [],
  templateUrl: './fantastic-dialog.component.html',
  styleUrl: './fantastic-dialog.component.css',
})
export class FantasticDialogComponent {
  @Input() public discardCtaText = '';
  @Input() public continueCtaText = '';

  @ViewChild('rootDialog')
  private dialog!: ElementRef<HTMLDialogElement>;

  public showModal(): void {
    this.dialog.nativeElement.showModal();
  }

  public close(): void {
    this.dialog.nativeElement.close();
  }

  public handleDiscard(): void {
    this.close();
  }

  public handleContinue(): void {
    this.close();
  }
}
