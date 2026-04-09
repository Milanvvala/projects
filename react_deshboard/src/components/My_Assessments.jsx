import { useContext } from 'react'
import { chart, filter, plus, search } from '../assets'
import Assessment from './Assessment'
import '../styles/myassessments.css'
import Context from '../utils/CreatContext'

export default function MyAssessments() {
  const props = useContext(Context)
  const { display_style, OpenPopupForm } = props

  return (
    <>
      <div className='my-assessments'>
        <div className='my-assesment-head'>
          <div className='title'>My Assessments</div>

          <div className='icons-collaction mobile-only'>
            <div className='icon-wraper flex-center icon-40'>
              <img src={search} className='icon-22' alt='search' />
            </div>
            <div className='icon-wraper flex-center icon-40'>
              <img src={filter} className='icon-22' alt='filter' />
            </div>
            <div className='icon-wraper flex-center icon-40'>
              <img src={chart} className='icon-22' alt='chart' />
            </div>
          </div>

        </div>

        <div className='assesment-grid'>

          <div className='add flex-column' onClick={() => OpenPopupForm()} >
            <div className='add-button flex-column'>
              <img src={plus} className='plus' alt='add-assessment' />
              <p className='new'>New Assessments</p>
            </div>
            <p className='instruction'>
              From here you can add questions of multiple types like
              MCQs, subjective (text or paragraph)!
            </p>
          </div>

          <Assessment />
          <Assessment />
        </div>

      </div>
    </>
  )
}
