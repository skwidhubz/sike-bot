function logPoetry() {
    const poetry = [
      "Roses are red,\nViolets are blue,\nSugar is sweet,\nAnd so are you.",
      "How do I love thee? Let me count the ways.\nI love thee to the depth and breadth and height\nMy soul can reach, when feeling out of sight\nFor the ends of Being and ideal Grace.",
      "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date.",
      
    ];
  
    while (true) {
      const randomIndex = Math.floor(Math.random() * poetry.length);
      console.log(poetry[randomIndex]);
    }
  }
  
console.log('Welcome to Jamrock');

function yeebos(){
    setTimeout(8000);
    logPoetry;
}