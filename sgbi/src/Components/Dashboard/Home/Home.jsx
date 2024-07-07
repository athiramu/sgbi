import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts'; 
import './Home.css';
import { IoPersonSharp } from "react-icons/io5";

function Home() {
    const [series, setSeries] = useState([44, 55, 41, 17, 15]);
    const [options, setOptions] = useState({
        chart: {
            width: 380,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex];
            }
        },
        title: {
            text: 'Gradient Donut with custom Start-angle'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    });

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>Overview</h3>
            </div>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <p>Total venue</p>
                        <h2>$5300000</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <p>Projects</p>
                        <h2>9/100</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <p>Time spent</p>
                        <h2>102/1300hrs</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                    <div className='circle-icon '>
                    <IoPersonSharp className='icon' />
                </div><br></br>

                <div className='row'><p>Resources</p></div><br></br>
                
               <div className='row'><h2>102/1200</h2></div> 
            </div>
                </div>
            </div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="donut" width={380} />
            </div>
        </main>
    );
}

export default Home;
