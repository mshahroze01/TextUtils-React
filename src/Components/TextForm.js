// import React from 'react'
import PropTypes from 'prop-types'
import React, { useState } from 'react'




export default function TextForm(props){

    // ChatGPT
    // function countWords(sentence) {
    //     // Use a regular expression to split the string at one or more whitespace characters
    //     var wordsArray = sentence.split(/\s+/);
    //     // Remove any empty strings from the resulting array
    //     var newWordsArray = wordsArray.filter(function(word) {
    //         return word.length > 0;
    //     });
    //     // Return the count of words
    //     return newWordsArray.length;
    // }

    const countWords = (str)=>{
        let arr = str.split(/\s+/);
        let count = 0;
        arr.forEach(element => {
            if(element===""){
                // Do not update count
            }else{
                count++;
            }
        });
        return count;
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const handleOnClickUpperCase = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.fireAlert("Converted to upper-case", "success");
    }

    const handleOnClickLowerCase = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.fireAlert("Converted to lower-case", "success");
    }

    const handleOnClickBold = () => {
        var textarea = document.getElementById('myBox');
        textarea.style.fontWeight = textarea.style.fontWeight === 'bold' ? 'normal' : 'bold';
        props.fireAlert("Bold applied!", "success");
    }
    
    const handleOnClickItalic = () => {
        var textarea = document.getElementById('myBox');
        textarea.style.fontStyle = textarea.style.fontStyle === 'italic' ? 'normal' : 'italic';
        props.fireAlert("Italic applied", "success");
    }
    
    const handleOnClickOblique = () => {
        var textarea = document.getElementById('myBox');
        textarea.style.fontStyle = textarea.style.fontStyle === 'oblique' ? 'normal' : 'oblique';
        props.fireAlert("Oblique applied", "success");
    }

    const handleOnClickReplace = ()=>{
        const newText = text.replaceAll(" ", "_");
        setText(newText);
        props.fireAlert("All spaces are replaced with under-scores", "success");
    }

    const handleOnClickReplace2 = ()=>{
        const newText = text.replaceAll("_", " ");
        setText(newText);
        props.fireAlert("All under-scores are replaced with spaces", "success");
    }


    const [text, setText] = useState("");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea id="myBox" placeholder='Enter text...' value={text} onChange={handleOnChange} rows="8" className="form-control"></textarea>
            </div>
            <button className={`btn btn-${props.buttonBg} mx-2`} onClick={handleOnClickUpperCase} >UPPERCASE</button>
            <button className={`btn btn-${props.buttonBg} mx-2`} onClick={handleOnClickLowerCase} >lowercase</button>
            <button className={`btn btn-${props.buttonBg} mx-2`} onClick={handleOnClickItalic} ><i>Italic</i></button>
            <button className={`btn btn-${props.buttonBg} mx-2`} onClick={handleOnClickOblique} >Oblique</button>
            <button className={`btn btn-${props.buttonBg} mx-2`} onClick={handleOnClickBold} ><b>Bold</b></button>
            <button className={`btn btn-${props.buttonBg} mx-2`} onClick={handleOnClickReplace} >" " = "_"</button>
            <button className={`btn btn-${props.buttonBg} mx-2`} onClick={handleOnClickReplace2} >"_" = " "</button>
        </div>
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p className='my-1'>Words: {countWords(text)} and Characters: {text.length}</p>
            <p className='my-1'>Average reading time: {0.008 * text.split(" ").length} minutes</p>
            <h3 className='my-3'>Preview</h3>
            <p className='my-1'>{text.length>0?text:"Enter some text in above box to preview here"}</p>
        </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string
};

TextForm.defaultProps = {
    heading: "Enter text to analyse"
}










