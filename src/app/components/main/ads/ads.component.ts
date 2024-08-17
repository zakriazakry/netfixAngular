import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [NgFor, DividerComponent],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.scss',
})
export class AdsComponent {
  list = [
    {
      header: 'استمتع بالمشاهدة علي تلفازك',
      paragraph:
        'اربط التطبيق بالشاشة الذكية بميزة المشاركه عن بعد و كروم كاست',
      imgUrl: 'https://zekoflix.ly/images/feature-1.png',
    },
    {
      header: 'قم بتحميل و المشاهدة بدون انترنت',
      paragraph:
        'قم بتحميل الافلام او المسلسلات مباشرة من رابط خارجي و تحميلها علي الجهاز الخاص بك بدون اي مشاكل',
      imgUrl: 'https://zekoflix.ly/images/feature-2.png',
    },
    {
      header: 'شاهد في اي مكان',
      paragraph:"قم بالوصول الي زيكوفليكس من اي هاتف اندرويد او شاشة ذكية",
      imgUrl: 'https://zekoflix.ly/images/feature-3.png',
    },
    {
      header: 'التحكم بالمحتوي',
      paragraph:
        "تحكم بما يمكنك مشاهدته من افلام او مسلسلات او قنوات وما يناسب ثقافتك",
      imgUrl: 'https://zekoflix.ly/images/feature-4.png',
    },
  ];
even: any;
}
