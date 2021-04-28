import React from 'react'

const ScoreCard = () => {
    return (
        <div className='container my-3'>
            <div className="accordion accordion-flush border" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed bg-danger text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Sunrisers Hyderabad
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body p-0">
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">Batsman</th>
                                            <th scope="col">R</th>
                                            <th scope="col">B</th>
                                            <th scope="col">4s</th>
                                            <th scope="col">6s</th>
                                            <th scope="col">SR</th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-light'>
                                        <tr>
                                            <td>Warner<br /><span style={{fontSize:"12px",overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>c Ravindra Jadeja b Lungi Ngidi</span></td>
                                            <td>57</td>
                                            <td>55</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>103.64</td>
                                        </tr>
                                        <tr>
                                            <td>Bairstow<br /><span style={{fontSize:"12px", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>c Ravindra Jadeja b Lungi Ngidi</span></td>
                                            <td>7</td>
                                            <td>5</td>
                                            <td>1</td>
                                            <td>0</td>
                                            <td>140</td>
                                        </tr>
                                        <tr>
                                            <td>Manish Pandey<br /><span style={{fontSize:"12px",overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>c Ravindra Jadeja b Lungi Ngidi</span></td>
                                            <td>61</td>
                                            <td>46</td>
                                            <td>5</td>
                                            <td>1</td>
                                            <td>132.61</td>
                                        </tr>
                                        <tr>
                                            <td>Williamson<br /><span style={{fontSize:"12px", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>c Ravindra Jadeja b Lungi Ngidi</span></td>
                                            <td>26</td>
                                            <td>10</td>
                                            <td>4</td>
                                            <td>1</td>
                                            <td>260</td>
                                        </tr>
                                        <tr>
                                            <th colSpan="1">Extras</th>
                                            <td colSpan='5' style={{textAlign:"end", paddingRight:"50px"}}><b>8</b> b 0, lb 2, w 6, nb 0</td>
                                        </tr>
                                        <tr>
                                            <th colSpan="1">Total</th>
                                            <td colSpan='5' style={{textAlign:"end", paddingRight:"50px"}}><b>171-3 (20.0)</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <table className="table mt-0 mb-0">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">Bowler</th>
                                        <th scope="col">O</th>
                                        <th scope="col">M</th>
                                        <th scope="col">R</th>
                                        <th scope="col">W</th>
                                        <th scope="col">ER</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-light'>
                                    <tr>
                                        <td>D Chahar</td>
                                        <td>3</td>
                                        <td>0</td>
                                        <td>21</td>
                                        <td>0</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>Sam Curran</td>
                                        <td>4</td>
                                        <td>0</td>
                                        <td>30</td>
                                        <td>1</td>
                                        <td>7.5</td>
                                    </tr>
                                    <tr>
                                        <td>Thakur</td>
                                        <td>4</td>
                                        <td>0</td>
                                        <td>44</td>
                                        <td>0</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>Moeen</td>
                                        <td>2</td>
                                        <td>0</td>
                                        <td>16</td>
                                        <td>0</td>
                                        <td>8</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table mt-0">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">Fall of Wickets</th>
                                        <th scope="col">Score</th>
                                        <th scope="col">Over</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-light'>
                                    <tr>
                                        <td>Bairstow</td>
                                        <td>22-1</td>
                                        <td>3.2</td>
                                    </tr>
                                    <tr>
                                        <td>Warner</td>
                                        <td>128-2</td>
                                        <td>17.1</td>
                                    </tr>
                                    <tr>
                                        <td>Manish Pandey</td>
                                        <td>134-3</td>
                                        <td>17.5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed bg-warning text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Chennai Super Kings
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body p-0">
                        <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">Batsman</th>
                                            <th scope="col">R</th>
                                            <th scope="col">B</th>
                                            <th scope="col">4s</th>
                                            <th scope="col">6s</th>
                                            <th scope="col">SR</th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-light'>
                                        <tr>
                                            <td>Warner<br /><span style={{fontSize:"12px",overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>c Ravindra Jadeja b Lungi Ngidi</span></td>
                                            <td>57</td>
                                            <td>55</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>103.64</td>
                                        </tr>
                                        <tr>
                                            <td>Bairstow<br /><span style={{fontSize:"12px", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>c Ravindra Jadeja b Lungi Ngidi</span></td>
                                            <td>7</td>
                                            <td>5</td>
                                            <td>1</td>
                                            <td>0</td>
                                            <td>140</td>
                                        </tr>
                                        <tr>
                                            <td>Manish Pandey<br /><span style={{fontSize:"12px",overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>c Ravindra Jadeja b Lungi Ngidi</span></td>
                                            <td>61</td>
                                            <td>46</td>
                                            <td>5</td>
                                            <td>1</td>
                                            <td>132.61</td>
                                        </tr>
                                        <tr>
                                            <td>Williamson<br /><span style={{fontSize:"12px", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>c Ravindra Jadeja b Lungi Ngidi</span></td>
                                            <td>26</td>
                                            <td>10</td>
                                            <td>4</td>
                                            <td>1</td>
                                            <td>260</td>
                                        </tr>
                                        <tr>
                                            <th colSpan="1">Extras</th>
                                            <td colSpan='5' style={{textAlign:"end", paddingRight:"50px"}}><b>8</b> b 0, lb 2, w 6, nb 0</td>
                                        </tr>
                                        <tr>
                                            <th colSpan="1">Total</th>
                                            <td colSpan='5' style={{textAlign:"end", paddingRight:"50px"}}><b>171-3 (20.0)</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <table className="table mt-0 mb-0">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">Bowler</th>
                                        <th scope="col">O</th>
                                        <th scope="col">M</th>
                                        <th scope="col">R</th>
                                        <th scope="col">W</th>
                                        <th scope="col">ER</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-light'>
                                    <tr>
                                        <td>D Chahar</td>
                                        <td>3</td>
                                        <td>0</td>
                                        <td>21</td>
                                        <td>0</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>Sam Curran</td>
                                        <td>4</td>
                                        <td>0</td>
                                        <td>30</td>
                                        <td>1</td>
                                        <td>7.5</td>
                                    </tr>
                                    <tr>
                                        <td>Thakur</td>
                                        <td>4</td>
                                        <td>0</td>
                                        <td>44</td>
                                        <td>0</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>Moeen</td>
                                        <td>2</td>
                                        <td>0</td>
                                        <td>16</td>
                                        <td>0</td>
                                        <td>8</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table mt-0">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">Fall of Wickets</th>
                                        <th scope="col">Score</th>
                                        <th scope="col">Over</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-light'>
                                    <tr>
                                        <td>Bairstow</td>
                                        <td>22-1</td>
                                        <td>3.2</td>
                                    </tr>
                                    <tr>
                                        <td>Warner</td>
                                        <td>128-2</td>
                                        <td>17.1</td>
                                    </tr>
                                    <tr>
                                        <td>Manish Pandey</td>
                                        <td>134-3</td>
                                        <td>17.5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreCard
