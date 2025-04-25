import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface CryptoChartProps {
  data: number[];
  priceChange7d: number;
}

const CryptoChart: React.FC<CryptoChartProps> = ({ data, priceChange7d }) => {
  const chartColor = priceChange7d >= 0 ? '#10B981' : '#EF4444';
  
  const generateLabels = () => {
    const labels = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }
    
    return labels;
  };
  
  const chartData = {
    labels: generateLabels(),
    datasets: [
      {
        data,
        fill: 'start',
        backgroundColor: `${chartColor}20`,
        borderColor: chartColor,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };
  
  return (
    <div className="h-16 w-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CryptoChart