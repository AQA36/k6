# WIKI

https://aleksandarzhitenyov.grafana.net/a/cloud-home-app/onboarding-flow/start

## Steps

1. https://grafana.com/docs/k6/latest/set-up/install-k6/ (winget install k6 --source winget)
2. npm init --yes
3. npm install --save-dev @types/k6
4. k6 --version
5. k6 new
6. k6 run .\script.js

## НТ

**Нагрузочное и производительное тестирование** 1. [тесты на пиковую нагрузку](https://grafana.com/docs/k6/latest/testing-guides/test-types/spike-testing/) 2. [стресс-тесты](https://grafana.com/docs/k6/latest/testing-guides/test-types/stress-testing/) 3. [тесты на выдержку](https://grafana.com/docs/k6/latest/testing-guides/test-types/soak-testing/)

**Тестирование производительности браузера**
[API браузера k6](https://grafana.com/docs/k6/latest/using-k6-browser/)

**Производительность и синтетический мониторинг**

**Автоматизация тестов производительности**
[CI/CD](https://grafana.com/docs/k6/latest/testing-guides/automated-performance-testing/)

**Тестирование хаоса и устойчивости**
[xk6-disruptor API](https://grafana.com/docs/k6/latest/testing-guides/injecting-faults-with-xk6-disruptor/xk6-disruptor/)

### Metrics

1. **http_req_duration** - общее время выполнения всех запросов (то есть общая задержка)
2. **http_req_failed** - общее количество неудачных запросов
3. **iterations** - общее количество итераций

### k6/http module

1. post
2.
