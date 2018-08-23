import React, {Component} from 'react'
import component_styling from './component_styling.css'

class Videos extends React.Component {
  render (){
    return(
      <div className="page-div">
        <div className='iframe-div'>
          <iframe width="560" className='app-iframe' height="315" src="https://www.youtube.com/embed/YGI3FfOw1PA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <iframe width="560" className='app-iframe' height="315" src="https://www.youtube.com/embed/T0313oMMVgM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <iframe width="560" className='app-iframe' height="315" src="https://www.youtube.com/embed/AimiPQc_zJs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <iframe width="560" className='app-iframe' height="315" src="https://www.youtube.com/embed/d71bGGjwr4w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <iframe width="560" className='app-iframe' height="315" src="https://www.youtube.com/embed/oYQchaypUJM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}

export default Videos
