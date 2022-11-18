import { RiCopyleftLine, RiLink, RiTwitterFill, RiTwitterLine, RiWhatsappFill } from "react-icons/ri";
import { ShareContainer } from "./StyledComponent";


export default function Share() {
  return (
    <ShareContainer>
        <div className="darkBg" />

        <div className="actions">
            <div>
            <RiLink size={30}/>
            Copy Link
        </div>
        <div>
            <RiWhatsappFill color="green" size={30}/>
            Share to Whatsapp
        </div>

        <div>
            <RiTwitterFill color="rgb(10,120,255)" size={30}/>
            Share to Twitter
        </div>
        </div>
        
        
    </ShareContainer>
  )
}
