import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-containers',
  standalone: true,
  templateUrl: './containers.component.html',
  styleUrl: './containers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainersComponent {}
