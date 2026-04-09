import { useContext } from 'react';
import Context from '../utils/CreatContext';
import '../styles/popupform.css'

export default function PopupForm() {
  const props = useContext(Context)
  const { cuticon_path, display_style, ClosePopupForm } = props

  return (
    <>
      <div className='overlay' style={{ display: display_style }} onClick={() => ClosePopupForm()}></div>

      <div className='popupform' style={{ display: display_style }}>

        <div className='form-head' >
          <div>
            <p className='desktop-only'>Sub-Section Details</p>
            <p className='mobile-only'>Create new assessment</p>
          </div>
          <div className="closeicon-wraper flex-center" onClick={() => ClosePopupForm()}>
            <svg className='cuticon' width="30" alt='close' height="30" viewBox="0 0 30 30" >
              <path d={cuticon_path}></path>
            </svg>
          </div>
        </div>

        <form>

          <label>
            Name of Assessment
            <input type='text' placeholder='Type Hear' />
          </label>

          <label>
            Perpose of the test is
            <select className="custom-select" name='perpose'>
              <option value='select' preselected="true">select</option>
              <option value='option_1'>op1</option>
              <option value='option_2'>op2</option>
            </select>
          </label>

          <label >
            Description
            <select className="custom-select" name='description' >
              <option value='select' preselected="true">select</option>
              <option value='option_1'>op1</option>
              <option value='option_2'>op2</option>
            </select>
          </label>
          <label>
            Skills
            <div className='categories border'>
              <div className='selected-cat'>
                <p>UI/UX and Design</p>
                <svg className='cuticon' width="18" height="18" viewBox="0 0 30 30" >
                  <path d={cuticon_path}></path>
                </svg>
              </div>
              <div className='selected-cat'>
                <p>UI/UX and Design</p>
                <svg className='cuticon' width="18" height="18" viewBox="0 0 30 30" >
                  <path d={cuticon_path}></path>
                </svg>
              </div>
              <div className='selected-cat'>
                <p>Web Devlopment</p>
                <svg className='cuticon' width="18" height="18" viewBox="0 0 30 30" >
                  <path d={cuticon_path}></path>
                </svg>
              </div>
              <div className='selected-cat'>
                <p>Web Devlopment</p>
                <svg className='cuticon' width="18" height="18" viewBox="0 0 30 30" >
                  <path d={cuticon_path}></path>
                </svg>
              </div>
              <div className='selected-cat'>
                <p>No of Questions</p>
                <svg className='cuticon' width="18" height="18" viewBox="0 0 30 30" >
                  <path d={cuticon_path}></path>
                </svg>
              </div>
            </div>
            <input className='skills' type='text' placeholder='Type Hear' />
          </label>

          <label className='duration-input'>
            Duration of Assessment
            <input type='text' placeholder='HH:MM:SS' />
          </label>

        </form>

        <div className="form-footer">
          <button type='submit'>Save</button>
        </div>

      </div>

    </>
  )
}
