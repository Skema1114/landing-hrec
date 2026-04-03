import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'lib-video-frame',
  standalone: true,
  templateUrl: './video-frame.component.html',
  styleUrl: './video-frame.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoFrameComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);
  showOverlay = false;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.showOverlay = true;
        this.cdr.markForCheck();
      }, 6000);
    }
  }
}
