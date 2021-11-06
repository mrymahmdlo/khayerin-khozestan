import React from "react";
import {ImageObj} from '../../assets/images/letter of appreciations/ImageObj';

export default function ImagesObj() {
    return(
        <div>
            {ImageObj.map(item=>(
                    <div>{item}</div>
                ))
            }
        </div>
    )
}