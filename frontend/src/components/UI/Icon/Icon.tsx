import React from 'react'
import styles from "./Icon.module.scss";

interface IconProps {
    styling: string;
}

export const Icon: React.FC<IconProps> = ({ children, styling }) => {
    return (
        <span className={styles[styling]}>{children}</span>
    )
}
