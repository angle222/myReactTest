import React from 'react'

const Context = React.createContext();
console.log(Context)
const Provider = Context.Provider;
const Consumer = Context.Consumer;
export {
  Provider,Consumer
}