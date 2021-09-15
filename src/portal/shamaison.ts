import dayjs from "dayjs";
import { getRentalUrls } from "../code";
import { slackPost } from "../slack";

export function shamaison(): void {
  const slackUserName = "shamaison";
  const dateFormat = "YYYY/M/D";
  const regularExpressions = /\[物件\d+\]\s.*$/gm;
  const todayString: string = dayjs().format(dateFormat);
  const tomorrowString: string = dayjs().add(1, "day").format(dateFormat);
  const searchString: string = [
    "from:(fcs-clubshm@sekisuihouse.co.jp)",
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
