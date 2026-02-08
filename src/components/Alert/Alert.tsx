import React from "react";
import styles from "./Alert.module.scss";

type AlertProps = {
    message?: string;          // текст ошибки/сообщения
    onClose?: () => void;      // что делать при закрытии
    className?: string;        // опционально для доп классов
};

const Alert: React.FC<AlertProps> = ({ message, onClose, className }) => {
    if (!message) return null;

    return (
        <div className={`${styles.alertError} ${className ?? ""}`} role="alert" aria-live="polite">
            <span className={styles.alertText}>{message}</span>

            {onClose && (
                <button
                    type="button"
                    className={styles.alertClose}
                    onClick={onClose}
                    aria-label="Скрыть сообщение"
                >
                    ×
                </button>
            )}
        </div>
    );
};

export default Alert;
