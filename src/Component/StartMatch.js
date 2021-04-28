import React, { useEffect, useState } from 'react'
import db from '../Firebase';

const StartMatch = () => {

    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');
    const [overs, setOvers] = useState('');
    const [teams, setTeams] = useState([]);

    const startMatch = (event) => {
        event.preventDefault();
        setTeam1('');
        setTeam2('');
        setOvers('');
    }

    useEffect(() => {
        db.collection('teams').onSnapshot(snapshot => {
           setTeams(snapshot.docs.map(doc => ({id: doc.id, team: doc.data()})))
        })
    })


    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1>Enter First Team Details</h1>
                    <form>
                        <div className="form-group my-3">
                            <label htmlFor="team1Name" className="form-label">Team 1 Name</label>
                            <select id='team1Name' className="form-select" defaultValue={team1} required={true} onChange={event => setTeam1(event.target.value)}>
                                <option disabled value="">Choose Team 1</option>
                                {
                                    teams.map(({id, team}) => {
                                       return(<option key={id} value={team.name}>{team.name}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="team2Name" className="form-label">Team 2 Name</label>
                            <select id='team2Name' className="form-select" defaultValue={team2} required={true} onChange={event => setTeam2(event.target.value)} >
                                <option disabled value="">Choose Team 2</option>
                                {
                                    teams.map(({id, team}) => {
                                       return(<option key={id} value={team.name}>{team.name}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="matchOvers" className="form-label">Number of Overs</label>
                            <input type="number" value={overs} onChange={event => setOvers(event.target.value)} className='form-control' placeholder="Number of Overs" id="matchOvers"/>
                        </div>
                        <button type="submit" onClick={startMatch} className="btn btn-outline-dark">Start Match</button>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default StartMatch
