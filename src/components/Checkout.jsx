import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () =>{

    const navigate = useNavigate()

    const [confirm, setConfirm] = useState(false)
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            food: 'None'
        })

        const handleChange = (e) =>{
            const {name, value} = e.target
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }))
        }

        const confirmNo = () =>{
            setConfirm(false)
        }

        const confirmYes = () =>{
            setConfirm(false)

            alert(`Congratulations ${formData.firstName}! Your trip has been booked!`)

            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                food: 'None'
            })
        }

        const handleSubmit = () =>{
            setConfirm(true)
        }

    return(
        <div className="checkout">
            {!confirm ? <div className="form">
                <h4>Just a few questions and you'll be on your way!</h4>
                <input placeholder="First Name" className="input" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                <input placeholder="Last Name" className="input" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                <input placeholder="Phone Number" className="input" type="text" name="phone" value={formData.phone} onChange={handleChange} />
                <input placeholder="Email" className="input" type="text" name="email" value={formData.email} onChange={handleChange} />
                <select className="input" id="food" name="food" value={formData.food} onChange={handleChange} >
                    <option value="None">-Food-</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Fish">Fish</option>
                    <option value="Salad">Salad</option>
                </select>
                <button className="submit" onClick={handleSubmit}>Submit</button>
                <button className="checkoutBack" onClick={()=>{navigate(-1)}}>Back</button>
            </div>
            :
            <div className="confirm">
                <div className="confirmInfo">
                    <h4>Is this info correct?</h4>
                    <p>Name: {formData.firstName} {formData.lastName}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>Email: {formData.email}</p>
                    <p>Food: {formData.food}</p>
                </div>
                <div className="confirmButtons">
                    <button onClick={confirmNo}>No</button>
                    <button onClick={confirmYes} >Yes</button>
                </div>
            </div>}
        </div>
    )
   
}
export default Checkout