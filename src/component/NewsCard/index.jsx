import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './NewsCard.module.css'
import { formateDate } from '../../utils/formateDate'
const NewsCard = ({
    src,
    title,
    publishedAt,
    author,
    sourceName,
    description,
    url,
    notLastChild
}) => {
    return (
        <>
            <div 
            className={classnames(styles.newsCard, {
                [styles.newsCardGap] : notLastChild 
            })}
            >
                
                <div className={styles.imgContainer}>
                    <img
                    className={styles.img}
                    src={src}
                    alt={`${title} Thumbnail jpg`}
                    />
                    <p className={styles.imgTitle}>{title}</p>
                </div>

                <div className={styles.newsCardContent}>
                    <p className={styles.newsCardDate}>{formateDate(publishedAt)}</p>
                    <p className={styles.newsCardAuthor}>{`${author} | ${sourceName}`}</p>

                    <p className={styles.newsCardDesc}>{description}</p>
                    
                    <a 
                    href={url} 
                    className={styles.url} 
                    target="_blank" 
                    rel='noreferrer noopener'>
                        
                    Go to a Website
                     
                    </a>
                </div>
            </div>
        </>
    )
}

NewsCard.propTypes = {
    src : PropTypes.string,
    title : PropTypes.string ,
    publishedAt : PropTypes.string,
    author : PropTypes.string,
    sourceName : PropTypes.string,
    description : PropTypes.string,
    url : PropTypes.string,
    notLastChild : PropTypes.bool
}

export default NewsCard