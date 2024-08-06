'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';

const WhatsNew = () => {
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
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| Whats new?" />
          <TitleText title={<>What's new about Metaversus?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.slice(0, expanded ? newFeatures.length : 3).map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
          <button 
            onClick={handleReadMore}
            className="mt-4 py-2 px-4 bg-gradient-to-r from-purple-400 to-purple-700 text-white rounded-lg self-start hover:from-purple-500 hover:to-purple-800 transition duration-300"
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        </motion.div>

        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/whats-new.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
