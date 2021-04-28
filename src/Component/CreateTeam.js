import React, { useEffect, useState } from 'react'
import db from '../Firebase';
import AddPlayer from './AddPlayer';

const CreateTeam = () => {

    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('#fffff1');
    const [dbTeam, setDbTeam] = useState('');

    useEffect(() => {
        db.collection('teams').onSnapshot(snap => {
            snap.docs.map(doc => {
                console.log(doc.data(), doc.id)
            })
        })
    }, [])

    const saveTeam = (event) => {
        event.preventDefault();
        db.collection('teams').add({
            name: teamName,
            color: teamColor
        }).then(doc => {
            setDbTeam(doc.id);
        })
    }

    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1>Create Team</h1>
                    <div className="row">
                        <div className="mb-3 col-md">
                            <label htmlFor="teamName" className="form-label">Team Name</label>
                            <input type="text" className="form-control" value={teamName} onChange={event => setTeamName(event.target.value)} id="teamName" placeholder="Team Name" />
                        </div>
                        <div className="mb-3 col-md">
                            <label htmlFor="teamColor" className="form-label">Team Color (Try to choose a light color)</label>
                            <input type="color" className="form-control form-control-color" id="teamColor" value={teamColor} onChange={event => setTeamColor(event.target.value)} placeholder="Team Color" />
                        </div>
                        {
                            dbTeam != ""?<AddPlayer teamId={dbTeam} newTeam={setDbTeam} teamName={setTeamName} teamColor={setTeamColor} />:<></>
                        }
                        <div className="row">
                            <div className="col">
                                {
                                    dbTeam == ""?
                                    <button type="submit" onClick={saveTeam} className="btn btn-outline-dark my-2">Submit Team</button>:<></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default CreateTeam
