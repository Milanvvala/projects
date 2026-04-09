import { useContext } from 'react'
import { desktop, mobile, segment } from '../assets'
import Context from '../utils/CreatContext'
import '../styles/topbar.css'

export default function Topbar() {

  const props = useContext(Context)
  const { OpenSidebar } = props

  return (
    <>
      <header>

        <div className="header-wraper">

          <div className='mobile-top'>
            <div className='icon-wraper-topbar flex-center icon-40 mobile-only'>
              <img src={segment} className='segment icon-30' alt='segments' onClick={() => OpenSidebar()} />
            </div>

            <p className='category_title'>Assessment</p>

            <div className='icon-waper mobile-only'>
              <img src={desktop} className='desktop icon-20' alt='desktop' />
            </div>
          </div>

          <div className="header-devider desktop-only" onClick={() => mobileview()}></div>

          <div className='topbar-tabs-mobile'>
            <p className='tab active-tab'>My Assessments</p>
            <p className='tab mobile-only'>Stop Assessments</p>
          </div>
        </div>

        <img src={mobile} className='mobile icon-40 desktop-only' alt='mobile_screen_share' />

      </header>
    </>
  )
}
