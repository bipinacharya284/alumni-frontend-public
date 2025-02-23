const MessageBubble = ({ text, sender }: any) => (
  <div
    className={`my-2 p-3 rounded-lg w-fit max-w-[75%] shadow-md ${
      sender === "user"
        ? "bg-blue-500 text-white ml-auto"
        : "bg-gray-300 text-black"
    }`}
  >
    {text}
  </div>
);

export default MessageBubble;
