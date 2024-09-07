import MessageInput from "./MessageInput";
import Messages from "./Messages";
import {TiMessages} from "react-icons/ti";

const MessageContainer = () => {
  const nochatSelected = true;
  return (
    <div className="md:min-w-[600px] flex flex-col">
        {nochatSelected?(
            <NoChatSelected/>
        ) : (
          <>
          {/* Header */}
              <div className="bg-slate-500 px-4 py-2 mb-2">
                  <span className="label-text text-black"> To : </span>
                  <span className="text-gray-900 font-bold">Ryan Gosling</span>
              </div>

              <Messages />
              <MessageInput />
          </>
        )}
    </div>

  )
}

export default MessageContainer;

const NoChatSelected = ()=>{
  return(
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Ryan Gosling 🌆</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  );
};

//STARTER CODE SNIPPET

// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[600px] flex flex-col">
//         <>
//         {/* Header */}
//             <div className="bg-slate-500 px-4 py-2 mb-2">
//                 <span className="label-text text-black"> To : </span>
//                 <span className="text-gray-900 font-bold">Ryan Gosling</span>
//             </div>

//             <Messages />
//             <MessageInput />
//         </>
//     </div>
//   )
// }

// export default MessageContainer;
