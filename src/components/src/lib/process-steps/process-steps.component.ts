import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-process-steps',
  standalone: true,
  templateUrl: './process-steps.component.html',
  styleUrl: './process-steps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessStepsComponent {
  steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Briefing estratégico',
      description:
        'Entendemos sua marca, seu público e seus objetivos. Nada de fórmula pronta.',
    },
    {
      number: '02',
      title: 'Roteiro + Planejamento',
      description:
        'Criamos o roteiro, definimos locações, casting e cronograma de produção.',
    },
    {
      number: '03',
      title: 'Captação profissional',
      description:
        'Gravamos com equipamento cinema: câmeras 4K, iluminação profissional e áudio cristalino.',
    },
    {
      number: '04',
      title: 'Edição + Entrega',
      description:
        'Editamos com identidade visual da sua marca e entregamos nos formatos ideais para cada plataforma.',
    },
  ];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
