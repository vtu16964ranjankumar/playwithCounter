//set initial count = 0.
let count =0;

//select value id and btn class
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

//loop over the button class(btn)
btns.forEach(function(btn) {
  btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
      count--;
    }
    else if(styles.contains("increase")){
      count++
    }
    else{
      count =0;
    }
    if(count>0){
      value.style.color="green";
    }
    if(count<0){
      value.style.color="red";
    }
    if(count === 0){
      value.style.color="#222";
    }
    value.textContent=count;
  })
});