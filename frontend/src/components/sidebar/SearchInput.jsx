import { RiSearchEyeFill } from "react-icons/ri";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered input-info w-full m-2"/>
        <RiSearchEyeFill className="text-info text-5xl cursor-pointer"/>
    </form>
  )
}

export default SearchInput

//starter code for search input

// import { RiSearchEyeFill } from "react-icons/ri";
// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//         <input type="text" placeholder="Search..." className="input input-bordered input-info w-full m-2"/>
//         <RiSearchEyeFill className="text-info text-5xl cursor-pointer"/>
//     </form>
//   )
// }

// export default SearchInput