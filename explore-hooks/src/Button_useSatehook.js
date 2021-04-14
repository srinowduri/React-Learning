import React, { useState } from 'react';

export function ButtonUseStatehook() {
    const [buttonText, setButtonText] = useState("Click me, please");

    return (
        <div>
        <label>using useState hook</label>
      <button onClick={() => setButtonText("Thanks, been clicked!")}>
        {buttonText}
      </button>
      </div>
    );
}

