import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
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
export class VideoFrameComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);
  private overlayTimeout: ReturnType<typeof setTimeout> | null = null;
  showOverlay = false;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.overlayTimeout = setTimeout(() => {
        this.showOverlay = true;
        this.cdr.markForCheck();
      }, 6000);
    }
  }

  ngOnDestroy(): void {
    if (this.overlayTimeout) {
      clearTimeout(this.overlayTimeout);
    }
  }
}
