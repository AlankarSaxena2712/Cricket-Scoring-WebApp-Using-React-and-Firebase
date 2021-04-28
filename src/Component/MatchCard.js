import React from 'react'

const MatchCard = (props) => {
    return (
        <div className="card mb-3 text-wrap" style={{background:"#000000d4", borderRadius:"10px"}}>
            <div className="card-body">
                <h5 className="card-title text-start" style={{color: `${props.team1.color}`}}>MI <span className='text-center' style={{position:"absolute",right:"20px"}}>135 - 7</span></h5>
                <h5 className="card-title text-start" style={{color: `${props.team2.color}`}}>CSK <span className='text-center' style={{position:"absolute",right:"20px"}}>136 - 3</span></h5>
                <p className='card-text text-warning'>{props.status}</p>
                </div>
            <div className="card-footer bg-transparent border-white text-white text-end">Scorecard</div>
        </div>
    )
}

export default MatchCard
