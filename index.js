
let count = 0

// function for incrementing the passenger count
function increment(){
    count += 1
    document.getElementById('count-el').innerText = count
    
}

// function for saving the number of passengers
function save(){
    let totalCount = count + ' - '
    document.getElementById('display').textContent += totalCount
    document.getElementById('count-el').textContent = 0
    count = 0
}

// function to decrement the counter
function decrement(){
    count -= 1
    document.getElementById('count-el').innerText = count
}
