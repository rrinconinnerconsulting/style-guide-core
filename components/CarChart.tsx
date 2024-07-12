import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const BarChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const option = {
        legend: {
          top: 'bottom',
          padding: [
            30,  // up
            10, // right
            5,  // down
            10, // left
        ]
        },
        toolbox: {
          show: true,
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [10, 80],
            center: ['50%', '40%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 6, name: 'niño pequeño' },
              { value: 5, name: 'niño' },
            ]
          }
        ]
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

export default BarChart;
