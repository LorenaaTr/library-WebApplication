import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

const DynamicDoughnutChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [{
      data: [0, 100],
      backgroundColor: ['#FF6384', '#36A2EB'],
    }],
    labels: ['Number', 'Remaining'],
  });

  useEffect(() => {
    axios.get('http://localhost:5000/book/usercount')
      .then(response => {
        const count = response.data.count;

        // Update the chartData with the new count value
        setChartData({
          datasets: [{
            data: [count, 100 - count],
            backgroundColor: ['#FF6384', '#36A2EB'],
          }],
          labels: ['Number', 'Remaining'],
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Dynamic Doughnut Chart</h2>
      <Doughnut
        data={chartData}
        key={JSON.stringify(chartData)} // Add key prop to force remount
        options={{
          circumference: Math.PI,
          rotation: Math.PI,
          cutoutPercentage: 70, 
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default DynamicDoughnutChart;
