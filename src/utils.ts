import { Hand, Suggest, suggest } from "mahjong-helper";

export const printSuggests = (
  code: string,
  showDetails: boolean = false
): void => {
  const suggests = suggest(Hand.fromCode(code));
  if (!suggests) {
    console.log("荣和");
  } else if (!suggests.length) {
    console.log("没牌了,随便打掉换牌吧");
  } else {
    suggests.forEach(i => {
      printSuggestsHelper(i, showDetails);
    });
  }
};

const printSuggestsHelper = (suggest: Suggest, showDetails: boolean) => {
  const summary = `切:${suggest.discard.name} 向听:${suggest.oldXiangTing}->${suggest.newXiangTing} 进张:${suggest.count}`;
  if (showDetails) {
    let details = "";
    suggest.details.forEach((v, k) => {
      details += `${k.name}(${v}) `;
    });
    console.log(`${summary}; ${details}`);
  } else {
    console.log(summary);
  }
};
