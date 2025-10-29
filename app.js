
window.onload = function() {

  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


  function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
  function generarExcusa() {
    let excusa = randomFrom(who) + " " + randomFrom(action) + " " + randomFrom(what) + " " + randomFrom(when)
    return excusa;
  }

// console.log(generarExcusa());


  document.getElementById("excuse").textContent = generarExcusa();
}
