import React from "react"
import memesData from "../memesData"

export default function Form(){

    const [memeContent, setMemeContent]=React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeData, setAllMemeData]=React.useState(memesData)



    function getMemeImage(){
        let memeData = memesData.data.memes
        let randomIndex = Math.floor(Math.random() * memeData.length)
        let randomMeme = memeData[randomIndex]
        let randomMemeImage = randomMeme.url   

        setMemeContent(prevMemeContent => (
            {
                ...prevMemeContent, 
                randomImage: randomMemeImage
            }))
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
             onClick={getMemeImage}
             >
                 Get a new meme image
            </button>
        </div>
     </div>

     <div className = "image-container">
         <h1 className = "topText">{memeContent.topText}</h1>
        <img src = {memeContent.randomImage}/>
        <h1 className = "bottomText">{memeContent.bottomText}</h1>
     </div>
     </div>
    )
}