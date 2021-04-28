import React from 'react'
import MatchCard from './MatchCard'

const Home = () => {

    const team1 = {
        name: "MI",
        color: "blue",
        score: "137 - 9",
    }

    const team2 = {
        name: "CSK",
        color: "yellow",
        score: "139 - 4",
    }

    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className="col-md-3">
                    <MatchCard team1={team1} team2={team2} status={"CSK won by 6 wickets"} />
                </div>
                <div className="col-md-3" style={{display: "inline-block"}}>
                    <MatchCard team1={team1} team2={team2} status={"CSK won by 6 wickets"} />
                </div>
                <div className="col-md-3" style={{display: "inline-block"}}>
                    <MatchCard team1={team1} team2={team2} status={"CSK won by 6 wickets"} />
                </div>
                <div className="col-md-3" style={{display: "inline-block"}}>
                    <MatchCard team1={team1} team2={team2} status={"CSK won by 6 wickets"} />
                </div>
                <div className="col-md-3" style={{display: "inline-block"}}>
                    <MatchCard team1={team1} team2={team2} status={"CSK won by 6 wickets"} />
                </div>
            </div>
        </div>
    )
}

export default Home
