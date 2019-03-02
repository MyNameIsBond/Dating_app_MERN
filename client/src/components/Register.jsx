import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RegisterFormFirstPage from './introduction1'
import RegisterFormSecondPage from './introduction2'
import RegiserLastPage from './Introduction3'
import { Carousel } from 'react-materialize'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  welcome() {
    return (
      <Carousel options={{ fullWidth: true, indicators: true }}>
        <div className="carousel-div">
          <div className="img-div">
            <img src={require('../icons/location.png')} alt="" />
            <h2 className="">Best matches around</h2>
            <p className="grey-text">
              According to your location and your preferences, People will be waiting.
            </p>
          </div>
        </div>
        <div className="carousel-div">
          <div className="img-div">
            <img src={require('../icons/messages.png')} alt="" />
            <h2 className="text-div">Innovating messaging</h2>
            <p className="grey-text text-div">The coolest features and the most secure chatting</p>
          </div>
        </div>

        <div className="carousel-div">
          <div className="img-div">
            <img src={require('../icons/green-icon-cloud.png')} alt="" />
            <h2> The choice is yours</h2>
            <p className="grey-text">You decide which sent pictures to be saved</p>
          </div>
        </div>
        <div className="carousel-div">
          <div className="img-div">
            <img src={require('../icons/phone.png')} alt="" />
            <h2>Comming soon!</h2>
            <p className="grey-text">
              We are working hard for you to have access in Andoid and iOS.
            </p>
          </div>
        </div>
      </Carousel>
    )
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div className="container">
        <this.welcome />
        {page === 1 && <RegisterFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <RegisterFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} />
        )}
        {page === 3 && <RegiserLastPage previousPage={this.previousPage} onSubmit={onSubmit} />}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm
