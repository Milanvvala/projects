import { useContext } from 'react';
import { Context } from '../Context/mainContext';
import { Card, Modal } from "./";
// import toggleModal from '../utils/modal'

function Explore(props) {
  const { temp } = useContext(Context)
  console.log(temp)
  function refClickx() { temp.modal.current.click() }

  return (
    <>
      <div className="grid">
        {/* <Card /> */}
        <button className="secondary" onClick={refClickx}>click me!</button>
      </div>
      <Modal type='form'/>
      {/* <div className="grid">
        {tools.map((e) => {
          return (<div className="col-md-3 mx-3" key={e._id}>
            <Card tool={e} showAlert={props.showAlert} updateTool={updateTool} />
          </div>)
        })}
      </div> */}
    </>
  )
}
export default Explore