import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselItems: [],
      selecteImageIndex: 0,
    }
    this.selectedImage = this.selectedImage.bind(this)
  }
  componentDidMount(){
    this.setState({ carouselItems: carouselData})
  }

  leftClick = () => {
    this.setState(state => {
      return {
        selectedImageIndex: state.selectedImageIndex === 0
          ? state.carouselItems.length - 1
          : --state.selectedImageIndex
      }
    })
  }

  rightClick = () => {
    this.setState(state => {
      return {
        selectedImageIndex: state.selectedImageIndex === state.carouselItems.length - 1
          ? 0
          : ++state.selectedImageIndex
      }
    })
  }

  selectedImage = () => {
    const { carouselItems, selectedImageIndex } = this.state
    return <img
      src={carouselItems[selectedImageIndex]}
      alt="None Available"
      style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}