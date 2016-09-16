import React from 'react'

let items  = {
  tiko : {
    identity: 'tikoNav',
    header: 'Tiko 3D',
    content : 'Tiko was great',
    backgroundPhoto: 'url(./styles/images/tikos.jpg',
    style : {
      backgroundImage: 'url(./styles/images/tiko.jpg)',
      backgroundPosition: 'center',
    }
  },
  movies : {
    identity: 'moviesNav',
    header: 'Highland Cinemas',
    content: 'Highland Cinemas was fun',
    backgroundPhoto: 'url(./styles/images/movies.jpg',
    style : {
      backgroundImage: 'url(./styles/images/movies.jpg)',
      backgroundPosition: 'center',
    }
  },
  scrabble : {
    identity: 'scrabbleNav',
    header: 'ScrabbleTron 2020',
    backgroundPhoto: 'url(./styles/images/scrabble.jpg',
    content: 'This was an in class project',
    style: {
      backgroundImage: 'url(./styles/images/scrabble.jpg',
      backgroundPosition: 'center',
    }
  },
  securitron: {
    idnetity: 'securiTronNav',
    header: 'SecuriTron',
    content: 'This was a hack done at U of T',
    backgroundPhoto: 'url(./styles/images/leapMotion.jpg',
    style: {
      backgroundImage: 'url(./styles/images/leapMotion.jpg',
      backgroundPosition: 'center',
    }
  },
  fuelCell : {
    identity: 'fuelCellNav',
    header: 'Fuel Cell Car',
    content: 'This was an in class project',
    backgroundPhoto: 'url(./styles/images/fuelCell.jpg',
    style: {
      backgroundImage: 'url(./styles/images/fuelCell.jpg',
      backgroundPosition: 'center',
    }
  },
  volleyball : {
    identity: 'volleyballNav',
    header: 'Durham Attack Team Captain',
    content: 'Volleyball team captain',
    backgroundPhoto: 'url(./styles/images/volleyball.jpg',
    style: {
      backgroundImage: 'url(./styles/images/volleyball.jpg)',
      backgroundPosition: 'center'
    }
  }
}
class Experience extends React.Component {
  constructor(){
    super()
    this.updateDetails = this.updateDetails.bind(this)
  }
  updateDetails(){
    console.log('should be updating the text')
  }
  render(){
    return(
      <div id="experiencePage">
        <h1 id="experiencePageHeader"> Personal Experience </h1>
        <div id="expNames">
          <ExperienceItems changeDetails={this.updateDetails} data={items.tiko} />
          <ExperienceItems changeDetails={this.updateDetails} data={items.movies} />
          <ExperienceItems changeDetails={this.updateDetails} data={items.scrabble} />
          <ExperienceItems changeDetails={this.updateDetails} data={items.securitron} />
          <ExperienceItems changeDetails={this.updateDetails} data={items.fuelCell} />
          <ExperienceItems changeDetails={this.updateDetails} data={items.volleyball} />
        </div>
        <div id="expDetails">
          <ExperienceDetails data={items.tiko} />
          <ExperienceDetails data={items.movies} />
          <ExperienceDetails data={items.scrabble}/>
          <ExperienceDetails data={items.securitron}/>
          <ExperienceDetails data={items.fuelCell}/>
          <ExperienceDetails data={items.volleyball}/>
        </div>
      </div>
    )
  }
}

class ExperienceItems extends React.Component {
  constructor() {
    super()
    this.update = this.update.bind(this)
  }
  update() {
    console.log('we are updating')
  }
  render(){
    return(
      <a href={`#${this.props.data.identity}`} id="expNameItem" style={this.props.data.style} onClick={this.update}>
        <h1 id="expNameItemHeader">{this.props.data.header}</h1>
      </a>
    )
  }
}

class ExperienceDetails extends React.Component {
  constructor() {
    super()
  }
  render() {
    return(
      <div id={this.props.data.identity} className="experienceListWrapper" style={{backgroundImage : this.props.data.backgroundPhoto}}>
        <h1 className="experienceListHeader">{this.props.data.header}</h1>
        <h2 className="experienceListContent">{this.props.data.content}</h2>
      </div>
    )
  }
}

export default Experience