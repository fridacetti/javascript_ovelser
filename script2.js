function hilsen() {
  const tid = new Date().getHours();
  if (tid < 5) {
    console.log("Godnat");
  } else if (tid < 10) {
    console.log("Goddag");
  } else if (tid < 18) {
    console.log("Godaften");
  } else {
    console.log("Godnat");
  }
}
hilsen();
