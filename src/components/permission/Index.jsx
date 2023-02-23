import React,{useState} from 'react'
import Grant from './Grant'
import Permission from './Permission'

const Index = () => {
    const [permission, setPermission] = useState('')

  return (
    <div>
        {permission? (<Grant onClickgrant={() => setPermission((prev) => !prev)} />): (<Permission onClickgrant={() => setPermission((prev) => !prev)} />)}

    </div>
  )
}

export default Index