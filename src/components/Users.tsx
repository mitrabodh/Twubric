import React from 'react';
import Remove from "./Remove";
import Load from "./Load";
import NoFollowers from './NoFollowers';
import styles from "./users.module.css";


export default React.memo(function Users(prop: any) {

    // If users list is not empty, show the users.
    if (prop.users?.length > 0) {
        return (
            // Body container start
            <div className={styles.main}>

                {/* User grid container */}
                <div className={styles.container}>{prop.users.map((user: any) => {
                    return (

                        // Card body start
                        <div key={user.uid} className={styles.card}  >

                            {/* User image */}
                            <img src={user.image} alt="" />


                            <div className={styles.flex}>
                                {/* User fullname */}
                                <h3>{user.fullname}</h3>

                                {/* User twubric total score */}
                                <h4>{user.twubric.total}</h4>
                            </div>

                            {/* Criteria start */}
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
                            {/* Criteria end */}

                            {/* User join date */}
                            <div className={styles.flex}>
                                <h5>{user.join_date}</h5>
                                <Remove uid={user.uid} onRemove={prop.onRemove} />
                            </div>

                        </div>
                        // Card body end.
                    )
                })}
                </div>
                {/* User grid container end */}

                {/* Load More button */}
                <div>{prop.users.length < prop.total ? <Load setUselen={prop.setUselen}>Load More</Load> : ""}</div>
            </div>
        );
    }

    // If users list is empty show the No followers message.
    return (<NoFollowers />);

});
