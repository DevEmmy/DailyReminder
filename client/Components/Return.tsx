import Link from "next/link"
import { RiArrowLeftLine } from "react-icons/ri"
import { ReturnContainer } from "./StyledComponent"

const Return = () => {
  return (
    <Link href={"/"}>
        <ReturnContainer>
            <RiArrowLeftLine size={20}/>
        </ReturnContainer>
    </Link>
    
  )
}

export default Return