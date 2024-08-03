import { Ui } from "./UI.module.js"
export class Details{
    constructor(id){
     document.getElementById('btnClose').addEventListener('click',()=>{
        document.getElementById('Detail').classList.add('d-none')
        document.getElementById('Game').classList.remove('d-none')
     })
     this.loading=document.querySelector('.loading')
     this.Getapi(id)

     
    }
    async Getapi(id){
        this.loading.classList.remove('d-none')
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '742d40fd4cmshd6c65d0066b1116p1b8350jsndc598f81a0e7',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(url, options);
        const result = await response.json();
       this.data= new Ui()
       this.loading.classList.add('d-none')
       this.data.DisplayDetails(result)
        console.log(result);
    
    }
   
}