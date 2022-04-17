// Shuffle function from http://stackoverflow.com/a/2450976
let score = 0,
  list1,
  winner = 0;
let shuffle = function (array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

document.addEventListener("DOMContentLoaded", function () {
  const list = [];
  let i = 0;
  document.querySelectorAll(".card").forEach((card) => {
    list.push(card.childNodes[1].classList[1]);
  });
  let list2 = list;
  list2 = shuffle(list2);
  document.querySelectorAll(".card").forEach((li) => {
    li.childNodes[1].classList.remove(li.childNodes[1].classList[1]);
    li.childNodes[1].classList.add(list2[i]);
    i++;
  });

  document.getElementById("score").innerText = score;
  document.querySelectorAll(".card").forEach(function (button) {
    button.onclick = function handle() {
      if (winner == 11) {
        button.classList.add("show");
        alert("winner is player 3");
        button.classList.add("matched");
        setTimeout(() => {
          window.location.reload();
        }, 800);
      }

      score += 1;
      document.getElementById("score").innerText = score;
      button.classList.add("show");
      setTimeout(() => {
        button.classList.remove("show");
      }, 400);
      console.log(button.childNodes[1].classList[1]);
      console.log(
        document.getElementById("next-card").childNodes[0].classList[1]
      );

      if (
        button.childNodes[1].classList[1] ==
        document.getElementById("next-card").childNodes[0].classList[1]
      ) {
        ++winner;
        setTimeout(function () {
          button.classList.remove("show");
          button.classList.add("matched");
          list.splice(
            list.indexOf(
              document.getElementById("next-card").childNodes[0].classList[1]
            ),
            1
          );
          list1 = shuffle(list);
          if (winner != 11) {
            document
              .getElementById("next-card")
              .childNodes[0].classList.remove(
                document.getElementById("next-card").childNodes[0].classList[1]
              );

            document
              .getElementById("next-card")
              .childNodes[0].classList.add(list1[0]);
          }
        }, 400);
      } else {
        button.onclick = function handle() {
          if (winner == 11) {
            button.classList.add("show");
            alert("winner is player 3 ");
            button.classList.add("matched");
            setTimeout(() => {
              window.location.reload();
            }, 800);
          }
          if (
            button.childNodes[1].classList[1] ==
            document.getElementById("next-card").childNodes[0].classList[1]
          ) {
            ++winner;
            setTimeout(function () {
              button.classList.remove("show");
              button.classList.add("matched");
              list.splice(
                list.indexOf(
                  document.getElementById("next-card").childNodes[0]
                    .classList[1]
                ),
                1
              );
              list1 = shuffle(list);
              if (winner !== 11) {
                document
                  .getElementById("next-card")
                  .childNodes[0].classList.remove(
                    document.getElementById("next-card").childNodes[0]
                      .classList[1]
                  );

                document
                  .getElementById("next-card")
                  .childNodes[0].classList.add(list1[0]);
              }
            }, 400);
          }
          score += 1;
          document.getElementById("score").innerText = score;
          button.classList.add("show");
          setTimeout(function () {
            button.classList.remove("show");
          }, 400);
        };
      }
    };
  });

  document.querySelector(".restart").onclick = function () {
    window.location.reload();
  };
});
