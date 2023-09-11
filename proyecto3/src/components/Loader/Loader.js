import React, { Component } from 'react'
import './styles.css'

class Loader extends Component {
  constructor(props){
    super(props)
    this.state={
        movieData:[]
    }
  }

  render(){
    console.log('props del container', this.props.movies)
    return (
            <div className='container'>
              <div id='load'></div>
          </div> 
        
    )
  }
}
export default Loader

