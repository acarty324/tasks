import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function switchtype(): void{
        if (type === "short_answer_question"){
            setType("multiple_choice_question");
        }else{
            setType("short_answer_question")
        }
    }

    const Qtype = type === "short_answer_question"? "Short Answer" : "Multiple Choice";
    return (
        <div>
            <Button onClick={switchtype}>Change Type</Button>
            <div>{Qtype}</div></div>
        
    );
       
}
