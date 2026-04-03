import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-clients-carousel',
  standalone: true,
  templateUrl: './clients-carousel.component.html',
  styleUrl: './clients-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsCarouselComponent {
  private baseClients: Omit<Client, 'id'>[] = [
    { name: 'Café Urbano', image: 'assets/clients/cafe-urbano.svg' },
    { name: 'Bella Moda', image: 'assets/clients/bella-moda.svg' },
    { name: 'TechNova Solutions', image: 'assets/clients/technova.svg' },
    { name: 'Vila Saborosa', image: 'assets/clients/vila-saborosa.svg' },
    { name: 'Iron Fitness', image: 'assets/clients/iron-fitness.svg' },
    { name: 'Pátio Decor', image: 'assets/clients/patio-decor.svg' },
  ];

  clients: Client[] = Array.from({ length: 4 }, (_, i) =>
    this.baseClients.map((c, j) => ({
      ...c,
      id: i * this.baseClients.length + j + 1,
    }))
  ).flat();
}

export interface Client {
  id: number;
  name: string;
  image: string;
}
