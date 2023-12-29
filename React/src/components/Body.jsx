import { useState } from 'react'

export default function Body() {


    const initialBtnText = "Show me my investment"

    // const [btnText, setBtnText] = useState("Show me my investment")

    return (
        <div className="body--div">
            <label htmlFor="investor-name-input">Please Input Your Full Name:</label>
            <input type="text" name="investor-name-input" id="investor-name-input" className="body--input" />
            <button 
                type="submit" 
                className="body--button" 
            >
                {initialBtnText}
            </button>
        </div>
    )
}