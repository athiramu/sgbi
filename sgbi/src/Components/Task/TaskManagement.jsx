import React from 'react'
import './TaskManagement.css'
import { TiAttachment } from "react-icons/ti";
import { FaFlag } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";



function TaskManagement() {
    return (
        <>
            <div className='container'>
                <input
                    type="text"
                    placeholder="  Search..."
                    className='border border-light mt-2 py-1 col-3 my-2'
                // value={searchTerm}
                // onChange={handleChange}
                />


                <div className='row'>
                    <div className='col-3'>
                        <div class="card card_backgroun border-0">
                            <div className='card-head container d-flex align-items-center mt-2'>
                                <span className='todo-text '>To Do</span>
                                <div className='button-group ml-auto '>
                                    <button className='btn btn-light rounded-circle ml-2 menu ms-2 me-5'>1</button>
                                    <button className='btn btn-light rounded-circle ml-2 menu ms-4'>2</button>
                                    <button className='btn btn-light rounded-circle ml-2 menu ms-2'>3</button>
                                </div>
                            </div>
                            <div class="card-body card_backgroun">
                                <div class="card border-0">
                                    <div className='card-head container mt-1'>
                                        Mobile wireFrames
                                    </div>
                                    <div class="card-body container">
                                        <button type="button" className="btn btn-primary btn_color  h-30">viverra Diam</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-1'/>Apr 12

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="card">
                            <div class="card-body card_backgroun">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="card">
                            <div class="card-body card_backgroun">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="card">
                            <div class="card-body card_backgroun">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TaskManagement