import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-cta-view',
  standalone: true,
  templateUrl: './cta-view.component.html',
  styleUrl: './cta-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaViewComponent {}
