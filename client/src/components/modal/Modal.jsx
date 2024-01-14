//Taylor Zweigle, 2024
import React from "react";

import Button from "../buttons/Button";
import Typography from "../typography/Typography";

const Modal = ({ children, open, hasSecondary, title, action, secondaryAction, onAction, onSecondaryAction, onClose }) => {
  return (
    <div
      className={`fixed flex z-auto left-0 top-0 w-full h-full overflow-auto bg-slate-950/50 dark:bg-slate-500/50 drop-shadow-md ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="m-auto w-128 bg-white dark:bg-slate-900 rounded-lg">
        <div className="flex flex-col gap-8 p-8">
          <Typography variant="title" color="textPrimary">
            {title}
          </Typography>
          {children}
          <div className="flex flex-row justify-end gap-4">
            <Button variant="text" onClick={onClose}>
              Cancel
            </Button>
            {hasSecondary && (
              <Button variant="outlined" onClick={onSecondaryAction}>
                {secondaryAction}
              </Button>
            )}
            <Button variant="contained" onClick={onAction}>
              {action}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
