import './Toggle.css';


const Toggle = () => {
    return ( 
        <div>
            <input 
                type="checkbox" 
                className="react-switch-checkbox"
                id={`react-switch-new`}
            />
            <label 
                htmlFor={`react-switch-new`}
                className="react-switch-label">
                
                <span className={`react-switch-button`}></span>
            </label>
        </div>
     );
}
 
export default Toggle;