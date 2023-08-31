import { EventEmitter } from "events";

export default class Sound extends  EventEmitter {
    constructor(){
        super();
        this.audio = document.getElementById("audio");
        this.counter = 0;
        this.soundButton = document.querySelector(".toggle-sound-button");
        this.setEventListeners();
    }

    setEventListeners(){
        this.soundButton.addEventListener("click", ()=>{
            if(this.counter == 0){
                this.counter = 1;
                this.audio.play();
            }else{
                this.counter = 0;
                this.audio.pause();
            }
        });
    }
}