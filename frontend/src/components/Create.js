import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import env from '../env.json'

function Create() {
    
    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');
    const [showDate, setShowDate] = useState(new Date());


    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlbackend, {
        method : 'POST',
        header : {
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
        body : JSON.stringify(obj)
        })
        .then (response => response.json())
        .then (response => {
            if (response.result) {
                setUrl(env.url + '/' + response.url);
            }
        })
    }

    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Insert text to save note!');
            return false;
        }
        sendData({'note' : note});
    }

    let CurrentDate = () => {
        useEffect(() => {
          const updateCurrentTime = () => setShowDate(new Date());
          const interval = setInterval(updateCurrentTime, 1000);
          return () => clearInterval(interval);
        }, []);
    }

    return (
        <div>
            <div className='note-header'>
                <p className='date'>{showDate.toLocaleDateString()} {showDate.toLocaleTimeString()}</p>
                <div className='brand'><img src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3-2/24/_q-64.png" width='33' height='33' alt="" /><p>uickly</p></div>
            </div>
            <div className='note-box'>
                <form onSubmit={loadDataFromForm} className={formClass}>
                    <label htmlFor="note">After saving you will get the url. Copy link to share your note with friend.</label>
                    <textarea name="note" id="note" className='note-field' placeholder='Type your note'></textarea>
                    <button type="submit" className='btn-save'>Save</button>
                </form>
                <div className={lineClass}>
                    <div className="hash-box">
                        <p>Copy URL to share your note: </p>
                        <div className='url-background'>{url}</div>
                        <div><button className='btn-back' onClick={function(){window.location.reload()}}>Create another note</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;