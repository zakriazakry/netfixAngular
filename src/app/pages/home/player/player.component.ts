import { Component, ViewChild, ElementRef, AfterViewInit, HostListener, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-player',
  standalone: true,
  imports: [NgIf],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  videoUrl: string | null = null;
  title: string | null = null;
  controlsVisible = false;
  controlsTimeout: any;
  watchedPercentage = 0;
  timeLeft = '00:00:00';
  isFullscreen = false;
  router =inject(Router);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
   this.videoUrl = history.state['url'];
      this.title = history.state['title'];
  }

  displayControls() {
    this.controlsVisible = true;
    document.body.style.cursor = 'initial';
    if (this.controlsTimeout) {
      clearTimeout(this.controlsTimeout);
    }
    this.controlsTimeout = setTimeout(() => {
      this.controlsVisible = false;
      // document.body.style.cursor = 'none';
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
    this.videoRef.nativeElement.currentTime -= 10;
  }

  fastForward() {
    this.videoRef.nativeElement.currentTime += 10;
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
    const progressBar = event.target as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const video = this.videoRef.nativeElement;
    video.currentTime = (offsetX / rect.width) * video.duration;
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(Math.floor(seconds / 60)%60);
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
