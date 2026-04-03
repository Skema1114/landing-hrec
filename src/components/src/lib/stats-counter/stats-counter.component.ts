import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-stats-counter',
  standalone: true,
  templateUrl: './stats-counter.component.html',
  styleUrl: './stats-counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsCounterComponent {
  stats: Stat[] = [
    { number: '+120', label: 'Vídeos entregues' },
    { number: '+45', label: 'Marcas atendidas' },
    { number: '98%', label: 'Clientes satisfeitos' },
    { number: '3x', label: 'Mais engajamento médio' },
  ];
}

export interface Stat {
  number: string;
  label: string;
}
