//rafce
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-3xl shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm border border-white/10">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                Login
                <span className="text-info font-bold"> ChatApp</span>
            </h1>
            <form>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text'>
                            Username
                        </span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="input input-bordered input-info w-full max-w-xs" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="input input-bordered input-info w-full max-w-xs" />
                </div>
                <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                    {"Don't"} have an account?
                </a>

                <div>
                    <button className="btn btn-outline btn-info w-full max-w-xs mt-4">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login;

// //STARTER CODE
// //rafce
// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//           <div className="w-full p-6 rounded-sm shadow-md bg-grey-0 bg-clip-padding border border-white backdrop-filter backdrop-blur-sm bg-opacity-90">
//               <h1 className="text-3x1 font-semibold text-center text-gray-300">
//                   Login
//                   <span className="text-info"> ChatApp</span>
//               </h1>
//               <form action="">
//                   <div>
//                       <label className="label p-2">
//                           <span className='text-base label-text'>
//                               Username
//                           </span>
//                       </label>
//                       <input type="text" placeholder="Enter Username" className="input input-bordered input-info w-full max-w-xs" />
//                   </div>
//                   <div>
//                       <label className="label">
//                           <span className="text-base label-text">Password</span>
//                       </label>
//                       <input type="password" placeholder="Enter Password" className="input input-bordered input-info w-full max-w-xs" />
//                   </div>
//                   <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                       {"Don't"} have an account?
//                   </a>
  
//                   <div>
//                       <button className="btn btn-outline btn-info w-full max-w-xs mt-4">Login</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
  
//   export default Login