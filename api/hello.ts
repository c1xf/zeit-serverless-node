import { NowRequest, NowResponse } from "@now/node";
const rp = require("request-promise");

const workWeChatHooks =
  "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=e552904d-e6aa-4ed9-9bc9-5d3d5c3fc5de";

export default (request: NowRequest, response: NowResponse) => {
  const data = request.body
  const options = {
    method: "POST",
    uri: workWeChatHooks,
    body: {
      msgtype: "markdown",
      markdown: {
        content: `hello sentry ${new Date()}`
      }
    },
    json: true
  };
  rp(options).then(_ => response.json(request));
};
