import React from 'react'
import utilStyles from '../../styles/utils.module.css'
import Date from '../date'
import styles from './Posts.Item.module.css'
export const PostItem = ({post}) => {
  const {hash, body, created_at, sender} = post

  // return (
  //   <li className={utilStyles.listItem} key={hash}>
  //   <div>{body}</div>
  //   <br />
  //   <small className={utilStyles.lightText}>
  //     <Date dateString={created_at} />
  //   </small>
  //   <small>{sender.name}</small>
  // </li>
  // )

  return (
    <div className={styles.card}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <figure className={styles.avatar}>
            <img src={sender.avatar} />
          </figure>
          <h4 className={styles.cardHeaderTitle}>{sender.name}</h4>
          <h6 className={styles.cardHeader}>{sender.hash}</h6>
          <small><Date dateString={created_at} /></small>
        </div>
        <div className={styles.cardBody}>{body}</div>
        <div className={styles.bodyContent}>
          <button className={styles.buttonPrimary}>{'( )'}
          </button>
          <button className="btn lnr lnr-heart">{'<3'}
          </button>
          <button className="btn lnr lnr-code">{'<>'}</button>
        </div>
      </div>
    </div>
  )
}

export default PostItem