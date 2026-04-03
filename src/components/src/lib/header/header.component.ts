import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  socialButtonList: SocialButton[] = [
    {
      id: 1,
      image: 'assets/icon/social/instagram.svg',
      url: 'https://www.instagram.com/recplay.studio',
      detail: '@recplay.studio',
    },
    {
      id: 2,
      image: 'assets/icon/social/whatsapp.svg',
      url: 'https://wa.me/5500000000000',
      detail: 'Entre em contato',
    },
  ];
}

export interface SocialButton {
  id: number;
  image: string;
  url: string;
  detail: string;
}
