import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Home.css';
import { BiSolidShoppingBags } from "react-icons/bi";
import ProjectSummery from './ProjectSummery';
import { MdOutlineBarChart } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdArrowOutward } from "react-icons/md";
import TodayTask from './TodayTask';
import Projectworkload from './Projectworkload';


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
            formatter: function (val, opts) {
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
                <div class='card border-0'>
                    <div class='card-inner'>
                        <div class='circle-icon1 '>
                            <MdOutlineBarChart className='icon ' />
                        </div>
                        <div class='text-content'>
                            <p>Total venue</p>
                            <h2>$5300000</h2>
                            <small><MdArrowOutward />2% increase from last month</small>
                        </div>
                    </div>
                </div>
                <div class='card border-0'>
                    <div class='card-inner'>
                        <div class='circle-icon2 '>
                            <BiSolidShoppingBags className='icon ' />
                        </div>
                        <div class='text-content'>
                            <p>Projects</p>
                            <h2>95/100</h2>
                            <small><MdArrowOutward />2% increase from last month</small>
                        </div>
                    </div>
                </div>
                <div class='card border-0'>
                    <div class='card-inner'>
                        <div class='circle-icon3 '>
                            <FaRegClock className='icon ' />
                        </div>
                        <div class='text-content'>
                            <p>Time Spent</p>
                            <h2>102/1500hrs</h2>
                            <small><MdArrowOutward />2% increase from last month</small>
                        </div>
                    </div>
                </div>
                <div class='card border-0'>
                    <div class='card-inner'>
                        <div class='circle-icon4 '>
                            <CgProfile className='icon ' />
                        </div>
                        <div class='text-content'>
                            <p>Resources</p>
                            <h2>102/150</h2>
                            <small><MdArrowOutward />2% increase from last month</small>
                        </div>
                    </div>
                </div>
            </div>



            <div className='row'>
                <div className='col'>
                    <div id="chart">
                        <ProjectSummery />
                    </div>
                </div>
                <div className='col card'>
                    <ReactApexChart options={options} series={series} type="donut" width={380} />

                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <div id="chart">
                        <TodayTask />
                    </div>
                </div>
                <div className='col '>
                  <Projectworkload/>

                </div>
            </div>
        </main>
    );
}

export default Home;
