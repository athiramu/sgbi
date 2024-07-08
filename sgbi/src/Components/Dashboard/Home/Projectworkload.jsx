import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Projectworkload = () => {
  const addSymbols = (e) => {
    const suffixes = ["", "K", "M", "B"];
    let order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
    
    if (order > suffixes.length - 1) order = suffixes.length - 1;

    const suffix = suffixes[order];
    return CanvasJSReact.CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  };

  const options = {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Top Free Android Apps - June 2018"
    },
    axisY: {
      title: "Number of Downloads",
      labelFormatter: addSymbols,
      scaleBreaks: {
        autoCalculate: true
      }
    },
    axisX: {
      title: "Apps",
      labelAngle: 0
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "WhatsApp Messenger", y: 68206498 },
        { label: "Facebook Messenger", y: 55897709 },
        { label: "SHAREit", y: 7570438 },
        { label: "UC Browser", y: 17453224 },
        { label: "MX Player", y: 6389443 },
        { label: "Hotstar", y: 4815084 },
        { label: "Truecaller", y: 7631644 }
      ]
    }]
  };

  return (
    <div className='mt-3'>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Projectworkload;
