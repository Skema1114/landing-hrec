import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-reviews',
  standalone: true,
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      title: 'Triplicamos o engajamento no Instagram',
      content:
        'Antes da RecPlay, nossos vídeos eram amadores e não geravam resultado nenhum. Depois da primeira campanha, nosso engajamento no Instagram triplicou em menos de 30 dias.',
      avatar: 'assets/template/no-image.svg',
      author: 'Fernanda Oliveira',
      date: '22/03/2025',
    },
    {
      id: 2,
      rating: 5,
      title: 'Profissionalismo do início ao fim',
      content:
        'Contratamos a RecPlay para o vídeo institucional da nossa startup e o resultado superou todas as expectativas. O roteiro ficou certeiro e entregaram antes do prazo.',
      avatar: 'assets/template/no-image.svg',
      author: 'Ricardo Mendes',
      date: '10/01/2025',
    },
    {
      id: 3,
      rating: 5,
      title: 'ROI real em vídeo para ads',
      content:
        'Investimos em vídeos para nossas campanhas de tráfego pago e o custo por lead caiu 40%. A RecPlay não entrega só vídeo bonito — entrega vídeo que dá retorno financeiro.',
      avatar: 'assets/template/no-image.svg',
      author: 'Camila Rezende',
      date: '05/06/2025',
    },
  ];
}

export interface Review {
  id: number;
  rating: number;
  title: string;
  content: string;
  avatar: string;
  author: string;
  date: string;
}
