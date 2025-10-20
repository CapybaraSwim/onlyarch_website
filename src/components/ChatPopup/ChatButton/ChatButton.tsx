
import React from 'react';
const styles = require('./ChatButton.module.scss');


import chatIcon from '../../../assets/images/chat-icon.png';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.chatButton} onClick={onClick}>
      <img src={chatIcon} alt="Чат помощник" className={styles.chatIcon} />
    </button>
  );
};

export default ChatButton;