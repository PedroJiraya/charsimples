import { userChat } from "@/contexts/ChatContext"
import { useUser } from "@/contexts/UsersContext"

export const ChatMessagens = () => {

    const chatCtx = userChat()
    const userCtx = useUser()

  return (
    <div className="flex flex-col gap-1">
        {chatCtx?.chat.map(i =>(
            <div
             key={i.id}
             className={`border border-white/20 rounded-md p-2 text-sm min-w-50 ${i.user === userCtx?.user? 
                'self-end bg-white/10'
                    :
                'self-start bg-white/5'
             }`}
            >
                <div className="font-bold ">
                    {i.user}
                </div>
                <p>
                    {i.text}
                </p>
            </div>
        ))}
    </div>
  )
}
