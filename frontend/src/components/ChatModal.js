import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import ChatComponent from './Chatbot';
import ChatIcon from '@mui/icons-material/Chat';

const style = {
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
  zIndex: 9999,
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ChatModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={style}>
      <IconButton onClick={handleOpen} sx={{background:'black'}}>
        <ChatIcon sx={{ color: 'white' }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <ChatComponent />
        </Box>
      </Modal>
    </div>
  );
}
