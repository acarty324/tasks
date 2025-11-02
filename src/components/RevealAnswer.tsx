import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const[revealed, reveal_answer]= useState<boolean>(false);
    function flipVisibility(): void{
        reveal_answer(!revealed)
    }
    
    return (<div> 
        <button onClick ={flipVisibility}>
            Reveal Answer
            </button>
            {revealed && <div>42</div>}

    </div>);
}
