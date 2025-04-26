import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

type CandlestickData = {
  x: string; // time
  y: [number, number, number, number]; // [open, high, low, close]
};

export default function CandlestickChart() {
  const [series, setSeries] = useState([{ data: [] as CandlestickData[] }]);

  useEffect(() => {
    const generateMockData = (): CandlestickData[] => {
      const data: CandlestickData[] = [];
      let base = 100;

      for (let i = 0; i < 30; i++) {
        const open = +(base + Math.random() * 5).toFixed(2);
        const close = +(open + (Math.random() - 0.5) * 10).toFixed(2);
        const high = Math.max(open, close) + Math.random() * 5;
        const low = Math.min(open, close) - Math.random() * 5;

        data.push({
          x: new Date(Date.now() - (30 - i) * 60 * 1000).toISOString(),
          y: [
            +open.toFixed(2),
            +high.toFixed(2),
            +low.toFixed(2),
            +close.toFixed(2),
          ],
        });

        base = close;
      }

      return data;
    };

    setSeries([{ data: generateMockData() }]);
  }, []);

  const options: ApexOptions = {
    chart: {
      type: 'candlestick',
      height: 350,
      background: '#1f2937',  // Dark slate background, prev. #000
      toolbar: { show: false },
    },
    xaxis: {
      type: 'datetime',
      labels: { style: { colors: '#fff' } }, 
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: { style: { colors: '#fff' } },
    },
    theme: {
      mode: 'dark',
    },
  };

  return (
    <div className="col-span-2 bg-zinc-900 rounded-lg p-4 shadow">
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
}
