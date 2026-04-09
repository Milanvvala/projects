import { assessment, candidates, glob, purpose } from '../assets'

import '../styles/overview.css'

export default function Overview() {
  return (
    <>
      <div className='overview'>
        <p className='title desktop-only'>Assessments Overview</p>

        <div className='overview-chart'>

          <div className='overview-section-mobile'>
            <div className='overview-section' id='left'>
              <p className='section-title'>Total Assements</p>
              <div className='section-data'>
                <img src={assessment} alt='total-assesment' />
                <p className='numbers'>34</p>
              </div>
            </div>
            <div className='overview-section mobile-only' id='right'>
              <p className='section-title'>Total Purpose</p>
              <div className='section-data'>
                <img src={purpose} alt='total-purpose' />
                <p className='numbers'>11</p>
              </div>
            </div>
          </div>

          <div className='overview-section'>
            <p className='section-title'>Candidates</p>
            <div className='section-data gap'>
              <img src={candidates} alt='total-candidates' />
              <div>
                <div className='overview-data'>
                  <p className='numbers'>11,145</p>
                  <p className='increase'>+89</p>
                </div>
                <p className='number-detail'>Total Candidates</p>
              </div>
              <div className='vertical-devider'></div>
              <div>
                <div className='overview-data'>
                  <p className='numbers'>1,14</p>
                  <p className='increase'>+89</p>
                </div>
                <p className='number-detail'>Who Attamped</p>
              </div>
            </div>
          </div>

          <div className='overview-section' id="bottom">
            <p className='section-title'>Candidates Source</p>
            <div className='section-data gap'>
              <img src={glob} alt='candidates-source' />
              <div>
                <div className='overview-data'>
                  <p className='numbers'>11,000</p>
                  <p className='increase'>+89</p>
                </div>
                <p className='number-detail'>Email</p>
              </div>
              <div className='vertical-devider'></div>
              <div>
                <div className='overview-data'>
                  <p className='numbers'>1,45</p>
                  <p className='increase'>+89</p>
                </div>
                <p className='number-detail'>Social Share</p>
              </div>
              <div className='vertical-devider'></div>
              <div>
                <div className='overview-data' >
                  <p className='numbers'>1,45</p>
                  <p className='increase'>+89</p>
                </div>
                <p className='number-detail'>Unique Link</p>
              </div>
            </div>
          </div>

          <div className='overview-section desktop-only'>
            <p className='section-title'>Total Purpose</p>
            <div className='section-data'>
              <img src={purpose} alt='total-purpose' />
              <p className='numbers'>11</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
