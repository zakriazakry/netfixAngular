import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { AnimatedCounterComponent } from "../../../../../components/admin/counter/counter.component";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main-user-details',
  standalone: true,
  imports: [NgxEchartsModule, AnimatedCounterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './main-user-details.component.html',
  styleUrl: './main-user-details.component.scss'
})

export class MainUserDetailsComponent implements AfterViewInit {
  @ViewChild('myChart', { static: true }) myChart!: ElementRef;
  private chartInstance!: echarts.ECharts;
  @Input({ required: true }) data: any;
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
          valueAnimation: true, color: "red",
          formatter: '{value}'
        },
        data: [
          {
            value: 0,
            name: 'MB/s'
          }
        ], color: "red"
      }
    ]
  };
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^(092|091|094)\d{7}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
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
    // forms
    // this.form = new FormGroup();
  }
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
