import './Toggle.css';


const Toggle = ({label}) => {
    return ( 
        <div>
            <div className="Toggle-switch">
                <input type="checkbox" className="Checkbox" name ={label} id= {label} />
                <label htmlFor={label} className="Label">
                    <span className="Inner"></span>
                    <span className="Switch"></span>
                </label>
            </div>
        </div> 
    );
}
 
export default Toggle;