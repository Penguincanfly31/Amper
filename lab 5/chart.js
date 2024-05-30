const sampleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    label: 'Sample Data',
    data: [65, 59, 80, 81, 56, 55],
    backgroundColor: [],
    borderColor: [],
    borderWidth: 1
  }]
};

// Generate random RGBA values for the backgroundColor and borderColor arrays
for (let i = 0; i < sampleData.datasets[0].data.length; i++) {
  sampleData.datasets[0].backgroundColor.push(`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`);
  sampleData.datasets[0].borderColor.push(`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`);
}

const ctx = document.getElementById('myChart').getContext('2d');
let currentChartType = 'bar'; // Default chart type

const chartTypes = {
  'bar': 'bar',
  'line': 'line',
  'pie': 'pie'
};

let myChart;

function renderChart(chartType) {
  if (myChart) {
    myChart.destroy(); // Destroy the previous chart instance
  }

  myChart = new Chart(ctx, {
    type: chartTypes[chartType],
    data: sampleData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

document.querySelectorAll('.chart-type').forEach(button => {
  button.addEventListener('click', function() {
    const chartType = this.getAttribute('data-type');
    renderChart(chartType);
  });
});

renderChart(currentChartType);