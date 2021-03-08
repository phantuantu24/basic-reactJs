import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {

  const userName = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
      {/* Normal way */}
      {/* <UserContext.Consumer>
        {
          (userValue) => (
            <div>
              <h3>Component F received userName variable from Component App: <h2>{userValue}</h2></h3>
              <ChannelContext.Consumer>
                {
                  (channel) => (
                    <h3>Component F received channel variable from Component App: <h2>{channel}</h2></h3>
                  )
                }
              </ChannelContext.Consumer>
            </div>
          )
        }
      </UserContext.Consumer> */}
      
      <h3>
        I'm using useContext for getting value more easier and more simpler
        <h2>Username: {userName} <br/> Channel Value: {channel}</h2>
      </h3>
    </div>
  )
}

export default ComponentF
