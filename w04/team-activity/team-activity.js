var grid_item = [].slice.call(document.getElementById('grid-container').children);
console.log(grid_item)
let is_player_one = true
console.log("Player 1's Turn")

function is_win() {
    
    if ( grid_item[0].value ==  grid_item[1].value &&  grid_item[1].value ==  grid_item[2].value && grid_item[0] != ""){
        return true;
    }
    else if ( grid_item[3].value ==   grid_item[4].value &&  grid_item[4].value ==  grid_item[5].value && grid_item[3] != ""){
        return true;
    }
    else if ( grid_item[6].value ==   grid_item[7].value &&  grid_item[7].value == grid_item[8].value && grid_item[6] != ""){
        return true;
    }
    else if ( grid_item[0].value ==   grid_item[3].value &&  grid_item[3].value ==  grid_item[6].value && grid_item[0] != ""){
        return true;
    }
    else if ( grid_item[1].value ==   grid_item[4].value &&  grid_item[4].value ==  grid_item[7].value && grid_item[1] != ""){
        return true;
    }
    else if ( grid_item[2].value ==   grid_item[5].value &&  grid_item[5].value ==  grid_item[8].value && grid_item[2] != ""){
        return true;
    }
    else if ( grid_item[0].value ==   grid_item[4].value &&  grid_item[4].value ==  grid_item[8].value && grid_item[4] != ""){
        return true;
    }
    else if ( grid_item[2].value ==   grid_item[4].value &&  grid_item[4].value ==  grid_item[6].value && grid_item[2] != ""){
        return true;
    }
    else return false;
}

function toggle_mode(e){
    if(is_player_one == true){
        e.value = 'X'
        is_player_one = false
        e.style.color = 'white'
        console.log("Player 2's Turn")
    }else{
        e.value = 'O'
        is_player_one = true
        e.style.color = 'white'
        console.log("Player 1's Turn")
    }
    if(is_win() == true){
        alert('Win condition has been reached')
    }
}

grid_item.forEach(item => {
    item.addEventListener('click', toggle_mode.bind(this, item))
})

function check_win(){
    grid_item.forEach((item, index) => {
        if(index == 0){

        }
    })
}

function reset(){
    grid_item.forEach(item => {
        item.value = ""
    })
}