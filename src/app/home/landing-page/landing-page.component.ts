import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var anime: any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Wrap every letter in a span
    let textWrapper = document.querySelector('.c2');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter' style='display:inline-block;'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: '.c2 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: (el, i) => 500 + 30 * i,
      })
      // .add({
      //   targets: '.c2 .letter',
      //   translateX: [0, -30],
      //   opacity: [1, 0],
      //   easing: 'easeInExpo',
      //   duration: 1100,
      //   delay: (el, i) => 100 + 30 * i,
      // });
  }

  onClickScrollDown(id: string) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }

  onClickOpenCVWindow() {
    window.open('https://firebasestorage.googleapis.com/v0/b/marnuscoetzee-portofolio.appspot.com/o/MarnusCoetzeeCV.pdf?alt=media&token=607a7479-2d81-4ef3-a2af-2a520a1ea100');
  }

}
