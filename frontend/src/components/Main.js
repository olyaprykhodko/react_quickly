

function Main() {

    return (
        <div>
        <div className='header-logo'><img src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3-2/24/_q-112.png" alt="" /><p className="home-brand">uickly</p></div>
        <div className="container">
            <div className="home">
                <div className="main-text">Create, search & share notes</div>
            </div>
            <div className="line line-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="156" viewBox="0 0 180 199" fill="none">
                    <path d="M2 2L130 2C147.673 2 162 16.3269 162 34L162 154" stroke="black" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 8"/>
                </svg>
                <p className="create"><a href="/note">Search note</a></p>
            </div>
            <div className="line line-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="156" viewBox="0 0 180 199" fill="none">
                    <path d="M162 2L34 2C16.3269 2 2 16.3269 2 34L2 154" stroke="black" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 8"/>
                </svg>
                <p className="create"><a href="/create">Create new note</a></p>
            </div>
        </div>
        </div>
    );
}

export default Main;