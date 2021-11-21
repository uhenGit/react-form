import { useState, useLayoutEffect } from "react";
import PropTypes from 'prop-types';
import "./textinput.css";

function TextInput(props) {
    const { header, inputName, inputVal, inputFunc } = props;
    const isPass = inputName !== "userEmail";
    const [isText, setIsText] = useState(false)
    useLayoutEffect(() => {
        if (!isPass) setIsText(true)
        console.log('isPass: ', isPass)
    },[isPass])
    const handleType = () => {
        if (!isPass) return;
        setIsText((prev) => !prev)
    }
    return (
        <label className="flex f-column form-label">
            <span className="label-header">{header}</span>
            <div className="flex">
                <input 
                    type={isText ? "text" : "password"}
                    name={inputName} 
                    value={inputVal} 
                    onChange={inputFunc}/>
                    {isPass && <span onClick={handleType} className="hide-pass">
                        {isText ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                    </span>}
            </div>
        </label>
    )
}
TextInput.propTypes = {
    header: PropTypes.string,
    inputName: PropTypes.string,
    inputVal: PropTypes.string,
    inputFunc: PropTypes.func
}
export default TextInput