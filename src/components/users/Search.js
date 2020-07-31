import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


const Search = () => {
    const githubContext = useContext(GithubContext)
    const [text, setText] = useState('')

    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext

    const handleChange = (event) => {
        setText(event.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light')
        }
        else {
            //props function to send this.state to parent and the function is called in app.js
            githubContext.searchUser(text)
            setText('')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search User..." value={text} onChange={handleChange} />
                <input type="submit" value="search" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 &&
                <button className="btn btn-block btn-light" onClick={githubContext.clearUser}>clear</button>}
        </div>
    )
}


export default Search
