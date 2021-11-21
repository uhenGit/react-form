import PropTypes from 'prop-types';
import "./checkinput.css";

function CheckInput(props) {
    const { header, link, inputName, inputChecked, inputFunc } = props;
    return (
        <label className="flex check-input">
            <input type='checkbox' name={inputName} checked={inputChecked} onChange={inputFunc}/>
            <span className="check-def">{header}<a href="#">{link}</a></span>
        </label>
    )
}
CheckInput.propTypes = {
    header: PropTypes.string,
    link: PropTypes.string,
    inputName: PropTypes.string,
    inputChecked: PropTypes.bool,
    inputFunc: PropTypes.func
}
export default CheckInput