const webHookUrl = process.env.SLACK_WEBHOOK_URL;
const EmptyWebHookUrl = "webHooKUrl is not specified";

/**
 * @param userName
 * @param rentalUrl
 */
export function slackPost(userName: string, rentalUrl: string): void {
  if (webHookUrl === "" || webHookUrl === undefined) {
    Logger.log(EmptyWebHookUrl);
    return;
  }

  const jsonData = {
    username: userName,
    text: rentalUrl,
  };

  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(jsonData),
  };

  try {
    UrlFetchApp.fetch(webHookUrl, options);
  } catch (e) {
    Logger.log(e);
  }
}
