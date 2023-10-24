import React from 'react';
import Navigation from './navigation/Navigation';
import StatusBarDevice from './components/StatusBarDevice';

function App(): JSX.Element {
  return (
    <>
      <StatusBarDevice/>
      <Navigation/>
    </>
  );
}


export default App;
