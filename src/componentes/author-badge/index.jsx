import React from 'react';

import "./style.css";

export default function NavBar() {
    return (
        <div className="author-badge-container">
            <img className="author-badge-image" src="https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/271285975_118081957391917_7706681275311740969_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0lLkye-1iykAX-wjBLe&_nc_oc=AQmAQE_vmI5uRwdQOmuySiVU2p2RS0dEmmFqBicqqDBYzgeBcPq1enNnPSXfWGi3v8Q&_nc_ht=scontent-gru1-1.xx&oh=00_AT_O7gupDc3268ixzCBtyEpxNiABcDbpp2b_Wl1sSqLmNg&oe=624455DD" />
            <div className="author-badge-name">
                <h3>Nathan</h3>
                <p>Black Belt in React.js</p>
            </div>
        </div>
    );
}

