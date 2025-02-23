"use client";

interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  handleSend: () => void;
  loading: boolean;
}

const ChatInput = ({
  input,
  setInput,
  handleSend,
  loading,
}: ChatInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex items-center border-t border-gray-300 p-4 bg-white">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your message..."
        className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={loading}
      />
      <button
        onClick={handleSend}
        disabled={loading}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
