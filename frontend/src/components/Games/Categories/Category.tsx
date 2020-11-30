import React from 'react'
import { IGameType } from '../../../Interfaces/IGameType'
import { Link } from '../../UI/Button/Link';
import { Title } from '../Title/Title';
import styles from "./Categories.module.scss"

interface CategoryProps {
    gameInfo: IGameType;
}

export const Categories: React.FC<CategoryProps> = ({ gameInfo }) => {
    const { name, description, image } = gameInfo;
    console.log(gameInfo)
    return (
        <div className={styles.Category}>
            <div className={styles.Description}>
                <Title name={name} />
                <p>{description}</p>
                <Link path="/" btnClass='ButtonBlue'>Žaisti</Link>
            </div>
            <img src={image} alt={name} />
        </div>
    )
}
