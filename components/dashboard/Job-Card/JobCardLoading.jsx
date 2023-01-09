import React from "react";

const JobCardLoading = () =>{

    return (
        <div className="animate-pulse h-60 flex flex-col justify-between grow shrink basis-80 py-3 px-2 border border-gray-500 rounded-lg">
            <div>
                <div className="w-1/2 h-4 bg-indigo-700 rounded-md"></div>
                <div className="mt-2 w-1/4 h-4 bg-indigo-700 rounded-md"></div>
                <div className="w-full h-3 mt-4 bg-indigo-700 rounded-md"></div>
                <div className="w-full h-3 mt-2 bg-indigo-700 rounded-md"></div>
                <div className="w-1/2 h-3 mt-2 bg-indigo-700 rounded-md"></div>
                <div className="w-1/4 h-3 mt-2 bg-indigo-700 rounded-md"></div>
            </div>
            <div className="mt-2 flex justify-between items-center">
                <div className="w-1/3">
                    <div className="w-1/3 h-3 bg-indigo-700 rounded-md"></div>
                    <div className="w-1/3 h-3 bg-indigo-700 rounded-md mt-1"></div>
                </div>
            </div>
        </div>
    );
}

export default JobCardLoading;