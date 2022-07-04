import React, { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { UserFemale, User, UserAdd } from 'grommet-icons';
import '../components/styles/btnStyle.css'
import { useNavigate, useLocation,Link } from 'react-router-dom'

function AddPersone() {
    const navigate = useNavigate()
    const location = useLocation()
    const [formFields, setFormFields] = useState([{
        full_name: '', birth_day: '', gender1: '', gender2: ''
    }])
    const [full_name1, setFull_name1] = useState('')
    const [date, setDate] = useState(location.state.state.date)
    const [region, setRegion] = useState(location.state.state.region)
    const [checked, setChecked] = useState('')

    const handleChange = (e, index) => {
        let data = [...formFields]
        // const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        data[index][e.target.name] = e.target.value
        setFormFields(data)
        console.log(data)
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(formFields)
    }


    const addField = () => {
        let object = {
            full_name: '',
            birth_day: '',
            gender1: '',
            gender2: ''
        }
        setFormFields([...formFields, object])
    }

    const remove = (index) => {
        let data = [...formFields]
        data.splice(index, 1)
        setFormFields(data)
    }
    const handleClick = () => {
        navigate('/error', {
            state: {
                hi: 'from location'
            }
        })
    }

    const onChangeName = (e) => {
        const full_name1 = e.target.value;
        setFull_name1(full_name1)
    }
     const onChangeDt = (e) => {
        const date = e.target.value;
        setDate(date)
    }
    //  const onChangeCheck = (e) => {
    //    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    //     setFull_name1(full_name1)
    // }
    console.log(location.state)
    console.log(location.state.state.region)
    const dt = location.state.state


    return (

        <div className='container'>
            <div className="row">
                <div class="col-lg-3 col-md-12 col-sm-12">

                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 mt-5">

                    <div className='d-flex justify-content-around'>

                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="full_name"
                                    name='full_name1' value={full_name1} onChange={onChangeName}
                                    // onChange={e => handleChange(e, index)}
                                    aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div class="input-group mb-3">
                                <input type="date" class="form-control" placeholder="date"
                                    name='date' value={date} onChange={onChangeDt}
                                    // onChange={e => handleChange(e, index)}
                                    aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div>
                            <label >
                                <input type="checkbox"
                                    value='F' checked={location.state.state.sex === 'F' ? true : false}
                                    // onChange={e => handleChange(e, index)}
                                     name='gender1' />
                                <UserFemale style={{ marginRight: '25px' }} />
                            </label>
                            <label>
                                <User />
                                <input type="checkbox" value="M" checked={location.state.state.sex === 'M' ? true : false}
                                    // onChange={e => handleChange(e, index)}
                                     name='gender2' />
                            </label>
                        </div>
                    </div>

                    <form onSubmit={submitForm}>
                        {formFields.map((form, index) => {
                            return (
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" placeholder="full_name"
                                                    name='full_name' value={form.full_name}
                                                    onChange={e => handleChange(e, index)}
                                                    aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-3 col-sm-6 col-xs-6'>
                                            <div class="input-group mb-3">
                                                <input type="date" class="form-control" placeholder="date" aria-label="date"
                                                    name='birth_day' value={form.birth_day}
                                                    onChange={e => handleChange(e, index)}
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-2 col-sm-4 col-xs-4'>
                                            <div>
                                                <label >
                                                    <input type="checkbox"
                                                        value='F' checked={form.gender}
                                                        onChange={e => handleChange(e, index)} name='gender1' />
                                                    <UserFemale style={{ marginRight: '25px' }} />
                                                </label>
                                                <label>
                                                    <User />
                                                    <input type="checkbox" value="M" checked={form.gender}
                                                        onChange={e => handleChange(e, index)} name='gender2' />
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-lg-1 col-md-1 col-sm-2 col-xs-2'>
                                            {formFields.length > 1 ?
                                                <FaRegTrashAlt style={{ color: 'red' }} onClick={() => remove(index)} type="button" /> : ''}
                                        </div>

                                    </div>



                                </div>
                            )
                        })}
                    </form>
                    <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">

                        <button onClick={addField} type="button" class="btn btn-outline-warning">
                            <UserAdd style={{ marginRight: '15px' }} />Add person</button>
                        <Link  type="button" class="btn btn-success"
                           to='/offers'
                           state={{
                              
                                formFields,
                                dt,
                                region,
                                full_name1
                               
                            
                           }}
                        >next</Link>

                    </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12">

                </div>

            </div>

        </div>
    )
}

export default AddPersone