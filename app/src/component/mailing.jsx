import React, {Component} from 'react';
import Fill1 from '../assets/svg/Background/Fill 1.svg'
import Fill2 from '../assets/svg/Background/Fill 2.svg'
import Fill3 from '../assets/svg/Background/Fill 3.svg'
import Fill4 from '../assets/svg/Background/Fill 4.svg'
import Fill5 from '../assets/svg/Background/Fill 5.svg'
import Fill6 from '../assets/svg/Background/Fill 6.svg'


const Texture = () => {
    return(
        <div className="Texture">
            <img src={Fill1} className="Fill1"/>
            <img src={Fill2} className="Fill2"/>
            <img src={Fill3} className="Fill3"/>
            <img src={Fill4} className="Fill4"/>
            <img src={Fill5} className="Fill5"/>
            <img src={Fill6} className="Fill6"/>
        </div>
    )
}


const Text = () => {
    return (
        <div className="Text">
            <div className="Title">Keep in Touch</div>
            <div className="Description">Want to see more cool web tools & projects? Sign up for our mailing list</div>
        </div>
    )
}

const Input = () => {
    return (
        <form className="Form">
            <label>
                <input type="text" className="Name" placeholder="Enter your name"/>
            </label>
            <label>
                <input type="email" className="E-mail" placeholder="Enter your e-mail"/>
            </label>

            <button className="Button" type="submit">Subscribe</button>
        </form>
    )
}


class Mailing extends React.Component{
    render() {
        return (
            <div className="Mailing">
                <Texture/>
                <Text/>
                <Input/>
            </div>
        )
    }
}

export default Mailing;

