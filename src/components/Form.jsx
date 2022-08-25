import React from "react"
import memesData from "../memesData"

export default function Form(){

    const [memeImage, setMemeImage]=React.useState("")

    function getMeme(){
        let memeData = memesData.data.memes
        let randomIndex = Math.floor(Math.random() * memeData.length)
        let randomMeme = memeData[randomIndex]
        let randomMemeImage = randomMeme.url   

        setMemeImage(randomMemeImage)
    }

    return(
        <div>
        <div className="form-container">
            <div className="row">
                <div className="col">
                     <input 
                     type="text" 
                     className="form-control" 
                     placeholder="Shut up" 
                     aria-label="First"
                     />
                     </div>
                <div className="col">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="and take my money" 
                    aria-label="Second"
                    />
                </div>
            </div>
        <div className="d-grid gap-2">
             <button 
             className="btn btn-primary" 
             type="button" 
             onClick={getMeme}
             >
                 Get a new meme image
            </button>
        </div>
     </div>
     <div className = "image-container">
        <img src = {memeImage}/>
     </div>
     </div>
    )
}