import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { EChartsCoreOption } from 'echarts/core';
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsOption } from 'echarts/types/dist/shared';

echarts.use([BarChart, GridComponent, CanvasRenderer]);


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], 
  providers: [
    provideEchartsCore({echarts}),
  ]
})

export class DashboardComponent {
  chartOption: EChartsCoreOption = {
    xAxis:{
      type: 'category',
      data: ['Janeiro/2025', 'Fevereiro/2025', 'Março/2025', 'Abril/2025'],
      axisLabel: {
        rotate: 45,
        interval: 0
      }
    },
    yAxis:{
      type: 'value'
    },
    series: [
      {
        name: 'Compras',
        type: 'bar',
        data: [250, 100, 50, 40],
        label:{
          show:true,
          position: 'top'
          
        }
      }
    ]
  }
}