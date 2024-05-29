import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-fantastic-ng',
  standalone: true,
  imports: [],
  templateUrl: './fantastic-ng.component.html',
  styleUrl: './fantastic-ng.component.css',
})
export class FantasticNgComponent {
  @Input() public title!: string;
  @Input() public primaryCtaText!: string;
  @Input() public secondaryCtaText!: string;
}
