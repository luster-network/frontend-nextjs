import React, { useEffect, useState } from 'react'
import InternshipCard from './internships/Internship-Card';
import JobCardLoading from './Job-Card/JobCardLoading';
import Axios from 'axios';

const InternshipPage = () => {
    const [dataArr, setDataArr] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [datarr, setDataArr] = React.useState([]);

    const fetchInternshipsData = async () => {
        setLoading(true);
        const response = await Axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/v1/internship/findInternship`)
        .then((res)=>{
            //console.log(res);
            const resp = res.data;
            //console.log(resp.data);
            setDataArr(resp.data);
            //console.log(dataArr);
            setLoading(false);
            // setLoading(true);
            
        })
        .catch((err)=>{
            setLoading(false);
        });
    }


    useEffect(()=>{
        fetchInternshipsData()
    } ,[]);

    
    return (
        <div className=" pt-4">
        <div className="text-white p-4 max-w-7xl m-auto">
            <div className="text-white text-lg bg-slate-700 p-2 w-fit border rounded-md">Discover Internships</div>
            <div className="mt-3 flex flex-wrap gap-3">
                {
                    loading === true ?
                    <>
                        <JobCardLoading />
                        <JobCardLoading />
                        <JobCardLoading />
                        <JobCardLoading />
                        <JobCardLoading />
                    </> :
                    <>
                        {
                            dataArr.slice(0).reverse().map((internship) => {
                                return (
                                    <InternshipCard 
                                        position={internship.internshipTitle} 
                                        cmp={internship.postedByDetails.companyName} 
                                        opn={internship.openings}
                                        sal={internship.stipend.amount}
                                        responsibilities={internship.responsibilities}
                                        perks={internship.perks.split}
                                        key={internship._id}
                                        loc={internship.location}
                                        srId={internship._id}
                                        type={"internship"}
                                        duration={internship.duration}
                                    />
                                )
                            })
                        }
                    </>
                }
            </div>
        </div>
    </div>
    )
}
export default InternshipPage;