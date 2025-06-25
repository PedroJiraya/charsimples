import { userChat } from "@/contexts/ChatContext"
import { KeyboardEvent, useState } from "react"

type Props = {
    name: string
}






export const ChatInput = ({name}: Props ) => {



    const chatCtx = userChat()
    const [textInput, setTextInput] = useState('')

    const handleSendMsg = (e: KeyboardEvent<HTMLInputElement>)=>{
        if(e.code.toLowerCase() === 'enter'){
            if(textInput.trim() !== ''){
                chatCtx?.addMessage(name, textInput.trim())
                setTextInput('')        
            }
        }
    }
  return (
    <input
     type="text" 
     className="w-full outline-none"
     placeholder={`${name}, digite uma msg e aperte enter`}
     value={textInput}
     onChange={e => setTextInput(e.target.value)}
     onKeyUp={handleSendMsg}
    />
  )
}
