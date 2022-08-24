import React from "react"

export default function Form(){
    return(
        <div className="form-container">
            <div class="row">
                <div class="col">
                     <input type="text" class="form-control" placeholder="Shut up" aria-label="First"/>
                     </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="and take my money" aria-label="Second"/>
                </div>
            </div>
        <div class="d-grid gap-2">
             <button class="btn btn-primary" type="button">Get a new meme image</button>
        </div>
     </div>
    )
}