"use client"

import { Chat } from "@/components/Chat";
import { ChatProvider, userChat } from "@/contexts/ChatContext";
import { UserProvider, useUser } from "@/contexts/UsersContext";


export default function Home() {

  const userCtx = useUser()
  const chatCtx = userChat()

  return (
    <div className="container mx-auto max-w-lg px-2">
      <UserProvider>
        <ChatProvider>
        <h1 className="text-3xl my-3 text-center">Chat Simples</h1>

        <Chat/>
        </ChatProvider>
      </UserProvider>
    </div>
  );
}
