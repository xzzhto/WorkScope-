import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  filters = {
    category: 'all',
    region: 'all',
    experience: 'all'
  };

  jobCategoryChartOptions: any;
  salaryChartOptions: any;

  ngOnInit() {
    this.loadCharts();
  }

  loadCharts() {
    this.jobCategoryChartOptions = {
      title: { text: 'Вакансии по категориям' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Разработка ПО', 'Дизайн', 'Анализ данных']
      },
      yAxis: { type: 'value' },
      series: [{
        data: [100, 50, 75],
        type: 'bar'
      }]
    };

    this.salaryChartOptions = {
      title: { text: 'Средняя зарплата по категориям' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Разработка ПО', 'Дизайн', 'Анализ данных']
      },
      yAxis: { type: 'value' },
      series: [{
        data: [120000, 90000, 100000],
        type: 'line'
      }]
    };
  }

  applyFilters() {
    // Логика для применения фильтров и обновления данных графиков
    console.log('Фильтры применены:', this.filters);
    this.loadCharts(); // Здесь вы должны обновить данные графиков на основе выбранных фильтров
  }
}
