import React from 'react'
import styles from "./License.module.scss"

export const License: React.FC = () => {
    return (
        <div className={styles.License}>
            <p>Licencijuojama Lietuvos Lošimų priežiūros tarnyba, licencijos Nr. 122223.</p>
            <p>Registruota S.Dariaus ir S.Girėno g. 31A, Kaunas, Lietuva, LT-2333. Tel.: +370 534345</p>
        </div>
    )
}
