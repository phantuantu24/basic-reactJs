import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
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
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
