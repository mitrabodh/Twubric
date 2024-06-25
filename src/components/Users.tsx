import React from 'react'
import Remove from "./Remove"
import Load from "./Load"
import NoFollowers from './NoFollowers'
import styles from "./users.module.css"


export default React.memo(function Users(prop: any) {


    if (prop.users?.length > 0) {
        return (
            <div className={styles.main}>
                <div className={styles.container}>{prop.users.map((user: any) => {
                    return (<div key={user.uid} className={styles.card}  >
                        <img src={user.image} alt="" />
                        <div className={styles.flex}>
                            <h3>{user.fullname}</h3>
                            <h4>{user.twubric.total}</h4>
                        </div>
                        <div className={styles.flex}>
                            <div className={`${styles.flex} ${styles.flexColumn}`}>
                                <span>{user.twubric.friends}</span>
                                <span>Friends</span>
                            </div>
                            <div className={`${styles.flex} ${styles.flexColumn}`}>
                                <span>{user.twubric.influence}</span>
                                <span>Influence</span>
                            </div>
                            <div className={`${styles.flex} ${styles.flexColumn}`}>
                                <span>{user.twubric.chirpiness}</span>
                                <span>Chirpiness</span>
                            </div>
                        </div>
                        <div className={styles.flex}>
                            <h5>{user.join_date}</h5>
                            <Remove uid={user.uid} onRemove={prop.onRemove} />
                        </div>

                    </div>)
                })}
                </div>
                <div>{prop.users.length < prop.total ? <Load setUselen={prop.setUselen}>Load More</Load> : ""}</div>
            </div>
        )
    }

    return (<NoFollowers />);

});
