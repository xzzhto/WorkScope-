import { Component, OnInit } from '@angular/core';

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
    // Загрузка данных из API может быть выполнена здесь
  }
}
