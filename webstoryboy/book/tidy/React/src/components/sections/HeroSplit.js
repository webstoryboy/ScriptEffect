import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class HeroSplit extends React.Component {

  state = {
    videoModalActive: false
  }  

  openVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  }

  closeVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  }  

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'hero section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item">
                <div className="hero-content split-item-content center-content-mobile reveal-from-top">
                  <h1 className="mt-0 mb-16">
                    Landing template for startups
                  </h1>
                  <p className="mt-0 mb-32">
                    Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                  </p>
                  <ButtonGroup>
                    <Button tag="a" color="primary" href="https://cruip.com/" wideMobile>
                      Pricing and plans
                    </Button>
                    <Button tag="a" color="dark" href="https://cruip.com/" wideMobile>
                      Learn more
                    </Button>                    
                  </ButtonGroup>
                </div>
                <div className="hero-figure split-item-image split-item-image-fill illustration-element-01 reveal-from-bottom">
                  <a
                    data-video="https://player.vimeo.com/video/174002812"
                    href="#0"
                    aria-controls="video-modal"
                    onClick={this.openVideoModal}
                  >
                    <Image
                      src={require('./../../assets/images/video-placeholder.jpg')}
                      alt="Hero"
                      width={528}
                      height={396} />
                  </a>
                </div>
                <Modal
                  id="video-modal"
                  show={this.state.videoModalActive}
                  handleClose={this.closeVideoModal}
                  video="https://player.vimeo.com/video/174002812"
                  videoTag="iframe" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;