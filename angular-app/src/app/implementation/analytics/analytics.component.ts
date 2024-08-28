// src/app/implementation/analytics/analytics.component.ts
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  filters = {
    language: 'Все',
    region: 'Все',
    experience: 'Все'
  };

  languages = ['Все', 'JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Ruby', 'Go'];
  regions = ['Все', 'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург'];
  experiences = ['Все', '1-3 года', '3-5 лет', '5-10 лет', '10+ лет'];

  showMoreCharts = false;

  averageSalaryChartOptions: EChartsOption = {
    title: { text: 'Средняя зарплата по языкам программирования' },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['JavaScript', 'Python', 'Java', 'C#', 'PHP']
    },
    yAxis: { type: 'value' },
    series: [{
      data: [120000, 110000, 115000, 105000, 95000],
      type: 'bar',
      itemStyle: { color: '#007bff' }
    }]
  };

  vacancyCountChartOptions: EChartsOption = {
    title: { text: 'Количество вакансий по месяцам' },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
    },
    yAxis: { type: 'value' },
    series: [{
      data: [200, 220, 250, 300, 270, 290, 320, 310, 280, 300, 270, 250],
      type: 'line',
      itemStyle: { color: '#28a745' }
    }]
  };

  responseRateChartOptions: EChartsOption = {
    title: { text: 'Среднее количество откликов по языкам программирования' },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['JavaScript', 'Python', 'Java', 'C#', 'PHP']
    },
    yAxis: { type: 'value' },
    series: [{
      data: [30, 40, 35, 25, 20],
      type: 'bar',
      itemStyle: { color: '#007bff' }
    }]
  };

  vacancyByRegionChartOptions: EChartsOption = {
    title: { text: 'Количество вакансий по регионам' },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург']
    },
    yAxis: { type: 'value' },
    series: [{
      data: [1200, 800, 600, 400],
      type: 'bar',
      itemStyle: { color: '#28a745' }
    }]
  };

  ngOnInit(): void {
    // Инициализация графиков с базовыми данными
    this.applyFilters();
  }

  applyFilters(): void {
    // Логика для применения фильтров и обновления графиков
  }

  toggleCharts(): void {
    this.showMoreCharts = !this.showMoreCharts;
  }
}
