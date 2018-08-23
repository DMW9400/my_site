import React, {Component} from 'react'
import component_styling from './component_styling.css'


class Home extends React.Component {
  render(){
    return(
      <div className="bio-div">
        <p className="bio-p"> I have always had a love of technology and slick user interfaces. After graduating from Tufts University with a degree in English I worked several jobs in publishing, the non-profit sector, and education. After spending several years as a grant director in Memphis, Tennessee, I decided to switch up my career path and push myself towards web development. After graduating from the Flatiron School, I'm ready to take my skills to the next level. </p>
        <div className='icons-div'>
          <a href="https://github.com/DMW9400?tab=repositories" target="_blank"><img src="http://www.joeyism.com/images/octocat.png"/></a>
          <a href="mailto:dmw9400@gmail.com" target="_blank"><img src="https://amigostranslate.com.au/wp-content/uploads/2016/07/email-icon.png"/></a>
        </div>

      </div>
    )
  }

}

export default Home
