const message = `I don’t think I ever told you this,
but from the very first time we met,
I felt something different.

The beginning was a little strange,
unexpected even — but somehow, it was really beautiful.

Since that moment,
I’ve just wanted to get to know you more.

And honestly, the more I do,
the more I find myself liking you.`;

let i = 0;
const speed = 40;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("next").style.display = "block";
  }
}

window.onload = typeWriter;
