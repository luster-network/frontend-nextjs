import React, { useState, useEffect } from 'react'
import JobCard from './Job-Card/JobCard';
import JobCardLoading from './Job-Card/JobCardLoading';
import Axios from 'axios';

// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/v1/jobs/findJob`)
//     const posts = await res.json()
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
// }

const JobsPage = () => {
    // const classes = useStyles();
    // console.log(posts)
    const [dataArr, setDataArr] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [datarr, setDataArr] = React.useState([]);

    const fetchJobsData = async () => {
        setLoading(true);
        const response = await Axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/v1/jobs/findJob`)
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
        fetchJobsData()
    } ,[]);
    return (

        <div className="pt-4">
            <div className="text-white p-4 max-w-7xl m-auto">
                <div className="text-white text-lg bg-slate-700 flex justify-center items-center  p-2 w-fit border rounded-md">Discover Jobs</div>
                <div className="mt-3 flex flex-col gap-3">
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
                                dataArr.slice(0).reverse().map((job) => {
                                    return (
                                        <JobCard 
                                            // i = {i} 
                                            position={job.jobTitle} 
                                            cmp={job.postedByDetails.companyName} 
                                            opn={job.openings}
                                            exp={job.experience}
                                            sal={job.fixedPay}
                                            description={job.jobDescription}
                                            perks={job.perks.split}
                                            key={job._id}
                                            loc={job.location}
                                            srId={job._id}
                                            type={"job"}
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
export default JobsPage;