import React from 'react'
import './TaskManagement.css'
import { TiAttachment } from "react-icons/ti";
import { FaFlag } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import img from '../../images/images.jfif'
import { useNavigate } from 'react-router-dom';


function TaskManagement() {
    const navigate = useNavigate();

    const handleNewItemClick = () => {
        navigate('/viewtask');
      };
    return (
        <>
            <div className='container '>
                <div className='row'>
                
                <div className='col-6'>
                <input
                    type="text"
                    placeholder="  Search..."
                    className='border border-light mt-2 py-1  my-2'
                // value={searchTerm}
                // onChange={handleChange}
                />
                </div>
                <div className='col-6 d-flex justify-content-end mt-2'>
                <button type="button" class="btn btn-primary btn_color_card " onClick={handleNewItemClick}>New Item</button>
                <button type="button" class="btn btn-light ms-1 btn_color_top">Filter </button>
                <button type="button" class="btn btn-light ms-1 btn_color_top">Board</button>
                </div>

</div>
                <div className='row'>
                    <div className='col-3'>
                        <div class="card card_backgroun border-0">
                            <div className='card-head ms-2 d-flex align-items-center mt-2'>
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
                                        <button type="button" className="btn btn-primary btn_color_card  h-30">viverra Diam</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-3'/>Apr 12
                                    <img
                                            src={img}
                                            alt="Profile"
                                            className="rounded-circle ms-4  profile"
                                            style={{ width: '25px', height: '25px', objectFit: 'cover', border: '2px  ' }}
                                        />
                                    </div>
                                </div>
                                <div class="card border-0 mt-3">
                                    <div className='card-head container mt-1'>
                                    User Research
                                    </div>
                                    <div class="card-body container">
                                        <p className='p_cardbody '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque …</p>
                                        <button type="button" className="btn btn-primary btn_color_card  h-30">Maecenas Lacus</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-3'/>Apr 12
                                    <img
                                            src={img}
                                            alt="Profile"
                                            className="rounded-circle ms-4  profile"
                                            style={{ width: '25px', height: '25px', objectFit: 'cover', border: '2px  ' }}
                                        />
                                    </div>
                                </div> 
                                <div class="card border-0 mt-3">
                                    <div className='card-head container mt-1'>
                                    Client Call
                                    </div>
                                    <div class="card-body container">
                                        <p className='p_cardbody'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque …
                                        </p>
                                        <button type="button" className="btn btn-primary btn_color_card  h-30">Eget Intege</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-3'/>Apr 12
                                    <img
                                            src={img}
                                            alt="Profile"
                                            className="rounded-circle ms-4  profile"
                                            style={{ width: '25px', height: '25px', objectFit: 'cover', border: '2px  ' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="card card_backgroun border-0">
                            <div className='card-head ms-2 d-flex align-items-center mt-2'>
                                <span className='todo-text '>In Progress</span>
                                <div className='button-group ml-auto '>
                                    <button className='btn btn-light rounded-circle ml-2 menu ms-2 me-3'>2</button>
                                    <button className='btn btn-light rounded-circle ml-2 menu ms-4'>2</button>
                                    <button className='btn btn-light rounded-circle ml-2 menu ms-2'>3</button>
                                </div>
                            </div>
                            <div class="card-body card_backgroun">
                                <div class="card border-0">
                                    <div className='card-head container mt-1'>
                                    Login Flow
                                    </div>
                                    <div class="card-body container">
                                        <button type="button" className="btn btn-primary btn_color_card  h-30">Nullam Velit</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-3'/>Apr 12
                                    <img
                                            src={img}
                                            alt="Profile"
                                            className="rounded-circle ms-4  profile"
                                            style={{ width: '25px', height: '25px', objectFit: 'cover', border: '2px  ' }}
                                        />
                                    </div>
                                </div>
                                <div class="card border-0 mt-3">
                                    <div className='card-head container mt-1'>
                                    Forgot Password Screen
                                    </div>
                                    <div class="card-body container">
                                        
                                        <button type="button" className="btn btn-primary btn_color_card  h-30">Nullam Velit</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-3'/>Apr 12
                                    <img
                                            src={img}
                                            alt="Profile"
                                            className="rounded-circle ms-4  profile"
                                            style={{ width: '25px', height: '25px', objectFit: 'cover', border: '2px  ' }}
                                        />
                                    </div>
                                </div> 
                               
                            </div>
                        </div>
                    </div>
                     <div className='col-3'>
                        <div class="card card_backgroun border-0">
                            <div className='card-head ms-2 d-flex align-items-center mt-2'>
                                <span className='todo-text '>In Review</span>
                                <div className='button-group ml-auto '>
                                    <button className='btn btn-light rounded-circle ml-2 menu ms-2 me-4'>1</button>
                                    <button className='btn btn-light rounded-circle ml-2 menu ms-4'>2</button>
                                    <button className='btn btn-light rounded-circle ml-2 menu ms-2'>3</button>
                                </div>
                            </div>
                            <div class="card-body card_backgroun">
                                <div class="card border-0">
                                    <div className='card-head container mt-1'>
                                    Landing Page
                                    </div>
                                    <div class="card-body container">
                                        <button type="button" className="btn btn-primary btn_color_card  h-30">Maecenas Lacus</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-3'/>Apr 12
                                    <img
                                            src={img}
                                            alt="Profile"
                                            className="rounded-circle ms-4  profile"
                                            style={{ width: '25px', height: '25px', objectFit: 'cover', border: '2px  ' }}
                                        />
                                    </div>
                                </div>
                                <div class="card border-0 mt-3">
                                    <div className='card-head container mt-1'>
                                    Annual Presentation
                                    </div>
                                    <div class="card-body container">
                                        <p className='p_cardbody '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque …</p>
                                        <button type="button" className="btn btn-primary btn_color_card  h-30">Maecenas Lacus</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-3'/>Apr 12
                                    <img
                                            src={img}
                                            alt="Profile"
                                            className="rounded-circle ms-4  profile"
                                            style={{ width: '25px', height: '25px', objectFit: 'cover', border: '2px  ' }}
                                        />
                                    </div>
                                </div> 
                                <div class="card border-0 mt-3">
                                    <div className='card-head container mt-1'>
                                    Icons
                                    </div>
                                    <div class="card-body container">
                                       
                                        <button type="button" className="btn btn-primary btn_color_card  h-30">Eget Integer</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-3'/>Apr 12
                                    <img
                                            src={img}
                                            alt="Profile"
                                            className="rounded-circle ms-4  profile"
                                            style={{ width: '25px', height: '25px', objectFit: 'cover', border: '2px  ' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="card card_backgroun border-0">
                            <div className='card-head ms-2 d-flex align-items-center mt-2'>
                                <span className='todo-text '>Done</span>
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
                                        <button type="button" className="btn btn-primary btn_color_card  h-30">viverra Diam</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-3'/>Apr 12
                                    <img
                                            src={img}
                                            alt="Profile"
                                            className="rounded-circle ms-4  profile"
                                            style={{ width: '25px', height: '25px', objectFit: 'cover', border: '2px  ' }}
                                        />
                                    </div>
                                </div>
                                <div class="card border-0 mt-3">
                                    <div className='card-head container mt-1'>
                                    User Research
                                    </div>
                                    <div class="card-body container">
                                        <p className='p_cardbody '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque …</p>
                                        <button type="button" className="btn btn-primary btn_color_card  h-30">Maecenas Lacus</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-3'/>Apr 12
                                    <img
                                            src={img}
                                            alt="Profile"
                                            className="rounded-circle ms-4  profile"
                                            style={{ width: '25px', height: '25px', objectFit: 'cover', border: '2px  ' }}
                                        />
                                    </div>
                                </div> 
                                <div class="card border-0 mt-3">
                                    <div className='card-head container mt-1'>
                                    Client Call
                                    </div>
                                    <div class="card-body container">
                                        <p className='p_cardbody'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque …
                                        </p>
                                        <button type="button" className="btn btn-primary btn_color_card  h-30">Eget Intege</button>
                                    </div>
                                    <div class="card-footer ">
                                    <TiAttachment className='TiAttachment'/>3
                                    <FaFlag className='MdOutlinedFlag ms-2' />
                                    <GoClockFill className='GoClockFill ms-2 me-3'/>Apr 12
                                    <img
                                            src={img}
                                            alt="Profile"
                                            className="rounded-circle ms-4  profile"
                                            style={{ width: '25px', height: '25px', objectFit: 'cover', border: '2px  ' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TaskManagement