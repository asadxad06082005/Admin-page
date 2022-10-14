import React, {useEffect, useState} from 'react';
import axios from "axios"
import styled from "styled-components";

const Users = () => {
    const [data, setData] = useState([])
    const [userNameEdit, setUserNameEdit] = useState("")
    const [userImgEdit, setUserImgEdit] = useState("")
    const getBarber = () => {
        axios
            .get("http://127.0.0.1:8000/barber/")
            .then((res) => setData(res.data))
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getBarber()
    }, [])

    const AdminDelete = async (id) => {
        try {
            const res = await axios
                .delete(`http://127.0.0.1:8000/barber/${id}`)
                .then(() => window.location.reload());
            console.log("Data deleted");
        } catch (error) {
            alert(error);
        }
    };

    const EditPost = async (id) => {
        try {
            const res = await axios.put(`http://127.0.0.1:8000/barber/${id}/`, {
                username: userNameEdit,
                image: userImgEdit,
            })
                .then(() => window.location.reload());
            console.log("Data ");
        } catch (error) {
            alert(error)
        }
    }
    return (
        <Div>
            <div className="main">
                <div className="first">
                    <h1>
                        Delete or Change
                    </h1>
                    <input placeholder="Name" className="input" type="text" value={userNameEdit}
                           onChange={(e) => setUserNameEdit(e.target.value)}/>
                    <input placeholder="Url" className="input" type="text" value={userImgEdit}
                           onChange={(e) => setUserImgEdit(e.target.value)}/>

                </div>
                <div className="second">
                    {data.map((el) => {
                        return (
                            <div key={el.id}>
                                <div  className="div">
                                    <h3>{el.username}</h3>
                                    <a href="https://t.me/m2dnight">         <img  src={el.image} alt=""/></a>

                                    <div className="btn_s">
                                        <button className="btn" onClick={() => AdminDelete(el.id)}>Delete</button>
                                        <button className="btn" onClick={() => EditPost(el.id)}>Put</button>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </Div>
    )

}

const Div = styled.div`

  margin-top: 20px;

  .main {
    width: 70%;
    margin: auto;

    .first {
      display: flex;
      flex-direction: column;

      .input {
        padding: 5px 10px;
        width: 100%;
        border: 1px solid black;
        border-radius: 3px;
        margin-bottom: 10px;
      }

      input::placeholder {
        font-size: 12px;
        color: grey;
      }
    }
  }

  .second {
    
    display: grid;
    margin: auto;
    grid-template-columns: 1fr 1fr 1fr;
  }

  img {
    width: 100%;
   
  }

  @media screen and (max-width: 1024px) {
    .second {

      grid-gap: 0 10px;
      grid-template-columns: 1fr 1fr;
    }

    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .second {
      grid-gap: 0 10px;
      grid-template-columns: 1fr;
    }

    img {
      width: 100%;
    }
  }

  .div {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  .btn{
    margin: 10px 0;
    width: 100px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid transparent;
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
  .btn_s {
    display: flex;
    justify-content: space-between;
  }
`
export default Users;