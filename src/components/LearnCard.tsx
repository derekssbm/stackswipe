import { motion } from "framer-motion";
import React, { useState } from "react";

interface CardProps {
  cardid: number;
  question: string;
  answer: string;
  difficulty: string;
  nextReviewDate: string;
  timesAnsweredCorrectly: number;
}

const LearnCard = ({
  cardid,
  question,
  answer,
  difficulty,
  nextReviewDate,
  timesAnsweredCorrectly,
}: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <>
      <motion.div
        variants={variants}
        animate={isFlipped ? "front" : "back"}
        transition={{ duration: 0.6, flip: Infinity }}
        style={{
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
          rotateY: 180,
        }}
      >
        {isFlipped && (
          <div className="card bg-slate-700 shadow-xl p-0 mx-8 my-6">
            <div
              className="card-body py-2 px-4"
              style={{ overflowY: "auto", maxHeight: "700px" }}
            >
              <h2 className="card-title">Frage</h2>
              <div className="divider m-0"></div>
              <div
                className="mb-4"
                style={{ overflowY: "auto", maxHeight: "460px" }}
              >
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis veritatis soluta pariatur molestiae consectetur at
                  error nisi repellat. Tempore eius distinctio nostrum obcaecati
                  ipsa architecto vel et ab rerum quaerat?Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Blanditiis veritatis soluta
                  pariatur molestiae consectetur at error nisi repellat. Tempore
                  eius distinctio nostrum obcaecati ipsa architecto vel et ab
                  rerum quaerat?Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Blanditiis veritatis soluta pariatur
                  molestiae consectetur at error nisi repellat. Tempore eius
                  distinctio nostrum obcaecati ipsa architecto vel et ab rerum
                  quaerat?Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Blanditiis veritatis soluta pariatur molestiae
                  consectetur at error nisi repellat. Tempore eius distinctio
                  nostrum obcaecati ipsa architecto vel et ab rerum quaerat?
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      <motion.div
        variants={variants}
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6, flip: Infinity }}
        style={{
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
          rotateY: 180,
        }}
      >
        {!isFlipped && (
          <div className="card bg-slate-700 shadow-xl p-0 mx-8 my-6">
            <div
              className="card-body py-2 px-4"
              style={{ overflowY: "auto", maxHeight: "700px" }}
            >
              <h2 className="card-title">Antwort</h2>
              <div className="divider m-0"></div>
              <div
                className="mb-4"
                style={{ overflowY: "auto", maxHeight: "460px" }}
              >
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis veritatis soluta pariatur molestiae consectetur at
                  error nisi repellat. Tempore eius distinctio nostrum obcaecati
                  ipsa architecto vel et ab rerum quaerat?Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Blanditiis veritatis soluta
                  pariatur molestiae consectetur at error nisi repellat. Tempore
                  eius distinctio nostrum obcaecati ipsa architecto vel et ab
                  rerum quaerat?Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Blanditiis veritatis soluta pariatur
                  molestiae consectetur at error nisi repellat. Tempore eius
                  distinctio nostrum obcaecati ipsa architecto vel et ab rerum
                  quaerat?Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Blanditiis veritatis soluta pariatur molestiae
                  consectetur at error nisi repellat. Tempore eius distinctio
                  nostrum obcaecati ipsa architecto vel et ab rerum quaerat?
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      <button className="btn btn-primary mt-10" onClick={handleFlip}>
        Flip
      </button>
    </>
  );
};

export default LearnCard;
