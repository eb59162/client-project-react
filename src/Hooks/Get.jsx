import { useEffect, useState } from 'react';
import axios from 'axios'

const UseGet = () => {

const[res,setRes]=useState()
   
    const get = async (url) => {
        try { 
            const response = await axios.get(url)
            setRes(response.data)
        } catch (error) { 
            console.error(error)
        }
    } 
   
    return [get, res] ;
}

export default UseGet
