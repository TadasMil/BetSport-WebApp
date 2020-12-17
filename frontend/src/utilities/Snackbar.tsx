import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeDisplaySnackbar } from '../store/actions/snackbarAction';
import { RootState } from '../store/reducers'
import styles from "./Snackbar.module.scss";

export const Snackbar: React.FC = ({ children }) => {
    const snackbar = useSelector((state: RootState) => state.snackbar.message);
    const dispatch = useDispatch();

    useEffect(() => {
        if (snackbar) {
            const timeout = setTimeout(() => {
                dispatch(removeDisplaySnackbar());
            }, 3000);

            return () => clearTimeout(timeout);
        }

        return undefined;
    }, [dispatch, snackbar])


    return (
        <>
            {children}
            <>
                {
                    snackbar &&
                    < div className={styles.Snackbar}>
                        <div className={styles.SnackbarPopUp}>
                            <p>{snackbar}</p>
                        </div>
                    </div>
                }
            </>
        </>
    )
}
