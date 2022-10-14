import axios from "axios";
import React, {useState} from "react";
import styled from "styled-components";

const PostUsers = () => {

    const qs = require("qs");


    const [image, setImage] = useState("");
    const [name, setName] = useState("");


    const post_Users = () => {

        axios.post(
             "http://127.0.0.1:8000/barber/",

            qs.stringify({
               username:name,
                image:image,
            })
        );
        window.location.reload();
    };


    return (
        <Div>
            <div className='main'>
                <h1>Add New products</h1>
            <input placeholder="Name" className='input'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input placeholder="Url" className='input'
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={price}*/}
            {/*    onChange={(e) => setPrice(e.target.value)}*/}
            {/*/>*/}
            <button className="btn" onClick={post_Users}>Add</button>
            </div>
        </Div>
    );
};
const Div = styled.div`
  width: 100%;
.main{
  width: 70%;
  margin: auto;
  .input{
    padding: 5px 10px ;
    width: 100%;
    border: 1px solid black;
    border-radius: 3px;
    margin-bottom: 10px;
  }
  input::placeholder{
    font-size: 12px;
    color: grey;
  }
  .btn{
    margin: 10px 0;
    width: 100px;
    padding: 10px;
    border-radius: 3px;
    border: none;
    outline: none;
    background: grey;
    color: white;
  }
  .btn:hover{
    background: white;
    border: 1px solid grey;
    color: grey;
    transition: 0.5s;
  }
  @media (max-width: 1024px){
    .btn{
      width: 100% !important;
      margin: auto;
    }
  }
}
`
export default PostUsers;