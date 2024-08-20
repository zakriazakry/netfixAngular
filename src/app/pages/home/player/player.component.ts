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
controllerKeyBoard($event: KeyboardEvent) {
  console.log($event.code);
}
  minCurr = 0;
  secCurr = 0;
  minFull = 0;
  secFull = 0;
  isPlaying: boolean = false;

  @ViewChild('videoElement') video!: ElementRef<HTMLVideoElement>;

  goFullscreen(){
    if (this.video) {
      const videoElement = this.video.nativeElement;
      if (!document.fullscreenElement) {
        videoElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  }
  showLog() {
    console.log(this.video.nativeElement.src);
  }
  playVideo() {
    this.video.nativeElement.play();
    this.isPlaying = true;
  }
  pauseVideo() {
    this.video.nativeElement.pause();
    this.isPlaying = false;
  }
  getTime(): String {
    return `${this.minCurr}:${this.secCurr} / ${this.minFull}:${this.secFull}`;
  }
  onTimeUpdate() {
    this.minCurr = Math.floor(this.video.nativeElement.currentTime / 60);
    this.secCurr = Math.floor(this.video.nativeElement.currentTime % 60);
    this.minFull = Math.floor(this.video.nativeElement.duration / 60);
    this.secFull = Math.floor(this.video.nativeElement.duration % 60);
    console.log(`curr : ${this.minCurr}:${this.secCurr.toFixed(2)}`);
    console.log(`full : ${this.minFull.toFixed(2)}:${this.secFull.toFixed(2)}`);
  }
}
