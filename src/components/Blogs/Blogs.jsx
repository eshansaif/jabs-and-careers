import React from 'react';
import DynamicBanner from '../../assets/DynamicBanner';

const Blogs = () => {
    return (
        <div>
            <DynamicBanner pageTitle="Blogs"></DynamicBanner>
            <div className="flex flex-col items-center">

                <div className="max-w-4xl w-full">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-5">
                        {/* <img src="https://via.placeholder.com/800x400" alt="Blog Post" /> */}
                        <div className="p-5">
                            <h2 className="text-xl font-bold mb-2">1. When should you use context API?</h2>
                            <p className="text-gray-700 mb-4">The Context API should be used when someone wants to pass data down the component tree without having to explicitly pass props through every level. This is useful for data that is global or shared across multiple components, such as user authentication status or a theme preference.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-5">
                        {/* <img src="https://via.placeholder.com/800x400" alt="Blog Post" /> */}
                        <div className="p-5">
                            <h2 className="text-xl font-bold mb-2">2. What is a custom hook?</h2>
                            <p className="text-gray-700 mb-4">A custom hook is a JavaScript function that starts with the use keyword and leverages one or more built-in React hooks to provide some reusable functionality to components. Custom hooks can abstract complex logic and state management into a single function that can be used across multiple components.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-5">
                        {/* <img src="https://via.placeholder.com/800x400" alt="Blog Post" /> */}
                        <div className="p-5">
                            <h2 className="text-xl font-bold mb-2">3. What is useRef?</h2>
                            <p className="text-gray-700 mb-4">"useRef" is a built-in React hook that returns a mutable ref object that can be used to store a value that persists across renders. This is useful for accessing and manipulating DOM elements, tracking the previous value of a state or prop, or triggering imperative actions in a functional component.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-5">
                        {/* <img src="https://via.placeholder.com/800x400" alt="Blog Post" /> */}
                        <div className="p-5">
                            <h2 className="text-xl font-bold mb-2">4. What is useMemo?</h2>
                            <p className="text-gray-700 mb-4">"useMemo" is a hook provided by React that allows you to memoize expensive functions so that they are only re-executed when their dependencies change. The useMemo hook takes two arguments: the first is a function that will be executed, and the second is an array of dependencies that will trigger the re-execution of the function if they change. The primary use case for useMemo is to optimize the performance of your React application by avoiding unnecessary re-computations of expensive functions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;