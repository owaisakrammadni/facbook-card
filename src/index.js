import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useState } from 'react';
import React from 'react';






function None() {



    const [Data, setData] = useState([])

    console.log("jkshfka" + Data)

    const posts = (e) => {
        e.preventDefault()


        var name = document.getElementById("name").value;
        var text = document.getElementById('text').value;
        var image = document.getElementById('imgUrl').value;
        var date = new Date().toLocaleTimeString
        console.log(name, text, image, date)
        let newData = {
            name: name,
            text: text,
            image: image,
            date: date,
        }

        console.log(newData)

        setData((previousValue) => {
            return previousValue.concat([newData]);
        })
    }

    return (
        <div className="main">
           <center> <h3>𝓞𝔀<span>𝓪𝓲𝓼</span></h3></center>
            <form onSubmit={posts}>
                <div>
                
             Name:   <input type="text" id="name" placeholder="User Name" /><br/><br/>
              
                 Text  :   <input type="text" id="text"   placeholder="Some Text"/><br/><br/>
                
                 Img   :    <input type="text" id="imgUrl"   placeholder="Upload Image"/> <br/><br/>
                
                <button type="submit">Post</button>
                </div>   </form>

            {Data.map((EachPost, i) => {

                return (
                    <div key={i } className="post">
                        <div className="userInfo">
                            <div className="profilePic">
                                <img className="userPic" src={EachPost.image} />
                            </div>
                            <div className="userName">
                                <h3>{EachPost.name}</h3>
                                <p>{EachPost.date}</p>
                            </div>
                        </div>
                        <div className="postText">
                            <p>{EachPost.text}</p>
                        </div>
                        <div >
                            <img className="image" src={EachPost.image} />
                        </div>

                    </div>

                )

            })}

        </div>


    )
}




ReactDOM.render(<None />, document.getElementById('root'))
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
