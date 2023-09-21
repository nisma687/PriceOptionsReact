import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import Phone from "../Phone/Phone";

const Phones = () => {
    const[phones, setPhones] = useState([]);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res=>{
            const phoneData = res.data.data;
            const phoneWithFakeData = phoneData.map(phone=>{

                const obj={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phoneWithFakeData);
            setPhones(phoneWithFakeData);

        })
    },[]);
    return (
        <div className="bg-black mt-12 text-white">
            <h1 className="text-5xl mb-2">Phones:{phones.length}</h1>
            <p className="text-2xl mb-2">Bar chart of phones</p>
            {
               
               
                <BarChart width={1200} height={400} data={phones}>
                    <XAxis 
                    className="text-black"
                    dataKey="name" stroke="#8884d8
                    " />
                    <YAxis />
                  <Bar dataKey="price" fill="#8884d8" />
                  <Tooltip></Tooltip>
                </BarChart>
            }           
            
        </div>
    );
};

export default Phones;