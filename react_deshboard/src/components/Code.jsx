import React from 'react'

export default function SourceCode() {
  const github_link = 'https://github.com/Milanvvala/react-dashboard'

  const sourcecodestyle = {
    'position': 'fixed',
    'zIndex': 9999,
    'right': 0,
    'bottom': 0,
    'backgroundColor': '#0073e6',
    'padding': '20px ',
    'width': '200px',
    'fontSize': '20px',
    'fontWeight': '700',
    'borderRadius': '12px 0 0 0'
  }

  return (
    <>
      <div style={sourcecodestyle}>
        <a href={github_link} target='_blank' style={{ 'color': '#fff', }}>Source Code</a>
      </div>
    </>
  )
}
