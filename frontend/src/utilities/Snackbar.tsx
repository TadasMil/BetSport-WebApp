import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers'
import styles from "./Snackbar.module.scss";

export const Snackbar: React.FC = ({ children }) => {
    const snackbar = useSelector((state: RootState) => state.snackbar.message);
    const [snackbarDisplay, setSnackbar] = useState<string | undefined>("");

    useEffect(() => {
        setSnackbar(snackbar);
        const timeout = setTimeout(() => {
            setSnackbar("");
        }, 3000)
        return () => {
            clearInterval(timeout);
        }
    }, [snackbar])

    return (
        <>
            {children}
            <>
                {
                    snackbarDisplay &&
                    < div className={styles.Snackbar}>
                        <div className={styles.SnackbarPopUp}>
                            <p>{snackbarDisplay}</p>
                        </div>
                    </div>
                }
            </>
        </>
    )
}
