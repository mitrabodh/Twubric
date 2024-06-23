import React from 'react'
import Remove from "./Remove"
import Load from "./Load"
import styles from "./users.module.css"


export default function Users({ users, total, onRemove, setUselen }: { users: any, total: number, onRemove: any, setUselen: any }) {

    if (users?.length) {
        return (
            <div className={styles.main}>
                <div className={styles.container}>{users.map((user: any) => {
                    return (<div key={user.id} className={styles.card}  >
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
                            <Remove id={user.id} onRemove={onRemove} />
                        </div>

                    </div>)
                })}
                </div>
                <div>{users.length < total ? <Load setUselen={setUselen}>Load More</Load> : ""}</div>
            </div>
        )
    }
    return (<p>You have zero followers.</p>)


}
