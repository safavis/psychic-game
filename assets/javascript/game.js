let guess_num=0
let win_num=0
let lose_num=0
let guess_left=10
let guess_sofar=[]
let alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let correctly_guessed=false
let computer_key=Math.floor(Math.random()*alphabet.length)

// h_win=document.createElement('h5')
// h_lose=document.createElement('h5')

var resetting=(guess_left,correctly_guessed,p_lose,p_win)=>{
    console.log('raftimtoo')
    console.log(guess_left)
    console.log(correctly_guessed)    
    computer_key=Math.floor(Math.random()*alphabet.length)

if(correctly_guessed===true)
{
     win_num=win_num+1
}else{
     lose_num=lose_num+1
}
guess_left=10
correctly_guessed=false
p_lose.textContent='losses:'+lose_num
p_win.textContent='wins:'+win_num
guess_sofar=[]
return [guess_left,win_num,lose_num,correctly_guessed,guess_sofar]
}

document.onkeyup=event=>{
    guess_sofar.push(event.key)
    guess_left=guess_left-1
    if(event.key===alphabet[computer_key] )
    {
        console.log(computer_key)
        correctly_guessed=true
        console.log(correctly_guessed)

        var_values=resetting(guess_left,correctly_guessed,document.querySelector('.losses'),document.querySelector('.win'))
        console.log(var_values)
        guess_left=var_values[0]
        win_num=var_values[1]
        lose_num=var_values[2]
        correctly_guessed=var_values[3]
        guess_sofar=var_values[4]

    }
    if(guess_left===0)
    {
        var_values=resetting(guess_left,correctly_guessed,document.querySelector('.losses'),document.querySelector('.win'))
        guess_left=var_values[0]
        win_num=var_values[1]
        lose_num=var_values[2]
        correctly_guessed=var_values[3]
        guess_sofar=var_values[4]
    }
    console.log(event.key)
    console.log(alphabet[computer_key])
    console.log(guess_sofar)
    document.querySelector(".gleft").textContent="Guesses left:"+guess_left
    document.querySelector(".sofar").textContent="Your guesses are:"+guess_sofar
}


