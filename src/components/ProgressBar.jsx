import React from "react";

const ProgressBar = ({ data }) => {
    return (

        <div className="grid grid-cols-2 gap-10 px-20">
            {data.map((data, index) =>(
                
                <div key={index} >
                    <div className="flex justify-between mb-3">
                        <span className="text-base font-medium text-gray-300 dark:text-white">
                            {data.title}
                        </span>
                        <span className="text-sm font-medium text-gray-300 dark:text-white">
                            {data.progress}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-golden h-2.5 rounded-full"
                            style={{ width: data.progress }}
                        ></div>
                    </div>

                </div>


            ))}

        </div>
    );
};

export default ProgressBar;
