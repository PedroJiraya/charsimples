import { useUser } from "@/contexts/UsersContext"
import { NameInput } from "./NameInput"
import { ChatInput } from "./ChatInput"
import { ChatMessagens } from "./ChatMessagens"

export const Chat = () => {

    // passo 1: saber o nome do usuario
    // passo 2: historico de msg aparecendo
    // passo 3: input de adiconar msg 

    const userCtx = useUser()

    if(!userCtx) return null
    if(!userCtx.user) return <NameInput/>
    
  return (
    <div className="border border-white/30 rounded-md">
        <div className="h-96 p-3 overflow-y-scroll custom-scroll">
            <ChatMessagens/>
        </div>
        <div className="border-t border-t-white/30 p-3">
            <ChatInput name={userCtx.user}/>
        </div>
        <div className="border-t border-t-white/30 p-3">
            <ChatInput name={'Bot'}/>
        </div>
    </div>
  )
}
