export class Ui{
    constructor(){

    }
    Display(data){
        let gameBox=''
        for(var i=0;i<data.length;i++){
            
            gameBox+=`
              <div class=" shadow  text-center rounded border-2 cardOfgame" >
                <div class='card h-100 ' data-id="${data[i].id}">
                    <div class='card-body'>
                        <img src=${data[i].thumbnail
                        } alt="picture of a game" class='w-100 mb-2'>
                        <div class="d-flex justify-content-between">
                            <h6 class="text-white">${data[i].title}</h6>
                            <button type="button" class="rounded-3 p-1" id='titleFree'>free</button>
                        </div>
                        <p class="Parag ">${data[i].short_description
                        }</p>
                    </div>
                    <div class="d-flex justify-content-between card-footer" id="footer">
                    <button type="button" class="rounded-3 p-1 btn-secondary ">${data[i].
                        genre
                        }</button>
                    <button type="button" class="rounded-3 p-1 btn-secondary">${data[i].platform
                    }</button>
                    </div>
                </div>
              </div>
            
            `
        }
        document.getElementById('rowBody').innerHTML=gameBox
    }
    DisplayDetails(data){
       const box=`
        <div class="row justify-content-between">
        <div class="col-md-4">
          <img src="${data.thumbnail}" alt="picture of game" class="w-100">
        </div>
        <div class="discreption col-md-7">
          <h2>Title:${data.title}</h2>
          <h6 class="mb-4">Category:<span class="btn-primary p-1 rounded-3 "> ${data.genre}</span></h6>
          <h6 class="mb-4">Platform:<span class="btn-primary p-1 rounded-3 "> ${data.platform}</span></h6>
          <h6 class="mb-4">Status:<span class="btn-primary p-1 rounded-3 "> ${data.status}</span></h6>
          <p>${data.description}</p>
          <button class=" btn-outline-warning text-white bg-transparent p-2">Show Game</button>
        </div>
    </div>
    `
    document.getElementById('data').innerHTML=box
    }
}