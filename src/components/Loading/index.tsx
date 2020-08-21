import React from 'react';
import Lottie from 'lottie-react-web'

import loadingAnimation from '../../assets/loadingAnimation.json'

const loadingAnimationOptions = {
  loop:true,
  autoplay: true,
  speed:10,
  animationData: loadingAnimation,
  rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
  }
}

const Loading: React.FC = () => {
  return <Lottie options={loadingAnimationOptions} width={400} height={400} /> ;
}

export default Loading;