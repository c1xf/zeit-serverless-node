import { NowRequest, NowResponse } from "@now/node";
const rp = require("request-promise");

const workWeChatHooks =
  "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=181322e6-9f07-43dc-add2-2db5aed6281b";

export default (request: NowRequest, response: NowResponse) => {
  const data = request.body
  const options = {
    method: "POST",
    uri: workWeChatHooks,
    body: {
      msgtype: "markdown",
      markdown: {
        content: `hello sentry ${new Date()},${data}`
      }
    },
    json: true
  };
  rp(options).then(_ => response.status(200).send(`Hello!`));
};
