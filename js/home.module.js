import { Ui } from "./UI.module.js"
import { Details } from "./details.module.js"
export class Home{
    constructor(){ 
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click',()=>{
                 this.ChangeActive(link)
                 const cat= link.dataset.category
                 this.GetApi(cat)
            })
        })
       this.ui=new Ui()
       this.loading=document.querySelector('.loading')
       this.GetApi('mmorpg')
       this.detail=document.getElementById('Detail')
       this.game=document.getElementById('Game')
    }

   ChangeActive(link){
           document.querySelector('.active').classList.remove('active')
           link.classList.add('active')
          
          
    }
    async GetApi(cat){
        this.loading.classList.remove('d-none')
        const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '742d40fd4cmshd6c65d0066b1116p1b8350jsndc598f81a0e7',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
        };

        const response=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options)

        const result=await response.json()
        this.loading.classList.add('d-none')
        this.ui.Display(result)
        
        document.querySelectorAll('.card').forEach((card)=>{
            card.addEventListener('click',()=>{
                
                this.detail.classList.remove('d-none')
                this.game.classList.add('d-none')
                const dd = new Details(card.dataset.id)
            })
        })

        
    }


}



