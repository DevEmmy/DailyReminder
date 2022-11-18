import { Modal } from '@mantine/core'
import { DeleteContainer, InlineFlex, Text } from './StyledComponent'

const Delete = () => {
  return (
    <Modal
    onClose={()=>{}}
    opened={true}
    size="%"
    style={{ marginLeft: 0, marginTop: "60px"}}
    >
       <DeleteContainer>
            <Text fontSize="25px">Are you sure you want to delete this Reminder</Text>

            <InlineFlex>
                <div className="yes">
                Yes
            </div>

            <div className="no">
                No
            </div>
            </InlineFlex>
            
       </DeleteContainer>
    </Modal>
  )
}

export default Delete