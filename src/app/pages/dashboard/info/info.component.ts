import { AfterViewInit, Component, ElementRef, ViewChild, } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})

export class InfoComponent implements AfterViewInit {
  items = [1, 2, 3, 4];
  lastUsers = [{
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    name: "Zakria zekri",
    email: "ali@gmail.com",
    phone: "0944444442"
  },
  {
    id: 1,
    image: "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg",
    name: "ALi Mohammed",
    email: "ali@gmail.com",
    phone: "0944443442"
  },
  {
    id: 1,
    image: "https://i.pinimg.com/474x/d8/70/20/d87020c70b0bf5eec4918874fa7d0f9f.jpg",
    name: "Ibrahim Elahras",
    email: "Ibrahem@gmail.com",
    phone: "0944444242"
  }, {
    id: 1,
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png",
    name: "Aimen Mohammed",
    email: "ali@gmail.com",
    phone: "0944444442"
  }, {
    id: 1,
    image: "https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg",
    name: "Taha Zekri",
    email: "ali@gmail.com",
    phone: "0944444442"
  },
  ];
  //
  // chart pie
  @ViewChild('myLines', { static: true }) myLinesRef!: ElementRef;
  private chartInstance!: echarts.ECharts;
  private linesInstance!: echarts.ECharts;
  chartOption: EChartsOption = {
    series: [
      {
        type: 'pie',
        radius: [0, '50%'],
        color: ['#c23531',
          '#2f4554',
          '#61a0a8'],
        data: [
          { value: 335, name: 'Direct Visit', },
          { value: 234, name: 'Union Ad' },
          { value: 1548, name: 'Search Engine' }
        ],
      },
    ]
  };
  lineOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'bar',
        data: [23, 24, 18, 25, 27, 28, 25]
      },
      {
        type: 'bar',
        data: [26, 24, 18, 22, 23, 20, 27]
      }
    ], color: ['#c23531',
      '#2f4554',
      '#61a0a8',], textStyle: { color: "red", fontWeight: "bold", fontSize: "15px" }

  };
  ngAfterViewInit() {

    this.linesInstance = echarts.init(this.myLinesRef.nativeElement);
    this.linesInstance.setOption(this.lineOption);

    setInterval(() => {

      this.linesInstance.setOption({
        series: [
          {
            data: this.makeRandomData()
          }
        ],
        color: ['#c23531',
          '#2f4554',
          '#61a0a8',], textStyle: { color: "red", fontWeight: "bold", fontSize: "15px" }
      })
    }, 2000);
  }
  makeRandomData() {
    return [
      { value: Math.random() * 1000, name: 'Users', },
      { value: Math.random() * 1000, name: 'Movies' },
      { value: Math.random() * 1000, name: 'budget' }
    ];
  }
  // chart lines
  // lineOption: EChartsOption = {
  // };

}
