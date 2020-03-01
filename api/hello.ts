import { NowRequest, NowResponse } from "@now/node";
const rp = require("request-promise");

const workWeChatHooks =
  "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=111caaee-4e34-48c6-b91b-df2962995167";

export default (request: NowRequest, response: NowResponse) => {
  const data = request.body
  const options = {
    method: "POST",
    uri: workWeChatHooks,
    body: {
      msgtype: "markdown",
      markdown: {
        content: `hello sentry ${new Date()}
        [查看详情](${data.url})`
      }
    },
    json: true
  };
  rp(options).then(_ => response.json(request));
};
