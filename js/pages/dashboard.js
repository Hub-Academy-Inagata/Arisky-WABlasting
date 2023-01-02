/* global Chart */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (v4.2.2): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

// random Numbers
const random = () => Math.round(Math.random() * 200);

//option untuk line chart
const optionsLineChart = {
  responsive: true, //untuk responsive
  maintainAspectRatio: false, //untuk responsive
  plugins: {
    legend: {
      display: false,
    }
  },
  interaction: {
    intersect: false,
    mode: 'index',
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: true,
        padding: 10,
        color: '#000000',
        precision: 0,
        font: {
          size: 12,
          family: "'Lato', sans-serif",
          style: 'normal',
          weight: 'bold',
          lineHeight: 2
        },
      }
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: true,
        color: '#000000',
        padding: 8,
        font: {
          size: 14,
          family: "'Lato', sans-serif",
          style: 'normal',
          weight: 'bold',
          lineHeight: 2
        },
      }
    },
  },
};

// eslint-disable-next-line no-unused-vars
const lineChartMingguan = new Chart(document.getElementById('canvas-mingguan'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [{
      label: 'Total Penerima',
      backgroundColor: 'rgba(228, 55, 49, 0.1)',
      borderColor: 'rgba(228, 55, 49, 1)',
      pointBackgroundColor: '#FCEBEA',
      pointBorderColor: '#E43631',
      tension: 0,
      pointRadius: 8,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 2,
      pointHoverBackgroundColor: '#FCEBEA',
      pointHoverBorderColor: '#E43631',
      borderWidth: 2,
      fill: true,
      maxBarThickness: 6,
      data: [50, 15, 30, 80, 60, 50, 15, 30, 80, 60, 175, 175]
    }]
  },
  options: optionsLineChart
});

const lineChartBulanan = new Chart(document.getElementById('canvas-bulanan'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [{
      label: 'Total Penerima',
      backgroundColor: 'rgba(228, 55, 49, 0.1)',
      borderColor: 'rgba(228, 55, 49, 1)',
      pointBackgroundColor: '#FCEBEA',
      pointBorderColor: '#E43631',
      tension: 0,
      pointRadius: 8,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 2,
      pointHoverBackgroundColor: '#FCEBEA',
      pointHoverBorderColor: '#E43631',
      borderWidth: 2,
      fill: true,
      maxBarThickness: 6,
      data: [50, 15, 30, 80, 60, 50, 15, 30, 80, 60, 175, 200]
    }]
  },
  options: optionsLineChart
});

// eslint-disable-next-line no-unused-vars
const doughnutChart = new Chart(document.getElementById('canvas-penerima'), {
    type: 'doughnut',
    data: {
      labels: ['Terkirim', 'Tidak Terkirim'],
      datasets: [{
        data: [150, 25],
        backgroundColor: ['#5CB85C', '#EC3832'],
        hoverBackgroundColor: ['#5CB85C', '#EC3832'],
        cutout: 60,
        borderWidth: 0,
      }]
    },
    options: {
      responsive: true, //untuk responsive
      maintainAspectRatio: false, //untuk responsive
      plugins: {
        legend: {
          position: "right",
          labels: {
            boxWidth: 12,
            boxHeight: 12,
            color: "#000000",
            font: {
              size: 12,
              family: "'Lato', sans-serif",
              style: 'normal',
              weight: 'bold',
              lineHeight: 16
            },
          }
        }
      },
    }
  });
