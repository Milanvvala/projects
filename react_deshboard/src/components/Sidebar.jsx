import { useContext } from 'react'
import { admin_meds, cut, dashboard, note, quiz } from '../assets'
import Context from '../utils/CreatContext'
import '../styles/sidebar.css'

export default function Sidebar() {

  const props = useContext(Context)
  const { sidebar_style, CloseSidebar, sidebar_translate } = props

  return (
    <>
      <aside className='sidebar' style={{ display: sidebar_style, translate:sidebar_translate }}>

        <div>
          <div className='sidebar-head mobile-only'>
            <p className='sidebar-title'>Menu</p>
            <img src={cut} className='close-icon' alt='close' onClick={() => CloseSidebar()} />
          </div>
          <div className='item'>
            <img src={dashboard} className='sidebar_icon icon-20' alt='dashboard' />
            <p>Dashboard</p>
          </div>
          <div className='active item'>
            <img src={note} className='sidebar_icon icon-20' alt='note' />
            <p>Assessments</p>
          </div>
          <div className='item'>
            <img src={quiz} className='sidebar_icon icon-20' alt='quiz' />
            <p>My Library</p>
          </div>
        </div>

        <div className='horizontal-devider'></div>

        <div className='status_menu'>
          <p className='status'>Admin</p>
          <div className='item'>
            <img src={admin_meds} className='sidebar_icon icon-20' alt='admin-meds' />
            <p>Round Status</p>
          </div>
        </div>

      </aside>
    </>
  )
}
