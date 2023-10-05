function solve() {
  let onlyText = "proba...text ooshte text... probaaaa.";
  onlyText = onlyText.replace(new RegExp("\\.\\.\\.", "\g"), "pooointing");
  console.log(onlyText);
  onlyText = onlyText.replace(new RegExp("pooointing", "\g"), "...");
  console.log(onlyText);
}
solve();
