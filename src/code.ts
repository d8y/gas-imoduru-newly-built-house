export function getRentalUrls(
  threads: GoogleAppsScript.Gmail.GmailThread[],
  regularExpressions: RegExp
): string[] {
  let urls: string[] = [];
  threads.forEach((thread: GoogleAppsScript.Gmail.GmailThread) => {
    thread
      .getMessages()
      .forEach((message: GoogleAppsScript.Gmail.GmailMessage) => {
        const rentalUrls: RegExpMatchArray | null = message
          .getPlainBody()
          .match(regularExpressions);
        if (rentalUrls) {
          urls = [...urls, ...rentalUrls];
        }
        thread.moveToTrash();
      });
  });
  return urls;
}
