const sampleData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'SAMPLE DATA',
      data: [65, 59, 70, 81, 56, 45],
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
  let currentChart;
  
  function renderChart(type) {
    if (currentChart) {
      currentChart.destroy();
    }
    
    currentChart = new Chart(ctx, {
      type: type,
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
  
  function changeChartType(type) {
    renderChart(type);
  }
  
  renderChart('bar');