import React ,{useCallback, useEffect, useState}from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import status10 from "./images/Status=10%.png"
import status20 from "./images/Status=20%.png"
import status30 from "./images/Status=30%.png"
import status40 from "./images/Status=40%.png"
import status50 from "./images/Status=50%.png"
import status60 from "./images/Status=60%.png"
import status70 from "./images/Status=70%.png"
import status80 from "./images/Status=80%.png"
import status90 from "./images/Status=90%.png"
import status100 from "./images/Status=Completed.png"
import { useSelector, useDispatch } from 'react-redux'
import { addList, addTask, init, remove } from './redux/itemSlice';
import circle from "./images/circle.png"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import right from "./images/right.png"
import left from "./images/left.png"
import edit from "./images/edit.png"
import trash from "./images/trash.png"

export default function V1() {
    const [data2,setData2] = useState([]) ;
    const [result,setResult] = useState("");
    const [taskName,setTaskName] = useState("");
    const [progress,setProgress] = useState("");
    const [dots,setDots] = useState("");
    const [num,setNum] = useState("");
    const [dots2,setDots2] = useState("");
    const dispatch = useDispatch();
    const itemList = useSelector(function(state){
        return state.item.itemList ;
    })
    const list = useSelector(function(state){
        return state.item.list ;
    })
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NjAxMDI2MjZ9.mxNjoBd_fmCPO6bRhQY93ukh3oeHNJNdzYKFnCJzaTg";
   async function getDataFirst(){
        try {
        let res = await axios.get("https://todos-project-api.herokuapp.com/todos",{
            headers:{
                Authorization : "Bearer " + token
            }
        });
        dispatch(init(res.data));
    }
    catch(error){
        console.log("error get data first",error)
    }
    }
    useEffect(function(){
        getDataFirst();
    },[]);
    useEffect(function(){
        let newState = itemList.map(function(data,index){
            dispatch(addList(
                [
                    {
                name : "test 1",
                progress_percentage : 50
                    },
                    {
                        name : "test 2",
                        progress_percentage : 30
                    }]));
    return (
        <div style={{ 
            background: '#F7FEFF',
            border: '1px solid #01959F',
            borderRadius: '4px', }} 
            className=' w-80 p-4 '>
            <div style={{ 
                background: '#F7FEFF',
                border: '1px solid #01959F',
                borderRadius: '4px', }} 
                className="w-24 flex justify-center ">
                {data.title}
            </div>
            <p className=' my-2'>{data.description}</p>
            <div style={{ 
                background: '#FAFAFA',
                border: '1px solid #E0E0E0',
                borderRadius:' 4px'
             }}
             className="p-4">
                {list.map(function(item,i){
                    console.log("list",list);
                    return (
                        <div className='relative'>
                            <p>{item.name}</p>
                            <div className='flex items-center'>
                            {item.progress_percentage == 10 && 
                            <div className='my-2'>
                            <img src={status10}></img>
                            </div>
                            }

                            {item.progress_percentage == 20 && 
                            <div className='my-2'>
                            <img src={status20}></img>
                            </div>
                            }

                            {item.progress_percentage == 30 && 
                            <div className='my-2'>
                            <img src={status30}></img>
                            </div>
                            }

                            {item.progress_percentage == 40 && 
                            <div className='my-2'>
                            <img src={status40}></img>
                            </div>
                            }

                            {item.progress_percentage == 50 && 
                            <div className='my-2'>
                            <img src={status50}></img>
                            </div>
                            }

                            {item.progress_percentage == 60 && 
                            <div className='my-2'>
                            <img src={status60}></img>
                            </div>
                            }

                            {item.progress_percentage == 70 && 
                            <div className='my-2'>
                            <img src={status70}></img>
                            </div>
                            }

                            {item.progress_percentage == 80 && 
                            <div className='my-2'>
                            <img src={status80}></img>
                            </div>
                            }

                            {item.progress_percentage == 90 && 
                            <div className='my-2'>
                            <img src={status90}></img>
                            </div>
                            }
                            
                          {item.progress_percentage == 100 && 
                            <div className='my-2'>
                           <img src={status100}></img>
                          </div>
                            }
                            <div onClick={function(){
                                setDots(i);
                                setDots2(index);
                            }} className='right-0 absolute cursor-pointer hover:opacity:80'>
                            <MoreHorizIcon></MoreHorizIcon>
                            </div>
                            {dots === i && dots2 == index &&
                           <div id="option" className=' absolute w-80 h-40 rounded-lg bg-white p-5'>
                                <div className=' cursor-pointer hover:text-red-600 flex items-center'>
                                    <img src={right}></img>
                                    <p className='ml-3'>Move to the Right</p>
                                </div>
                                <div className= 'cursor-pointer hover:text-red-600 mt-1 flex items-center'>
                                    <img src={left}></img>
                                    <p className='ml-3'>Move to the Left</p>
                                </div>
                                <div onClick={Edit} className='cursor-pointer hover:text-red-600 mt-1 flex items-center'>
                                    <img src={edit}></img>
                                    <p className='ml-3'>Edit</p>
                                </div>
                                <div onClick={function(){
                                    setDots("");
                                    dispatch(remove(i))
                                }} className='cursor-pointer hover:text-red-600 mt-1 flex items-center'>
                                    <img src={trash}></img>
                                    <p className='ml-3'>Delete</p>
                                </div>
                           </div>
                            }
                          </div>
        
                        </div>
                    )
                })} 
                
            </div>
            <div onClick={function(){NewTask(data.id)}} className=' flex items-center mt-3 cursor-pointer hover:opacity-80'>
                <img src={circle}></img>
                <p className=' ml-2'>New Task</p>
            </div>
        </div>
    )       
});
    setResult(newState);
    console.log("itemList:",itemList);
    console.log("list:",list);
    },[result]);

   async function getData(data){
        try {
            const response = await axios.get("https://todos-project-api.herokuapp.com/todos/" + data.id +"/items",{
            headers:{
                Authorization : "Bearer " + token
            }
        });
        dispatch(addList(response.data));
    }
    catch (error){
        console.log("list error",error);
    }
}

    function NewTask(index){
        document.getElementById("create-task").classList.remove("hidden");
        document.getElementsByClassName("app")[0].style.opacity = 0.2;
        setNum(index);
        setTaskName("");
        setProgress("");
    }

    function CloseNewTask(){
        document.getElementById("create-task").classList.add("hidden");
        document.getElementsByClassName("app")[0].style.opacity = 1;
    }

    function CloseEditTask(){
        document.getElementById("edit-task").classList.add("hidden");
        document.getElementsByClassName("app")[0].style.opacity = 1;
    }

    function Edit(){
        document.getElementById("edit-task").classList.add("hidden");
        document.getElementsByClassName("app")[0].style.opacity = 1;
        document.getElementById("edit-task").classList.remove("hidden");
    }

    function SubmitNewTask(){
        document.getElementById("create-task").classList.add("hidden");
        document.getElementsByClassName("app")[0].style.opacity = 1;
        axios.post("https://todos-project-api.herokuapp.com/todos/" + num + "/items",
        {
        headers:
        {
            Authorization : "Bearer " + token
        }},
        {  
            name : taskName,
            progress_percentage : progress
        }
        ).then(function(res){
            console.log("submit new task :",res.data);
        }).catch(function(error){
            console.log(error);
        });
        dispatch(addTask({
            name : taskName,
            progress_percentage : progress
        }))
    }
  return (
    <div>
    <div className='text-sm app'>
        <div className=' p-5 flex items-center'>
            <p className='text-lg font-bold'>Product Roadmap</p>
            <button style={{ background : "#01959F" }} className='hover:opacity-80 p-2 w-36  ml-3 rounded-lg text-white'>+ Add New Group</button>
        </div>
        <div style={{ border : "1px solid #E0E0E0" }} className=" mt-3 w-full"></div>
        <div className='lg:grid grid-cols-4 gap-5 my-5 p-5 flex flex-col items-center'>
            {result}
        </div>

    </div>
    
    <div id="create-task" style={{ transform: 'translate(-50%, -50%)' }} className='hidden border-2 border-gray-100 w-96 shadow-lg p-5 rounded-lg fixed top-1/2 left-1/2'>
            <div className=' flex relative items-center'>
                <p className=' text-lg font-bold'>Create Task</p>
                <div className=' right-0 absolute cursor-pointer hover:opacity-80'>
                    <CloseIcon onClick={CloseNewTask} ></CloseIcon>
                </div>
            </div>
            <p className=' font-bold mt-3'>Task Name</p>
            <input value={taskName} onChange={function(e){setTaskName(e.target.value)}} placeholder='Type your Task' className=' mt-2 border-2 border-gray-200 w-full px-2 py-1 rounded-lg'></input>
            <p className=' font-bold mt-3'>Progress</p>
            <input value={progress} type="number" onChange={function(e){setProgress(e.target.value)}} placeholder='70%' className=' mt-2 border-2 border-gray-200 w-full px-2 py-1 rounded-lg'></input>
            <div className='mt-3 flex justify-end items-center'>
                <button onClick={CloseNewTask} className='hover:opacity-80 mr-3 border-2 border-gray-300 rounded-lg p-2'>Cancel</button>
                <button onClick={SubmitNewTask} style={{ background : "#01959F" }} className=' hover:opacity-80 text-white mr-3 rounded-lg p-2'>Save Task</button>
            </div>
        </div>

        <div id="edit-task" style={{ transform: 'translate(-50%, -50%)' }} className='hidden border-2 border-gray-100 w-96 shadow-lg p-5 rounded-lg fixed top-1/2 left-1/2'>
            <div className=' flex relative items-center'>
                <p className=' text-lg font-bold'>Edit Task</p>
                <div className=' right-0 absolute'>
                    <CloseIcon onClick={CloseEditTask} ></CloseIcon>
                </div>
            </div>
            <p className=' font-bold mt-3'>Task Name</p>
            <input onChange={function(e){setTaskName(e.target.value)}} value={taskName} placeholder='Type your Task' className=' mt-2 border-2 border-gray-200 w-full px-2 py-1 rounded-lg'></input>
            <p className=' font-bold mt-3'>Progress</p>
            <input onChange={function(e){setProgress(e.target.value)}} value={progress} placeholder='70%' className=' mt-2 border-2 border-gray-200 w-full px-2 py-1 rounded-lg'></input>
            <div className='mt-3 flex justify-end items-center'>
                <button onClick={CloseEditTask} className='hover:opacity-80 mr-3 border-2 border-gray-300 rounded-lg p-2'>Cancel</button>
                <button style={{ background : "#01959F" }} className=' hover:opacity-80 text-white mr-3 rounded-lg p-2'>Save Task</button>
            </div>
        </div>

    </div>
  )
}
