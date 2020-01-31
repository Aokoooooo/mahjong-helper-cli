import program from "commander";
import { analyse, encode, parse } from "mahjong-helper";
import { printSuggests } from "./utils";

program.option("-a, --analyse <code>", "analyse xiangting");

program.option(
  "-s, --suggest [options] <code>",
  "give suggest, enter -d to show details"
);

program.parse(process.argv);
if (program.analyse) {
  console.log(`向听数: ${analyse(encode(parse(program.analyse).handTiles))}`);
} else if (program.suggest) {
  const suggest = program.suggest;
  const arg = program.args[0];
  if (suggest === "-d") {
    printSuggests(arg, true);
  } else {
    printSuggests(suggest);
  }
} else {
  program.help();
}
