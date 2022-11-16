import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'

const agents = () => {
  const {data:session, status} = useSession()

  if(status === 'authenticated'){
    return(
        <div>
          <p> Welcome {session.user.name}</p>
        </div>
    )
  }else{
    return(
      <div>
        <p>You re not signed in</p>
      </div>
    )
  }
  
}

export default agents


export const getServerSideProps = async(context)=>{
  const session = await getSession(context)

  if(!session){
    return{
      redirect:{
        destination: '/signup'
      }
    }
  }
  return{
    props: {session}
  }
}