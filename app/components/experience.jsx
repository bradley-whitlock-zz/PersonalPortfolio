import React from 'react'

let items  = {
  tiko : {
    identity: 'tikoNav',
    header: 'Tiko 3D',
    content : 'Created the first automated testing platform for Tiko’s firmware and software. Nightly' +
    ' builds are tests are currently being ran on a Raspberry Pi through a Docker Image at Tiko. ' +
    'Developed a Chatbot for the Tiko website with Node.  Creating a server, using databases and' +
    ' integration with other services API’s were all requirements for creating a user-friendly Chatbot.',
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
    content: 'Honed customer service skills by managing hundreds of consumers daily at theater. ' +
    'Worked 40 – 50 hour weeks at a 5 screen movie theatre, responsible for concessions, cleaning and customer satisfaction.' +
    'Assertively managed a crowd of 500 customers when theatre was at maximum capacity and people were required to exit.',
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
    content: 'Enjoyed creating a functional Scrabble Robot. Tasks included sensing tiles, engineering a ' +
    'claw to pick up tiles, and translational movement in the x, y and z directions to move tiles into the correct location. ' +
    'Created the search algorithm to calculate the highest scoring word for any scrabble hand. ' +
    'Practical experience with a complete engineering project and developed understanding of problems during the design process.',
    align: true,
    style: {
      backgroundImage: 'url(./styles/images/scrabble.jpg',
      backgroundPosition: 'center',
    }
  },
  securitron: {
    idnetity: 'securiTronNav',
    header: 'SecuriTron',
    content: 'Developed a home security lock using hardware such as Arduino, Thomas Edison, Leap Motion and Pebble Watch at U of T hacks. ' +
    'Software implementation through Bluetooth involved JavaScript, Java, Python, Arduino (C), and Node.JS',
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
    content: 'Completed autonomous small-scale fuel cell car. Formulated understanding for fuel cell technology and application of this technology in modern designs. ' +
    'Generated line following algorithm for the car to drive the required courses.',
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
    content: 'Leader of elite volleyball team; led team to 5th place overall in Canada (2015).  Took a lead by example role on an underachieving team and led team/friends to victories across North America.',
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