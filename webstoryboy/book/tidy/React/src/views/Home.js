import React from 'react';
import HeroSplit from '../components/sections/HeroSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesTabs from '../components/sections/FeaturesTabs';
import News from '../components/sections/News';
import Roadmap from '../components/sections/Roadmap';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSplit hasBgColor invertColor />
        <FeaturesTiles />
        <FeaturesTabs topDivider bottomOuterDivider />
        <News className="illustration-section-01" />
        <Roadmap topOuterDivider />
        <Pricing hasBgColor pricingSlider />
        <Cta hasBgColor invertColor split />
      </React.Fragment>
    );
  }
}

export default Home;