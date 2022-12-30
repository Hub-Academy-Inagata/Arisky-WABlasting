/* global Chart */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (v4.2.2): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

// random Numbers
const random = () => Math.round(Math.random() * 200);

// eslint-disable-next-line no-unused-vars
const lineChart = new Chart(document.getElementById('canvas-1'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [{
      label: 'Total Penerima',
      backgroundColor: 'rgba(228, 55, 49, 0.1)',
      borderColor: 'rgba(228, 55, 49, 1)',
      pointBackgroundColor: 'rgba(228, 55, 49, 1)',
      pointBorderColor: '#fff',
      data: [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
    }]
  },
  options: {
    responsive: true
  }
});

// eslint-disable-next-line no-unused-vars
const doughnutChart = new Chart(document.getElementById('canvas-3'), {
    type: 'doughnut',
    data: {
      labels: ['Terkirim', 'Tidak Terkirim'],
      datasets: [{
        data: [150, 25],
        backgroundColor: ['#5CB85C', '#EC3832'],
        hoverBackgroundColor: ['#5CB85C', '#EC3832']
      }]
    },
    options: {
      responsive: true
    }
  });
