import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import LearnCard from "./LearnCard";
import PlaceholderCard from "./PlaceholderCard";
// ... other imports

interface CardProps {
  cardid: number;
  question: string;
  answer: string;
  difficulty: string;
  nextReviewDate: string;
  timesAnsweredCorrectly: number;
}

interface Props {
  cards: CardProps[];
}

const swipeVariants = {
  initial: {
    x: 0,
    ease: "ease",
    opacity: 0.9,
    scale: 0.9,
  },
  newCard: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  swipeLeft: {
    x: "-100vw",
    y: 20,
    //ease: "easeIn",
    rotate: -10,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  swipeRight: {
    x: "100vw",
    y: 20,
    //ease: "easeIn",
    rotate: 10,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const CardSwiper = ({ cards }: Props) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [direction, setDirection] = useState<string>("initial");
  const [isFlipped, setIsFlipped] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);

  // Event handler for swiping the card
  const handleSwipe = (correct: boolean) => {
    setIsFlipped(false);
    setDirection(correct ? "swipeLeft" : "swipeRight");
    setAnsweredCount((prev) => prev + 1); // Increment answered count
  };

  const isLastCard = currentCardIndex === cards.length - 1;

  useEffect(() => {
    if (direction !== "initial") {
      const timeout = setTimeout(() => {
        if (!isLastCard) {
          setCurrentCardIndex((prev) => (prev + 1) % cards.length);
        }
        setDirection("initial"); // Reset the direction after the animation
      }, 500); // Timeout duration should match the animation duration

      return () => clearTimeout(timeout);
    }
  }, [direction, cards.length, currentCardIndex, isLastCard]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    //console.log(cards);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(true), // Considered as 'Correct'
    onSwipedRight: () => handleSwipe(false), // Considered as 'Incorrect'
    preventScrollOnSwipe: true,
  });

  return (
    <div className="flex flex-col justify-center">
      <div
        className="card-container"
        style={{ position: "relative", height: "560px" }}
      >
        {" "}
        {/* Adjust the height to match your card size */}
        <AnimatePresence>
          {!isLastCard ? (
            cards.map(
              (card, index) =>
                index === currentCardIndex && (
                  <motion.div
                    key={card.cardid}
                    {...handlers}
                    variants={swipeVariants}
                    initial="initial"
                    animate="newCard"
                    exit={direction}
                    style={{
                      position: "absolute",
                      width: "100%",
                      top: 0,
                      left: 0,
                      zIndex: -index,
                    }}
                  >
                    <LearnCard {...card} isFlipped={isFlipped} />
                  </motion.div>
                )
            )
          ) : (
            <motion.div
              key="placeholder"
              variants={swipeVariants}
              initial="initial"
              animate="newCard"
              style={{ position: "absolute", width: "100%", top: 0, left: 0 }}
            >
              <PlaceholderCard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-center space-x-12 mt-4 mb-8">
        <button
          className="btn btn-circle btn-outline btn-lg btn-success"
          onClick={() => handleSwipe(true)}
        >
          <i className="placeholder-icon">✅</i>
        </button>

        <button
          className="btn btn-circle btn-outline btn-lg btn-info"
          onClick={handleFlip}
        >
          <i className="placeholder-icon">🔍</i>
        </button>

        <button
          className="btn btn-circle btn-outline btn-lg btn-error"
          onClick={() => handleSwipe(false)}
        >
          <i className="placeholder-icon">❌</i>
        </button>
      </div>
    </div>
  );
};

export default CardSwiper;
