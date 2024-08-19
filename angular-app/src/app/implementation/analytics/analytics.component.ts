import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  jobCategoryData = [
    { category: 'Разработчик', jobCount: 1200, averageSalary: 120000 },
    { category: 'Тестировщик', jobCount: 800, averageSalary: 100000 },
    { category: 'Дизайнер', jobCount: 500, averageSalary: 110000 }
  ];

  salaryData = [
    { region: 'Москва', averageSalary: 150000 },
    { region: 'Санкт-Петербург', averageSalary: 120000 },
    { region: 'Новосибирск', averageSalary: 100000 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.createCharts();
  }

  createCharts(): void {
    new Chart('jobCategoryChart', {
      type: 'bar',
      data: {
        labels: this.jobCategoryData.map(item => item.category),
        datasets: [{
          label: 'Количество вакансий',
          data: this.jobCategoryData.map(item => item.jobCount),
          backgroundColor: '#4A90E2'
        }]
      }
    });
    new Chart('salaryChart', {
      type: 'line',
      data: {
        labels: this.salaryData.map(item => item.region),
        datasets: [{
          label: 'Средняя зарплата',
          data: this.salaryData.map(item => item.averageSalary),
          borderColor: '#FF9A8B',
          fill: false
        }]
      }
    });
  }
}
