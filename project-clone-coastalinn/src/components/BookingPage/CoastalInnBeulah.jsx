import React ,{useContext, useEffect} from 'react'
import Tables from './components/Table'
import axios from "axios";
import { ContextApi } from '../../context/StateContext';
import { ProjectCardDemo } from './components/Property';

const CoastalInnBeulah = () => {
const {rooms,setRooms} = useContext(ContextApi);

    useEffect(()=>{
        axios.get(" http://localhost:3001/rooms").then(res=>setRooms(res.data))
    },[])
    return (
        <div className="width-custom">
            <Tables/>
            <ProjectCardDemo/>
        </div>
    )
}

export default CoastalInnBeulah
