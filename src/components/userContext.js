import React from 'react'

// CodeEvolution is default value (either or not)
const UserContext = React.createContext('CodeEvolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

//Use it at Component E
export default UserContext