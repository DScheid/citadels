var chars = [
  ["assasin", "witch", "magistrate"],
  ['thief', "spy", "blackmailer"],
  ["magician","wizard", "Seer"],
  ["king", "emperor", "patrician"],
  ["bishop", "abbot", "cardinal"],
  ["merchant", "alchemist", "trader"],
  ["architect","navigator", "scholar"],
  ["warlord", "diplomat", "marshal"],
  ["queen", "tax collector"]
]
var winners = ["","","","","","","","",""]
var num = 0;

for (var i = 0; i < chars.length; i++) {
  num = Math.floor(Math.random() * chars[i].length)
  winners[i] = chars[i][num]
}

console.log(winners);

for (var i = 0; i < winners.length; i++) {
  document.querySelector(".char-" + (i + 1)).textContent = (i + 1) + ": " + winners[i];
}
