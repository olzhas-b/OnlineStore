import React, { Component,useContext } from 'react';
export function withRedirectComponent<T>(Component: React.ComponentType<T>) {
    
   
    return (props: T) => (
      <>
        <header className="app-header">
          HOC
        </header>
        <div className="app-body">
            
          <Component {...props} />
        </div>
      </>);
  }