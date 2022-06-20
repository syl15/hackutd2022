import './Panels.css';

const Panels = () => {
    return ( 
        <div className="Card-container">
            {/* Card 1: Toggle On/Off */}
            <div className="Card">
                <div className="Card-number">
                    Step 1:
                </div>
                <br />
                <div className="Card-title">
                    Bind quote access
                </div>
                <br />
                <div className="Card-text">
                    Turn on or off the ability for customers
                    and agents to bind quotes.
                </div>
            </div>

            {/* Card 2: Select a Channel  */}
            <div className="Card">
                <div className="Card-number">
                    Step 2:
                </div>
                <br />
                <div className="Card-title">
                    Select a channel
                </div>
                <br />
                <div className="Card-text">
                    Select either customer, agent, or both.
                </div>
            </div>

        </div>
     );
}
 
export default Panels;