import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RenameDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const RenameDialog: React.FC<RenameDialogProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      isOpen ? dialogRef.current.showModal() : dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
        >
          <dialog
            ref={dialogRef}
            className="modal modal-open bg-base-100 rounded-box shadow"
            onClose={onClose}
          >
            <div className="modal-box ">
              <h3 className="font-bold text-lg">Rename Stack</h3>
              <input
                type="text"
                placeholder="New name"
                className="input input-bordered w-full my-4"
              />
              <div className="modal-action flex justify-between">
                <button className="btn" onClick={onClose}>
                  Submit
                </button>
                <button className="btn" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
            <br></br>
          </dialog>
          <div className="fixed inset-0 bg-black bg-opacity-30"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RenameDialog;
