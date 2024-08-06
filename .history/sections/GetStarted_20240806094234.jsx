'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';

const GetStarted = () => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaversus Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.slice(0, expanded ? startingFeatures.length : 3).map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature}
              />
            ))}
          </div>
          <button 
            onClick={handleReadMore}
            className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg self-start hover:bg-blue-700 transition duration-300"
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
