import React from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close'
import { useStylesSignIn } from '../pages/SignIn'

interface ModalProps { 
    classes?: ReturnType<typeof useStylesSignIn>;
    title?: string; 
    children: React.ReactNode;
    visible?: boolean;
    onClose: () => void; 
}



export const ModalBlock : React.FC<ModalProps> = ({ title, visible = false, children, onClose } : ModalProps) : React.ReactElement | null => {
  if(!visible) {
    return null
  }
  return (  
    <Dialog maxWidth="lg" open={visible} onClose={onClose} >
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        { title }
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};
