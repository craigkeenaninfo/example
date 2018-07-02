import React from 'react';
import PortfolioExampleModal from './portfolio-example-modal';

class PortfolioExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'modalOpen': false,
      'selectedExample': this.props.work[0]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, example) {
    this.setState({
      'modalOpen': true,
      'selectedExample': example
    });
  }

  closeModal(evt, example) {
    this.setState({
      'modalOpen': false
    });
  }

  render () {
    return (
      <span>
        <section className="oaws-row-padding">

          { this.props.work.map( (example, idx) => {
              return (
                <PortfolioExampleBox example={example} key={idx}
                  openModal={this.openModal}/>
              )
            })
          }
        
        </section>

        <PortfolioExampleModal example={this.state.selectedExample}
          open={this.state.modalOpen} closeModal={this.closeModal}/>
      </span>
    )
  }
}

class PortfolioExampleBox extends React.Component {
  render () {
    let example = this.props.example;
    return (
      <div className="oaws-col l3 m6 oaws-margin-bottom section_exampleBoxWrapper"
        onClick={ (evt) =>  this.props.openModal(evt, example) }>
      <dl className="oaws-display-container">
        <dt className="oaws-display-topleft oaws-black oaws-padding">
          { example.title }
        </dt>
        <img alt={ example.image.desc }
             className="oaws-example-image"
             src={ example.image.src }/>
        <dd></dd>
      </dl>
      </div>
    )
  }
}

export default PortfolioExample;
export { PortfolioExampleBox };
