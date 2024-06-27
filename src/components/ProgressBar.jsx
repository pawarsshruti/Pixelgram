import React , { useEffect} from "react";
import useStorage from "../Hooks/useStorage";


const ProgressBar = ({file , setFile}) =>
    {
        const {url , progress } = useStorage(file);
        console.log(progress , url);

        useEffect (() =>
        {
            if(url)
                {   //the progress bar disappeares after uploading the image
                    setFile(null);

                }
        }, [url, setFile])
                return ( 
            <div className="progress-bar" style={{ width : progress + '%'}}>Progress</div>
        ) 
    }

    export default ProgressBar;