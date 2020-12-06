import React from 'react'
import { useRouteMatch } from 'react-router-dom';
import { IGameType } from '../../../Interfaces/IGameType'
import { Link } from '../../UI/Button/Link';
import { Title } from '../Title/Title';
import styles from "./Categories.module.scss"

interface CategoryProps {
    gameInfo: IGameType;
    gamePath: number
}

export const Category: React.FC<CategoryProps> = ({ gameInfo, gamePath }) => {
    const { name, description, image } = gameInfo;

    let { url } = useRouteMatch();

    return (
        <div className={styles.Category}>
            <div className={styles.Description}>
                <Title name={name} />
                <p>{description}</p>
                <Link path={`${url}/${gameInfo.id}`} btnClass='ButtonBlue'>Žaisti</Link>
            </div>
            <img src={image} alt={name} />
        </div >
    )
}
