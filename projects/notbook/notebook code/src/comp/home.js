import React, { useContext } from 'react';  import Notes from './notes'

export default function Home(props) { const {showAlert} = props;
  return (<><Notes showAlert={showAlert}/></>)
}