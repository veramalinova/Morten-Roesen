<!--Javascript for Read more/Read less button-->

<script>
function myFunction() {
  let spanRead = document.getElementById("span-read");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (spanRead.style.display === "none") {
    spanRead.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    spanRead.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
</script>