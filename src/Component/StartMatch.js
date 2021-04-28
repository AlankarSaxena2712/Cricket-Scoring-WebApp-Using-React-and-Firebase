import React, { useState } from 'react'

const StartMatch = () => {

    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');
    const [overs, setOvers] = useState('');

    const startMatch = (event) => {
        event.preventDefault();
        console.log(team1, team2, overs);
        setTeam1('');
        setTeam2('');
        setOvers('');
    }


    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1>Enter First Team Details</h1>
                    <form>
                        <div className="form-group my-3">
                            <label htmlFor="team1Name" className="form-label">Team 1 Name</label>
                            <select id='team1Name' className="form-select" defaultValue={team1} required onChange={event => setTeam1(event.target.value)}>
                                <option disabled value="">Choose Team 1</option>
                                <option value="RCB">RCB</option>
                                <option value="DC">DC</option>
                                <option value="CSK">CSK</option>
                                <option value="MI">MI</option>
                                <option value="SRH">SRH</option>
                                <option value="PBKS">PBKS</option>
                                <option value="RR">RR</option>
                                <option value="KKR">KKR</option>
                            </select>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="team2Name" className="form-label">Team 2 Name</label>
                            <select id='team2Name' className="form-select" defaultValue={team2} required onChange={event => setTeam2(event.target.value)} >
                                <option disabled value="">Choose Team 2</option>
                                <option value="RCB">RCB</option>
                                <option value="DC">DC</option>
                                <option value="CSK">CSK</option>
                                <option value="MI">MI</option>
                                <option value="SRH">SRH</option>
                                <option value="PBKS">PBKS</option>
                                <option value="RR">RR</option>
                                <option value="KKR">KKR</option>
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
