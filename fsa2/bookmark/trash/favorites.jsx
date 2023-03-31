import React, { useState, useEffect } from 'react'
import ToolCard from './toolcard'

function Favorites(props) {

  // let s = [{ "albumId": 1, "id": 1, "title": "accusamus beatae ad facilis cum similique qui sunt", "url": "https://via.placeholder.com/600/92c952", "thumbnailUrl": "https://via.placeholder.com/150/92c952" }]
  const tool = [{}]
  console.log(tool);
  // const [toolElement, setelement] = useState({title:"", description:"", id:"", path:"", fevicon:""})

  const [tools, setTools] = useState([])
  const APIurl = "https://jsonplaceholder.typicode.com/photos/10";
  useEffect(() => {
    fetch(APIurl)
      .then(response => response.json())
      .then(json => setTools(json))
    console.log("useEffect")
  }, [])
  // console.log(tools);
  const toolsArray = [tools];
  //.map is only applicable to array not object , this resolves .map is not a function error 
  // console.log(toolsArray);
  return (
    <><div className="m-5">
      <div className='d-none'>Favorites</div>
      <div className="row">
        {toolsArray.map((toolElement) => {
          return (
            <div className="col-md-3 mx-3" key={toolElement.id}>
              <ToolCard tool={toolElement} />
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default Favorites