const image = document.getElementById("peek_item");
const body = document.body
let state = 0


body.addEventListener("keydown", (q) => {
    if (!q.repeat) {
      if (q.key == "q") {
        state === 0 ? state = 1 : state = 0;
        console.log(`status=${state}`)
        if (state == 0) {
            image.id = "";
            image.classList.add("peek_revealed");
        } else {
            image.id = "peek_item";
            image.classList.remove("peek_revealed");
        }
      }
    }
  });