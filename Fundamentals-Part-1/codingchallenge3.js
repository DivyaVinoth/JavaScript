const scoreDolphins = (96+108+89)/3;
const scoreKoalas = (88+91+110)/3;

if((scoreDolphins > scoreKoalas) && (scoreDolphins >= 100)){
  console.log(`Dolphins with a high score wins the trophy🏆`);
} else if ((scoreKoalas > scoreDolphins) && (scoreKoalas >= 100)){
  console.log(`Koalas with a high score wins the trophy🏆`);
} else if ((scoreDolphins === scoreKoalas) && (scoreDolphins >= 100 && scoreKoalas >=100)) {
  console.log(`Draw!!`);
} else {
  console.log(`No one win the trophy`);
}
