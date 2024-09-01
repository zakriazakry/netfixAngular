import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { AnimatedCounterComponent } from "../../../../../components/admin/counter/counter.component";
@Component({
  selector: 'app-main-user-details',
  standalone: true,
  imports: [NgxEchartsModule, AnimatedCounterComponent],
  templateUrl: './main-user-details.component.html',
  styleUrl: './main-user-details.component.scss'
})

export class MainUserDetailsComponent implements AfterViewInit {
  @ViewChild('myChart', { static: true }) myChart!: ElementRef;
  private chartInstance!: echarts.ECharts;
  @Input({required : true}) data : any;
  option: EChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        progress: {
          show: true
        },
        detail: {
          valueAnimation: true,color:"red",
          formatter: '{value}'
        },
        data: [
          {
            value: 0,
            name: 'MB/s'
          }
        ],color:"red"
      }
    ]
  };

  ngAfterViewInit() {
    this.chartInstance = echarts.init(this.myChart.nativeElement);
    this.chartInstance.setOption(this.option);

    setInterval(() => {
      this.chartInstance.setOption<echarts.EChartsOption>({
        series: [
          {

            name: 'Pressure',
            progress: {
              show: true
            },
            detail: {
              valueAnimation: true,
              formatter: '{value}'
            },
            type: 'gauge',
            data: [
              {
                value: +(Math.random() * 100).toFixed(2),
                name: 'MB/s'
              }
            ]
          }
        ]
      });
    }, 2000);
  }
}
