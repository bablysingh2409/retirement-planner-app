// RetirementChart.js
import React from 'react';
import retirementData from '../data';
import { Bar } from 'react-chartjs-2';

const RetirementChart = () => {
    const labels = retirementData
    .filter((data, index) => index % 5 === 0 || index === retirementData.length - 1)
    .map((data) => data.age);

  const data = {
    labels,
    datasets: [
      {
        label: 'Employer',
        data: retirementData.map((data) => data.employer),
        backgroundColor: 'rgb(17, 0, 158,0.7)',
      },
      {
        label: 'Employee',
        data: retirementData.map((data) => data.employee),
        backgroundColor: 'rgb(73, 66, 228,0.7)',
      },
      {
        label: 'Total Interest',
        data: retirementData.map((data) => parseFloat(data.totalInterest)),
        backgroundColor: 'rgb(134, 182, 246,0.7)',
      },
    ],
  };

  const options = {
    scales: {
      x: { stacked: true     },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 300,
        ticks: { stepSize: 100 },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RetirementChart;
