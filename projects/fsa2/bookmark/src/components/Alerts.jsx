import { useState } from "react"
import '../utils/custom.css'

function Alerts(props) {
  const { massage, type } = props
  const [alert, setalert] = useState({ position: 'fixed', top: '10%', display: 'none' })
  const time = () => {
    setalert({ position: 'fixed', top: '10%' })
    setTimeout(() => {
      setalert({ position: 'fixed', top: '10%', display: 'none' })
    }, 2000)
  }
  return (
    <>
      <button onClick={time}>Alert</button>
      <div style={alert} id='alert'>
        <kbd>
          <span className='closebtn' onClick={time}>&times;</span>
          Danger! <small>Indicates a dangerous or potentially negative action.</small>
        </kbd>
        {/* <kbd style={{ color: 'white', backgroundColor: 'green' }}>Success </kbd>
        <kbd style={{ color: 'black', backgroundColor: 'yellow' }}>Warning !</kbd> */}
      </div>
    </>
  )
}
// style={{ color: 'white', backgroundColor: 'red', display:'none'}}
export default Alerts        