import { brifcase, calendar, link, threedots } from '../assets'
import '../styles/assessment.css'


export default function Assessment() {
  return (
    <>
      <div className='assessment'>


        <div className='assesment-top'>
          <div className='assesment-title'>
            <img src={brifcase} alt='assessment-icon' />
            <div className='assessment-detail'>
              <p className='heading'>Math Assessments</p>
              <div className='details'>
                <p className='subheading'>Job</p>
                <div className='line'></div>
                <div className='date-text'>
                  <img src={calendar} className='cal-icon' />
                  <p className='date'>23 Apr 23</p>
                </div>
              </div>
            </div>
          </div>

          <img src={threedots} className='more-icon icon-30' alt='more-options' />
        </div>

        <div className='hr-devider'></div>

        <div className='assessment-bottom'>

          <div className='dataset'>
            <div className='data'>
              <p className='number'>00</p>
              <p className='tag'>Duration</p>
            </div>
            <div className='data'>
              <p className='number'>00</p>
              <p className='tag'>Questions</p>
            </div>
          </div>

          <div className='social'>
            <button className='share'>
              <img src={link} className='icon-20' alt='share' />
              Share
            </button>
            <div className='profiles'>
              <p className='attendees'>LP</p>
            </div>
            <p className='assessments-num'>+234</p>
          </div>

        </div>
      </div>
    </>
  )
}
