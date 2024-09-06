import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[600px] flex flex-col">
        <>
        {/* Header */}
            <div className="bg-slate-500 px-4 py-2 mb-2">
                <span className="label-text text-black"> To : </span>
                <span className="text-gray-900 font-bold">Ryan Gosling</span>
            </div>

            <Messages />
            {/* <MessageInput /> */}
        </>
    </div>
  )
}

export default MessageContainer;
