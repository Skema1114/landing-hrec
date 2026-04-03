import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ClientsCarouselComponent,
  ContainersComponent,
  CtaViewComponent,
  FooterComponent,
  HeaderComponent,
  ProcessStepsComponent,
  ReviewsComponent,
  StatsCounterComponent,
  TagWordsComponent,
  VideoFrameComponent,
} from '@landing-recplay/components';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    ClientsCarouselComponent,
    VideoFrameComponent,
    ContainersComponent,
    ProcessStepsComponent,
    TagWordsComponent,
    StatsCounterComponent,
    ReviewsComponent,
    FooterComponent,
    CtaViewComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
