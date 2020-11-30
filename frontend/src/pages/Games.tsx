import React from 'react'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import styles from "./Games.module.scss"
import { Categories } from '../components/Games/Categories/Category';
import { gameTypes } from '../components/Games/Games';


export const Games = () => {
    const isUserActive = useSelector((state: RootState) => {
        return state.user.user?.accessToken
    })

    if (!isUserActive) {
        return <Redirect to='/' />
    }

    return (
        <div className={styles.GamesLayout}>
            <div className={styles.CategoriesLayout}>
                {gameTypes.map(game => {
                    return <Categories key={game.id} gameInfo={game} />
                })}
            </div>
        </div>
    )
}
