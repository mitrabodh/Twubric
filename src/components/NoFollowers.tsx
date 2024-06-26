import React from 'react';


// To show the No Followers message if the users list is empty.
export default function NoFollowers() {

    return (
        <div data-testid="noFollower" style={{ color: "gray", position: "absolute", top: "40%", left: "20%", fontSize: "20px" }}>You have no followers.</div>
    );
}
