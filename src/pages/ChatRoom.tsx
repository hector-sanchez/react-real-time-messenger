import ChatMessageForm from "../components/ChatMessageForm";
import ChatMessages from "../components/ChatMessages";
import { useChatStore } from "../store/chatStore";

export default function ChatRoom() {
  const { user, currentRoom }  = useChatStore();

  if (!currentRoom) {
    return <p>Please join or create a room.</p>
  }

  return (
    <div className="conv">
      <div className="conv-title">
        {currentRoom.name} - {user?.email}
      </div>

      <div className="conv-timeline">
        <ChatMessages />
      </div>
      <div className="conv-send-message">
        <ChatMessageForm />
      </div>
    </div>
  );
}
