import { useState } from 'react'
import Context from './CreatContext';

const ContextAPI = ({ children }) => {

  const cuticon_path = 'M20.3033 22.071L15 16.7677L9.6967 22.071L7.92893 20.3033L13.2322 15L7.92893 9.69668L9.6967 7.92891L15 13.2322L20.3033 7.92891L22.0711 9.69668L16.7678 15L22.0711 20.3033L20.3033 22.071Z'
  const viweport_width = window.innerWidth;
  console.log(viweport_width)

  let sidebar_display = 'flex'
  if (viweport_width < 376) {
    sidebar_display = 'none'
  }

  const [display_style, set_display_style] = useState('none')
  const [sidebar_style, set_sidebar_style] = useState(sidebar_display)
  const [sidebar_translate, set_sidebar_translate] = useState('0%')

  function OpenPopupForm() {
    console.log('open-popup');
    set_display_style('block')
  }
  function ClosePopupForm() {
    console.log('close-popup')
    set_display_style("none")
  }
  function OpenSidebar() {
    console.log('open-sidebar');
    if (viweport_width < 376) {
      set_sidebar_style('flex')
      set_sidebar_translate('0%')
    }
  }
  function CloseSidebar() {
    console.log('close-sidebar')
    if (viweport_width < 376) {
      set_sidebar_style("none")
    }
  }

  return (
    <Context.Provider value={{ cuticon_path,sidebar_translate, display_style, ClosePopupForm, OpenPopupForm, sidebar_style, CloseSidebar, OpenSidebar }} >
      {children}
    </Context.Provider>
  )
}

export default ContextAPI