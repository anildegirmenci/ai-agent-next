"use client"

import { Doc, Id } from "@/convex/_generated/dataModel";
import { useState } from "react";

interface ChatInterfaceProps {
  chatId: Id<"chats">;
  initialMessages: Doc<"messages">[];
}
function ChatInterface() {
  const [messages, setMessages] = useState<Doc<"messages">[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div>
      Hello!!
    </div>
  )
}

export default ChatInterface
