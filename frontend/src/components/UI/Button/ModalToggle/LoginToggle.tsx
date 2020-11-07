import React from 'react'
import { ModalOptions } from '../../../../enums/ModalOptions'
import styles from '../Button.module.scss'

interface LoginToggleProps {
    children: string;
    btnClass: any;
    modalType: ModalOptions;
    invokeLoginLayout: (selectedModal: ModalOptions) => void;
}

export const LoginToggle: React.FC<LoginToggleProps> = ({ children, btnClass, modalType, invokeLoginLayout }) => {
    return <button className={styles[btnClass]} onClick={() => invokeLoginLayout(modalType)}> {children}</button>
}
