import React from 'react'

let items  = {
  tiko : {
    identity: 'tikoNav',
    header: 'Tiko 3D',
    content : 'Tiko was great',
    image: './styles/images/tikos.jpg',
    align: true,
    style : {
      backgroundImage: 'url(./styles/images/tiko.jpg)',
      backgroundPosition: 'center',
    }
  },
  movies : {
    identity: 'moviesNav',
    header: 'Highland Cinemas',
    content: 'Highland Cinemas was fun',
    image: './styles/images/movies.jpg',
    align: false,
    style : {
      backgroundImage: 'url(./styles/images/movies.jpg)',
      backgroundPosition: 'center',
    }
  },
  scrabble : {
    identity: 'scrabbleNav',
    header: 'ScrabbleTron 2020',
    image: './styles/images/scrabble.jpg',
    content: 'This was an in class project',
    align: true,
    style: {
      backgroundImage: 'url(./styles/images/scrabble.jpg',
      backgroundPosition: 'center',
    }
  },
  securitron: {
    idnetity: 'securiTronNav',
    header: 'SecuriTron',
    content: 'This was a hack done at U of T',
    image: './styles/images/leapMotion.jpg',
    align: false,
    style: {
      backgroundImage: 'url(./styles/images/leapMotion.jpg',
      backgroundPosition: 'center',
    }
  },
  fuelCell : {
    identity: 'fuelCellNav',
    header: 'Fuel Cell Car',
    content: 'This was an in class project',
    image: './styles/images/fuelCell.jpg',
    align: true,
    style: {
      backgroundImage: 'url(./styles/images/fuelCell.jpg',
      backgroundPosition: 'center',
    }
  },
  volleyball : {
    identity: 'volleyballNav',
    header: 'Durham Attack Team Captain',
    content: 'Volleyball team captain',
    image: './styles/images/volleyball.jpg',
    align: false,
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
        <a href='#experiencePageHeader' id="expNameItem" >
          <h1 id="expNameItemHeader">Back To Top</h1>
        </a>
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
    let content = null
    if (this.props.data.align){
      content = (
        <div id={this.props.data.identity} className="experienceListWrapper">
          <h2 className="experienceListHeaderLeft">{this.props.data.header}</h2>
          <h3 className="experienceListContentLeft">{this.props.data.content}</h3>
          <img src={this.props.data.image} alt="Photo for workplace" className="leftImageExperience"/>
        </div>
      )
    } else {
      content = (
        <div id={this.props.data.identity} className="experienceListWrapper">
          <img src={this.props.data.image} alt="Photo for workplace" className="rightImageExperience"/>
          <h2 className="experienceListHeaderRight">{this.props.data.header}</h2>
          <h3 className="experienceListContentRight">{this.props.data.content}</h3>
        </div>
      )
    }
    return( content )
  }
}

export default Experience