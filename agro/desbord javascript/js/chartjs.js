const ctx1 = document.getElementById('chart1');

  new Chart(ctx1, {
    type: 'polarArea',
    data: {
      labels: ['facebook', 'youtub', 'amazon'],
      datasets: [{
        label: '# of Votes',
        data: [600, 800, 1000,],
        backgroundcolor: [
            "rgba(54, 162, 235, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 206, 86, 1)",
        ],
      }],
    },
    options: {
     responsive: true,
    },
  });



  const ctx2 = document.getElementById('chart2');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['facebook', 'youtub', 'amazon'],
      datasets: [{
        label: 'Erning',
        data: [600, 800, 1000,],
        backgroundcolor: [
            "rgba(54, 162, 235, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 206, 86, 1)",
        ],
      }],
    },
    options: {
     responsive: true,
    },
  });