import React, { useState } from 'react'

function Offer({state,datacontract,state1}) {
    const [id, setId] = useState("");


    console.log(id)
  return (
    <>
     <table className="table  table-borderless">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Company</th>
                                <th scope="col">Region</th>
                                <th scope="col">Sex</th>
                                <th scope="col">Num de Pers</th>
                                <th scope="col">Tarif</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>


                        {state !== "" ? datacontract.filter(campany =>
                            //&&   campany.region === state.formFields.region

                            campany.date > state1.map(it=>it.birth_day)
                        ).map(filteredCompanys => (

                            <> {<tbody key={filteredCompanys._id}>
                                <tr
                                  onClick={() => {
                                   
                                    setId(filteredCompanys._id)
                                 }}
                                />
                                <tr>
                                    <th scope="row" class="table-info">{filteredCompanys.name}</th>
                                    <td className="table-info">{filteredCompanys.region}</td>
                                    <td className="table-info">{filteredCompanys.sex}</td>
                                    <td className="table-info">{filteredCompanys.qt_pers}</td>
                                    <td className="table-info">{filteredCompanys.tarif}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary"
                                            data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            this offer it's ok for me
                                        </button>
                                    </td>
                                </tr>

                            </tbody>

                            }</>

                        )) : <p>no resultat</p>}
                    </table>
    </>
  )
}

export default Offer