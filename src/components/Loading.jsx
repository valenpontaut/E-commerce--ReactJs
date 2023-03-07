//This component is the loader while we wait for data to load

import { AbsoluteCenter } from "@chakra-ui/react"
import loading from '../img/loading.gif'

const Loading = ({setLoading}) => {
  return(
    <AbsoluteCenter>
      <img src={loading} alt='loading...'/>
    </AbsoluteCenter>
  )
}

export default Loading