import dayjs from "dayjs";
import { getRentalUrls } from "../code";
import { slackPost } from "../slack";

export function dRoom(): void {
  const slackUserName = "d-room";
  const dateFormat = "YYYY/M/D";
  const regularExpressions =
    /https:\/\/www\.daiwaliving\.co\.jp\/chintai\/\S*-\S*-\S*\//gm;
  const todayString: string = dayjs().format(dateFormat);
  const tomorrowString: string = dayjs().add(1, "day").format(dateFormat);
  const searchString: string = [
    "from:(lv-roomsearch@daiwaliving.co.jp)",
    " after:",
    todayString,
    " before:",
    tomorrowString,
  ].join("");
  const threads = GmailApp.search(searchString);
  const rentalUrls = getRentalUrls(threads, regularExpressions);
  rentalUrls.forEach((url: string) => {
    slackPost(slackUserName, url);
  });
}
