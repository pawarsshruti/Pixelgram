import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function UploadForm () {
    const [file , setFile] = useState(null);
    const [error , setError] = useState(null);

    const types = ['image/png' , 'image/jpeg'];

    const changeHandler = (e) =>
        {
          let selected =e.target.files[0];

          if(selected && types.includes(selected.type))
            {
                setFile(selected);
                setError('');
            }
            else{
                setFile(null);
                setError("Please select a valid image file");
            }
        }
    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {
                    /* the && works like a if else stat according to left and right side stats */}
                   { error && <div className="error">{error}</div> }
                  {  file && <div> {file.name}</div> }
                  { file && <ProgressBar  file={file} setFile={setFile}/> }
                
            </div>
        </form>
    )
}

export default UploadForm ;