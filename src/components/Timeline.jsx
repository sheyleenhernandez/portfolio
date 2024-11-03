import React from 'react';

const Timeline = ({ milestones }) => {
    return (
        <ol className="flex items-center justify-center w-full">
            {milestones.map((milestone, index) => (
                <li key={index} className="relative flex flex-col items-center sm:flex-1">
                    <div className="flex items-center w-full">
                        <div className="flex-grow hidden sm:block h-0.5 bg-gray-300"></div>

                        <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full ark:ring-gray-900 shrink-0">
                            <img src={milestone.image} alt={milestone.event} className="w-8 h-8" />
                        </div>

                        <div className="flex-grow hidden sm:block h-0.5 bg-gray-300"></div>
                    </div>

                    <div className="mt-3 text-center sm:px-4">
                        <h3 className="text-lg font-semibold text-gray-300 dark:text-gray-400">{milestone.date}</h3>
                        <p className="text-lg font-normal text-gray-400 dark:text-gray-400">{milestone.event}</p>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default Timeline;
