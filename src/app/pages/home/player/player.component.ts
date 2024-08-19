import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-player',
  standalone: true,
  imports: [NgIf],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
timeRemaining: any;
seek($event: MouseEvent) {
throw new Error('Method not implemented.');
}
onMouseMove() {
throw new Error('Method not implemented.');
}
  @ViewChild('videoElement') videoRef!: ElementRef<HTMLVideoElement>;
  isPlaying = false;
  volume = 1;
  isMuted = false;

  ngAfterViewInit(): void {
    const video = this.videoRef.nativeElement;
    video.volume = this.volume;
  }

  togglePlayPause(): void {
    const video = this.videoRef.nativeElement;
    this.isPlaying ? video.pause() : video.play();
    this.isPlaying = !this.isPlaying;
  }

  toggleMute(): void {
    const video = this.videoRef.nativeElement;
    video.muted = !video.muted;
    this.isMuted = video.muted;
  }

  rewind(): void {
    this.videoRef.nativeElement.currentTime -= 10;
  }

  fastForward(): void {
    this.videoRef.nativeElement.currentTime += 10;
  }

  toggleFullScreen(): void {
    const video = this.videoRef.nativeElement;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }
}
