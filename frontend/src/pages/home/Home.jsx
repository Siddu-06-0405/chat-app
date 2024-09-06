import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

//rafce
const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden backdrop-filter backdrop-blur-sm border border-white/10'>
        <Sidebar />
        <MessageContainer />
    </div>
  )
}

export default Home;
