import React, { useState } from 'react';
import useTheme from '../../../hooks/useTheme';
import Charcters from './Charcters';
import Cta from './Cta';
import Faq from './Faq';
import Footer from './Footer';
import Hero from './Hero';
import HowToUse from './HowToUse';
import NewsLetter from './NewsLetter';
import Testimonials from './Testimonials';
import Utilise from './Utilise';
import QuizPopUp from '../../modal/quizpopup/QuizPopUp';

const LandingPage = () => {
  const context = useTheme();
  const [showQuiz, setShowQuiz] = useState(true);

  return (
    <div data-theme={context.theme} className={` bg-[#bbb8b81a] `}>
      <Hero />
      <HowToUse />
      <Charcters />
      <Testimonials />
      <Faq />
      <Cta />
      <Utilise />
      <NewsLetter />
      <Footer />
      <QuizPopUp showQuiz={showQuiz} setShowQuiz={setShowQuiz} />
    </div>
  );
};

export default LandingPage;
