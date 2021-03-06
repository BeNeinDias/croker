import Highcharts from 'highcharts';

const chartElement = document.getElementById('chart-container');

const renderChart = function(data) {
     Highcharts.chart(chartElement, {

      chart: {
        type: 'area'
      },

      title: {
        text: ''
      },

      xAxis: {
        visible : false,
        type: 'datetime',
        labels: {
          format: '{value:%Y-%b-%e}'
        },
      },

      yAxis: {
        visible : false
      },

      tooltip: {
        pointFormat: 'USD{point.y}',
        shared: true
      },

      legend: {
        enabled: false
      },
      series: [{
        name : "|",
        data: data,
        lineColor: '#60cd44',
        color: '#60cd44',
        fillOpacity: 0.5,
        marker: {
          enabled: false
        },
        threshold: null
      }]

    });
}

const initCharts = function() {

  if (chartElement) {
    const data = JSON.parse(chartElement.dataset.historicalPrices);
    const oneDayBtn = document.querySelector('.one-day');
    const oneWeekBtn = document.querySelector('.one-week');
    const oneMonthBtn = document.querySelector('.one-month');
    const oneYearBtn = document.querySelector('.one-year');
    const buttons = [oneDayBtn, oneWeekBtn, oneMonthBtn, oneYearBtn];
    const removeSelectedClass = (() => {
      buttons.forEach(function(x) {
        x.classList.remove('selected');
      });
    });
    oneDayBtn.addEventListener("click", function(event) {
      renderChart(data[3]);
      removeSelectedClass();
      oneDayBtn.classList.add('selected');
    });
    oneWeekBtn.addEventListener("click", function(event) {
      renderChart(data[2]);
      removeSelectedClass();
      oneWeekBtn.classList.add('selected');
    });
    oneMonthBtn.addEventListener("click", function(event) {
      renderChart(data[1]);
      removeSelectedClass();
      oneMonthBtn.classList.add('selected');
    });
    oneYearBtn.addEventListener("click", function(event) {
      renderChart(data[0]);
      removeSelectedClass();
      oneYearBtn.classList.add('selected');
    });
    renderChart(data[3]);

  }
};

export { initCharts };
