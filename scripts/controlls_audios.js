class Controlls{
    constructor() {
        this.audio_1 = document.querySelector('#audio_1');
        this.audio_2 = document.querySelector('#audio_2');
        this.audio_3 = document.querySelector('#audio_3');
        this.audio_4 = document.querySelector('#audio_4');
        this.element = document.querySelectorAll('.card');
    }
    MainSound(){ 
        this.audio_1.setAttribute('src','./Audios/main.wav');
        if(this.audio_1.getAttribute('src') !==''){
            this.audio_1.play();
        }
    }
    Sounder(ele){
        switch (ele.target.innerText){
            case 'X':
                this.audio_2.play();
                break;
            case 'O':
                this.audio_3.play();
                break;              
            }
    }
    Conroller(){
        window.onload = () => {
            this.MainSound();
        }
    }
    EndSound(){
        if(this.audio_2.getAttribute('src') !==''){
            this.audio_4.play();
            this.audio_1.pause();
        }
    }
}

const controlls = new Controlls();
