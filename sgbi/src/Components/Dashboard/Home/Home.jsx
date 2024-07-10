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
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
function Home() {
    const [series, setSeries] = useState([44, 55, 41, 17, 15]);
    const data = {

        datasets: [{
            labels: 'poll',
            data: [3, 3, 3],
            backgroundColor: ['green', 'yellow', 'red'],
            borderColor: ['green', 'yellow', 'red'],
            circumference: 180,
            rotation: 270,
            cutout: '90%'
        }]
    }
    const options = {

    }
    const gaugeText = {
        id: 'gaugeText',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const {
                ctx, chartArea: { top, bottom, left, right, width, height }
            } = chart;

            const xCord = chart.getDatasetMeta(0).data[0].x
            const yCord = chart.getDatasetMeta(0).data[0].y
            ctx.save();
            ctx.fillStyle = 'gray'
            ctx.font = ' 20px sans-serif'
            ctx.textAlign = 'center'

            ctx.fillText("72% Completed", xCord, yCord)
        }
    }

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>Overview</h3>
            </div>
            <div className='main-cards'>
                <div class='card border-0  col-6'>
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
                <div className='col-5 card '>
                    <div className='row'>
                        <div className='col'>
                            <h5 className='workload-head'>Overall Progress</h5>
                        </div>
                        <div className='col-3'>
                            <select className="form-select  lastmonth-projectload rounded-pill">
                                <option>All</option>
                                <option>Last 6 months</option>
                                <option>Last year</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center '>
                        <div className=' doughnut' >
                            <Doughnut
                                data={data}
                                options={options}
                                plugins={[gaugeText]}


                            >

                            </Doughnut>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <h2>95</h2>
                            <h5 className='h5-donut'>Total Projects</h5>

                        </div>
                        <div className='col'>
                            <h2><span style={{ color: 'green' }}>26</span></h2>
                            <h5 className='h5-donut'>Completed</h5>

                        </div>
                        <div className='col'>
                            <h2><span style={{ color: 'orange' }}>35</span></h2>
                            <h5 className='h5-donut'>Delayed</h5>

                        </div>
                        <div className='col'>
                            <h2><span style={{ color: 'red' }}>35</span></h2>
                            <h5 className='h5-donut'>Total Projects</h5>

                        </div>


                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <div id="chart">
                        <TodayTask />
                    </div>
                </div>
                <div className='col '>
                    <Projectworkload />

                </div>
            </div>
        </main>
    );
}

export default Home;
