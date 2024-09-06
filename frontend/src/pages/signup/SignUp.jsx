import GenderCheckbox from "./GenderCheckbox";

//rafce
const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm border border-white/10 rounded-3xl">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up <span className="text-info font-bold">ChatApp</span></h1>

            <form action="">
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text'>
                            Full Name
                        </span>
                    </label>
                    <input type="text" placeholder="Ryan Gosling" className="w-full input input-bordered input-info h-10" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="KD9-3.7" className="input input-bordered input-info w-full h-10" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="input input-bordered input-info w-full h-10" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="input input-bordered input-info w-full h-10" />
                </div>

                {/* GENDER CHECKBOX GOES HERE */}
                <GenderCheckbox />

                <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block">
                    Already have an account?
                </a>

                <div>
                    <button className="btn btn-outline btn-info w-full min-w-96 mt-4">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
};

export default SignUp;

//Starter code for signup component
// import GenderCheckbox from "./GenderCheckbox";

// //rafce
// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
//             <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up <span className="text-info font-bold">ChatApp</span></h1>

//             <form action="">
//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base label-text'>
//                             Full Name
//                         </span>
//                     </label>
//                     <input type="text" placeholder="Ryan Gosling" className="w-full input input-bordered input-info h-10" />
//                 </div>
//                 <div>
//                     <label className="label">
//                         <span className="text-base label-text">Username</span>
//                     </label>
//                     <input type="text" placeholder="KD9-3.7" className="input input-bordered input-info w-full h-10" />
//                 </div>
//                 <div>
//                     <label className="label">
//                         <span className="text-base label-text">Password</span>
//                     </label>
//                     <input type="password" placeholder="Enter Password" className="input input-bordered input-info w-full h-10" />
//                 </div>
//                 <div>
//                     <label className="label">
//                         <span className="text-base label-text">Confirm Password</span>
//                     </label>
//                     <input type="password" placeholder="Confirm Password" className="input input-bordered input-info w-full h-10" />
//                 </div>

//                 {/* GENDER CHECKBOX GOES HERE */}
//                 <GenderCheckbox />

//                 <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block">
//                     Already have an account?
//                 </a>

//                 <div>
//                     <button className="btn btn-outline btn-info w-full min-w-96 mt-4">Sign Up</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// };

// export default SignUp;