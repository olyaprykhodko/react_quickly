import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json'

function Note() {

    let { noteUrl } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteUrl !== undefined) {
            fetch(env.urlbackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({"url": noteUrl})
            })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    setNoteText(response.note);
                    setLineClass('');
                    setFormClass('hide');
                    setErrorClass('hide');
                }
                else if (!response.result) {
                    setLineClass('hide');
                    setFormClass('hide');
                    setErrorClass('');
                }
            })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }

    }, [noteUrl]); // Include 'noteUrl' in the dependency array

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Enter text');
            return false;
        }
        noteUrl = url;
        window.location.href = env.url + '/' + url
    }

    function searchNote() {
        window.location.href = env.url
    }

    return (
        <div>
            <div className="search-header"><img src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3-2/24/_q-64.png" width='33' height='33' alt="" /><p>uickly</p></div>
            <div className={lineClass}>
                <div className="search-result">
                    <div>{noteText}</div>
                    <div><button className='btn-back' onClick={searchNote}>Back to search</button></div>
                </div>
            </div>
            <div className={errorClass}>
                <h2>Error</h2>
                <p>Enter correct URL</p>
            </div>
            <div className={formClass}>
                <div className="search-box">
                    <form onSubmit={getNote}>
                        <label htmlFor="url">Enter URL: </label>
                        <input type="text" name='url' id='url' className='form-control'/>
                        <button type='submit' className='btn-search'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Note;