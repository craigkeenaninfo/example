import React from 'react';

class PortfolioExampleModal extends React.Component {

  render () {
    let example = this.props.example;
    let modalClass = this.props.open ? 'oaws-modal--open' : 'oaws-modal--closed';

    return (
      <div className={"oaws-white " + modalClass}>
        <span className="oaws-cloud oaws-modal__closeButton"
          onClick={this.props.closeModal}>
          <i className="far fa-times-circle"></i>
        </span>
        <img alt={ example.image.desc }
             className="oaws-image"
             src={ example.image.src }/>
        <div className="oaws-cloud oaws-text-dark-grey">
          <h2 className="oaws-border-bottom oaws-border-light-grey oaws-padding-16">
            { example.title }
          </h2>
          <div class="oaws-container oaws-padding-32">
            <a className="oaws-skyBlue oaws-margin-left oaws-button"
              href={ example.href }>
              Learn More
            </a>
          </div>
          <p className="oaws-modal__description">
            { example.desc }
          </p>
        </div>
      </div>
    )
  };
};

export default PortfolioExampleModal;
