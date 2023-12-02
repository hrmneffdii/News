import styles from './Navbar.module.css'
import newsIcon from '../../assets/news-icon.svg'
import { CATEGORIES } from '../../constans/categories'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const Navbar = () => {

    const [selected, setSelected] = useState('')

    return (
        <nav className={styles.nav}>
            <div className={styles.navIconWrapper}>
                <img src={newsIcon} alt="news icon" className={styles.navIcon} />
                <p className={styles.navTitle}>NEWS</p>
            </div>

            <div className={styles.categories}>
                {CATEGORIES.map((category, index)=>{
                    return (
                        <Link
                        key={index}
                        onClick={() => setSelected(category.name)}
                        to={`/${category.value}`}
                        className={classnames(styles.category, {
                            [styles.selected] : category.name === selected
                        })}
                        >
                        {category.name}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar