import { useState } from "react";
import $ from "jquery";
import "./App.css";
 
function Palindrome() {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
 
    const handleChange = (e) => {
        setName(e.target.value);
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };
 
    return (
        <div className="App">
            <form
                action="http://localhost:8000/server.php"
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
                <div className="card-body">
                  <h2 className="card-title">Text palindrome checker</h2>
                  <p className="card-text">With this tool you can test if your text is a palindrome. That is, the tool checks 
                                           whether the given text is spelled equally from left to right and from right to left. 
                                           If so, then in the output you get true, if not - false</p>
                </div>

                <label htmlFor="frase">Palindrome to check: </label>
                <input
                    type="text"
                    id="frase"
                    name="frase"
                    value={name}
                    size="150"
                    onChange={(event) =>
                        handleChange(event)
                    }
                />
                
                <br/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <h1>{result}</h1>
        </div>
    );
}
 
export default Palindrome;
