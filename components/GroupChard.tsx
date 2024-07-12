import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const EChartsComponent: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const option: echarts.EChartOption = {
        legend: {},
        color: [
          "#29ABE2",
          "#0071BC",
          "#B3B3B3",
        ],
        tooltip: {},
        dataset: {
          dimensions: ['product', 'masculino', 'femenino', 'neutro'],
          source: [
            { product: 'Niño pequeño', 'masculino': 43.3, 'femenino': 85.8, 'neutro': 93.7},
            { product: 'Niño', 'masculino': 43.3, 'femenino': 85.8, 'neutro': 93.7},
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      };

      myChart.setOption(option);

      // Resize chart on window resize
      const resizeChart = () => {
        myChart.resize();
      };
      window.addEventListener('resize', resizeChart);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener('resize', resizeChart);
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div>
      <h1>Gráfico de ECharts</h1>
      <div ref={chartRef} style={{ width: '100%', height: '300px' }}></div>
    </div>
  );
};

export default EChartsComponent;
