import React, { useState, useEffect } from 'react'
import JobCard from '../components/Job-Card/JobCard';
import JobCardLoading from '../components/Job-Card/JobCardLoading';
import Axios from 'axios';

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/v1/jobs/findJob`)
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
}

const JobsPage = ({posts}) => {
    const [dataArr, setDataArr] = useState(posts.data);
    const [loading, setLoading] = useState(false);

    // console.log("1234")

    // useEffect(()=>async ()=>{
    //     setLoading(true);
    //     const response = await Axios.get(`https://api.cryptonaukri.com/api/v1/jobs/findJob`)
    //     .then((res)=>{
    //         const resp = res.data;
    //         console.log(resp.data);
    //         setDataArr(resp.data);
    //         setLoading(false);            
    //         console.log("hello");
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //         setLoading(false);
    //     });
    //     console.log("qwert")
    // } ,[]);

    return (

        <div className="pt-24 min-h-[90vh]">
            <div className="text-white p-4 max-w-7xl m-auto">
                <div className="text-white text-lg bg-gray-900 flex justify-center items-center  p-2 w-fit border rounded-md">Discover Jobs</div>
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
                                dataArr.slice(0).reverse().map((job) => {
                                    return (
                                        <JobCard 
                                            position={job.jobTitle} 
                                            cmp={job.postedByDetails.companyName} 
                                            opn={job.openings}
                                            exp={job.experience}
                                            description={job.jobDescription}
                                            perks={job.perks.split}
                                            key={job._id}
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



// ** old material code -- need to be deprecated

// const useStyles = makeStyles((theme) => ({
//     body:{
//         marginTop:'70px'
//     }
// }));


// <div className={classes.body}>
//     <Container>
//         <Box sx={{
//             paddingTop: '20px'
//         }}>
//             <h1 style={{ margin: '10px 0' }}>Discover Jobs</h1>
//             {loading?
//                 <>
//                     <JobCardLoading />
//                     <JobCardLoading />
//                     <JobCardLoading />
//                 </>:<>
//                     {
//                         dataArr.slice(0).reverse().map((job) => {
//                             //console.log(internship);

//                             return( 
//                                 <JobCard 
//                                     position={job.jobTitle} 
//                                     cmp={job.postedByDetails.companyName} 
//                                     opn={job.openings}
//                                     exp={job.experience}
//                                     description={job.jobDescription}
//                                     perks={job.perks.split}
//                                     key={job._id}
//                                     srId={job._id}
//                                     type={"job"}
//                                 />);
//                         })
//                     } 
//             </>}
//         </Box>
//     </Container>
// </div>
