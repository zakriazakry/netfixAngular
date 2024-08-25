import { Component, ViewChild, ElementRef, AfterViewInit, HostListener, inject, ChangeDetectorRef} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [NgIf],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements AfterViewInit {
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('progressBar') progressBarC!:any;
  videoUrl: string | null = null;
  title: string | null = null;
  controlsVisible = false;
  controlsTimeout: any;
  watchedPercentage = 0;
  timeLeft = '00:00:00';
  isFullscreen = false;
  router = inject(Router);
  elementRef = inject(ElementRef);

  constructor(private route: ActivatedRoute,private cdr: ChangeDetectorRef) {}



  ngOnInit(): void {
    this.videoUrl = history.state['url'];
    this.title = history.state['title'];
  }

  ngAfterViewInit(): void {
    this.videoRef.nativeElement.addEventListener('timeupdate', () => this.updateTime());
    this.cdr.detectChanges();

  }

  displayControls() {
    this.controlsVisible = true;
    document.body.style.cursor = 'initial';
    if (this.controlsTimeout) {
      clearTimeout(this.controlsTimeout);
    }
    this.controlsTimeout = setTimeout(() => {
      this.controlsVisible = false;
    }, 3000);
  }

  playPause() {
    const video = this.videoRef.nativeElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  rewind() {
    const video = this.videoRef.nativeElement;
    video.currentTime = Math.max(video.currentTime - 10, 0);
  }

  fastForward() {
    const video = this.videoRef.nativeElement;
    video.currentTime = Math.min(video.currentTime + 10, video.duration);
  }

  toggleMute() {
    const video = this.videoRef.nativeElement;
    video.muted = !video.muted;
  }

  toggleFullScreen() {
    const videoContainer = this.videoRef.nativeElement.parentElement!;
    if (!this.isFullscreen) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      }
      this.isFullscreen = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      this.isFullscreen = false;
    }
  }

  updateTime() {
    const video = this.videoRef.nativeElement;
    const watched = (video.currentTime / video.duration) * 100;
    this.watchedPercentage = watched;
    const timeLeft = video.duration - video.currentTime;
    this.timeLeft = this.formatTime(timeLeft);
  }

  seek(event: MouseEvent) {
    const element = this.elementRef.nativeElement.querySelector('.progress-bar');
    const width = element ? element.offsetWidth : 0;
    const progressBar = event.target as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const video = this.videoRef.nativeElement;
    console.log(width);
    const newTime = (offsetX / width) * video.duration;
    video.currentTime = newTime;
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;
  }

  pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  @HostListener('document:fullscreenchange', [])
  onFullScreenChange() {
    this.isFullscreen = !!document.fullscreenElement;
  }
}
