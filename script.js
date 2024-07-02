const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress",function(e){
    if(e.keyCode === 13)  play();
    }
)



button.addEventListener("click",play);

function play() {;
const userNumber = document.querySelector("#guess").value;
if (userNumber < 1 || userNumber > 20){
    Swal.fire({
        icon: 'error',
        title: 'Ой...',
        text: 'Введите число от 1 до 20!',
      }) 
}


else if (isNaN(userNumber)) {

    Swal.fire({
        icon: 'error',
        title: 'Ой...!',
        text: 'Нужно ввести число!',
        
      })
}

else {
    if(userNumber > answer) {
        
        Swal.fire ('Попробуй число пониже',
        "Компьютер пока побеждает!")
    }

 else if(userNumber < answer){
        
        Swal.fire('Попробуй число повыше',
        "Компьютер пока побеждает!");
    }

 else {
    Swal.fire({
        title: 'ПОБЕДА!',
        imageUrl: 'https://images.unsplash.com/photo-1611075384633-85c5b2ca9336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHZpY3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'ПОБЕДА!',
      })
 }

}
}