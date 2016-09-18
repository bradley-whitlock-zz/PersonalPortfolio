import React from 'react'

let items  = {
  tiko : {
    identity: 'tikoNav',
    header: 'Tiko 3D',
    content : 'Created the first automated QA for Tiko’s firmware and software. Nightly' +
    ' tests continue to be run nightly on a Raspberry Pi through a Docker Image at Tiko.' +
    ' During my time at Tiko I also Developed a Chatbot for Tiko\'s website.  The platform of choice was Node; it' +
    ' was used to create a server, efficient database management and' +
    ' easy integration with other API’s. My time at Tiko was exciting, educational and an overall great experience.',
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
    content: 'Honed customer service skills by managing hundreds of consumers daily at this independent 5 screen theater.' +
    ' While working upwards of 45 hour weeks I became responsible for concessions, customer satisfaction, managing crowds of hundreds of people and food preparation.' +
    ' I also developed my fabrication and design skills while performing maintenance and construction in and out of the theaters.',
    image: './styles/images/movies.jpg',
    align: false,
    style : {
      backgroundImage: 'url(./styles/images/movies.jpg)',
      backgroundPosition: 'center',
    }
  },
  scrabble : {
    identity: 'scrabbleNav',
    header: 'ScrabbleTron',
    image: './styles/images/scrabble.jpg',
    content: 'Enjoyed being part of a team that created a Scrabble Robot. Tasks included using color sensors, engineering a' +
    ' claw to pick up tiles, and translational movement in all directions to move tiles into the correct location.' +
    ' Created an algorithm to calculate the best word for any scrabble hand.' +
    ' Gained practical experience with a complete engineering project and developed understanding of problems and solutions during the design process.',
    align: true,
    style: {
      backgroundImage: 'url(./styles/images/bwscrabble2.jpg',
      backgroundPosition: 'center',
    }
  },
  securitron: {
    idnetity: 'securiTronNav',
    header: 'SecuriTron',
    content: 'At University of Toronto Hacks, out team developed a home security lock using hardware such as Arduino, Thomas Edison boards, Leap Motion and a Pebble Watch.' +
    ' Software implementation and bluetooth communication involved JavaScript, Java, Python, C, and Node.',
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
    content: 'Hands on work with an autonomous small-scale fuel cell car. Formulated understanding for fuel cell technology and application in modern designs.' +
    ' Developed a line following algorithm for the fuel cell car to navigate through various courses.',
    image: './styles/images/fuelCell.jpg',
    align: true,
    style: {
      backgroundImage: 'url(./styles/images/bwfuelcell.jpg',
      backgroundPosition: 'center',
    }
  },
  volleyball : {
    identity: 'volleyballNav',
    header: 'Durham Attack Team Captain',
    content: 'Captain of an elite indoor volleyball team. After practicing and competing with the team for 10 hours per week, I led' +
    ' the team to a 5th place overall finish in the 2016 Canadian Volleyball Championships.  Used a "Participative" leadership approach with' +
    ' the team and led my friends to victories against teams from across North America.',
    image: './styles/images/volleyball.jpg',
    align: false,
    style: {
      backgroundImage: 'url(./styles/images/bwvolleyball.png)',
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
        <h1 id="experiencePageHeader"> PERSONAL EXPERIENCE </h1>
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