import React, { useState } from 'react'
import db from '../Firebase';

const AddPlayer = ({ teamId, teamColor, teamName, newTeam }) => {

    const [teamPlayers, setTeamPlayers] = useState([]);
    const [noPlayers, setNoPlayers] = useState(1);

    const addPlayer = (i, event) => {
        const values = [...teamPlayers];
        values[i].value = event.target.value;
        setTeamPlayers(values);
    }

    const addPlayerField = () => {
        const values = [...teamPlayers];
        values.push({value: null});
        setTeamPlayers(values);
        setNoPlayers(noPlayers + 1);
    }

    const saveTeamPlayers = (event) => {
        event.preventDefault();
        teamPlayers.forEach(player => {
            db.collection('players').add({
                name: player.value,
                team: teamId
            })
        });
        teamColor("#fffff1");
        teamName("");
        newTeam("");
        setTeamPlayers([]);
    }

    return (
        <div>
            <label htmlFor="teamPlayers" className="form-label">Team Players</label>
            {
                teamPlayers.map((field, idx) => {
                    return (
                        <div className="mb-3" key={`${field} - ${idx}`}>
                            <input type="text" className="form-control" placeholder="Player Name" value={field.value || ""} onChange={event => addPlayer(idx, event)} />
                        </div>
                    );
                })
            }
            <div className="row">
                <div className="col">
                    <button disabled={noPlayers > 11} onClick={() => addPlayerField()} className="btn btn-sm btn-info my-2 text-light">Add Player</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="submit" onClick={saveTeamPlayers} className="btn btn-outline-dark my-2">Save Plavers</button>
                </div>
            </div>
        </div>
    )
}

export default AddPlayer
