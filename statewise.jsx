import React,{useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Statewise=()=>
{
    const [data,setData]=useState([])
    const getCovidData=async ()=>
    {
        const res=await fetch('https://data.covid19india.org/state_district_wise.json')
        const actualData=await res.json()
        console.log(actualData.Maharashtra)
        const districtArray = Object.entries(actualData.Maharashtra.districtData).map(([district, stats]) => ({
            district,
            ...stats
        }));
        setData(districtArray);
    }
    useEffect(()=>
    {
        getCovidData()
    },[])
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="main-heading">
                <h1 className="mb-5 text-center"><span className="fw-bold">INDIA</span> LIVE COVID-19 TRACKER</h1>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>District</th>
                            <td>Active</td>
                            <td>Confirmed</td>
                            <td>Deceased</td>
                            <td>Recovered</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((curEle,index)=>
                            {
                                return(
                                    <tr key={index}>
                                        <th>{curEle.district}</th>
                                        <td>{curEle.active}</td>
                                        <td>{curEle.confirmed}</td>
                                        <td>{curEle.deceased}</td>
                                        <td>{curEle.recovered}</td>
                                        <td></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
            
        </>
    )
}

export default Statewise