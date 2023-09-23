import React from "react";
import Img from "../img/attach.png";
import Attach from "../img/img.png";


const Input = () => {
    return (
        <div className="input">
            <input type="text" placeHolder="Type something...."/>
                
          
            <div className="send">
                <img src={Attach} alt="" />
                <input type="file" style={{display:"none"}} id="file" />
                <label htmlFor="file">
                    <img src={Img} alt=""/>
                </label>
                <button>send</button>
            </div>
        </div>
    );

};

export default Input;