import React from 'react'
import { Redirect, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Category } from '../components/Games/Categories/Category';
import { gameTypes } from '../components/Games/Games';
import styles from "./Games.module.scss"
import { GamesLayout } from '../components/UI/Layout/Games/GamesLayout';


export const Games = () => {
    const isUserActive = useSelector((state: RootState) => {
        return state.user.user?.accessToken
    })

    if (!isUserActive) {
        return <Redirect to='/' />
    }

    return (
        <>
            <div className={styles.CategoriesLayout}>
                {gameTypes.map(game => {
                    return <Category key={game.id} gameInfo={game} gamePath={game.id} />
                })}
            </div>
        </>
    )
}
