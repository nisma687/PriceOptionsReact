import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar,  XAxis, YAxis,  Tooltip} from 'recharts';
// import Phone from "../Phone/Phone";
import { Audio } from  'react-loader-spinner';

const Phones = () => {
    const[phones, setPhones] = useState([]);
    const[loading, setLoading] = useState(true);
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
            setLoading(false);

        })
    },[]);
    return (
        <div className="bg-black mt-12 text-white">
            {/*means loading jodi sotto hoy tokhn dekhabe  */}
        {
           loading &&  <div>
            <Audio
                height = "80"
                width = "80"
                radius = "9"
                color = 'green'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass
             /> 
           </div>
        }
            
            
            
            
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