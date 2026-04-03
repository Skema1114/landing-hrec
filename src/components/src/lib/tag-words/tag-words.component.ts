import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-tag-words',
  standalone: true,
  templateUrl: './tag-words.component.html',
  styleUrl: './tag-words.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagWordsComponent {
  tagWordsList: TagWords[] = [
    {
      id: 1,
      link: '',
      title: 'Roteiro estratégico que converte',
      img: 'assets/template/4k.png',
    },
    {
      id: 2,
      link: '',
      title: 'Captação com equipamento cinema',
      img: 'assets/template/production.png',
    },
    {
      id: 3,
      link: '',
      title: 'Entrega otimizada por plataforma',
      img: 'assets/template/price.png',
    },
    {
      id: 4,
      link: '',
      title: 'Resultado mensurável em vendas',
      img: 'assets/template/experience.png',
    },
  ];
}

export interface TagWords {
  id: number;
  link: string;
  title: string;
  img: string;
}
