import React, {useState, useEffect} from 'react'
import './detail.css'
import axios from 'axios'
import moment from 'moment'

function Detail(props) {
    const [value, setValue] = useState(10)
    const [price, setPrice] = useState(0)
    const [localStatus, setLocalStatus] = useState([]) 

    useEffect(()=>{
        axios.get(`https://api.covid19api.com/country/${props.match.params.contries}?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`)
        .then((res)=>{
            setLocalStatus(res.data)
        }, [])
    })
    const editValue=()=>{
        setValue(value*2)
        console.log(localStatus)
    }
    return (
        <div className="detail bg-dark">
            <div className="container pt-3">
                <h2 className="text-white">Status Info Negara {props.match.params.contries}</h2>
                <div className="p-3">
                    <table class="table bg-light mt-3">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Date</th>
                                <th scope="col">Confirmed</th>
                                <th scope="col">Deaths</th>
                                <th scope="col">Recovered</th>
                                <th scope="col">Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {localStatus.map((item, index) => (
                                <tr>
                                    <th scope="row">{++index}</th>
                                    <td>{moment(item.Date).format('LL')}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                    <td>{item.Active}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* <button className="btn btn-primary" onClick={editValue}>Edit</button> */}
            </div>
        </div>
    )
}

export default Detail
