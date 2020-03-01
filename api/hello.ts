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
        content: `${JSON.stringify(data)}`
      }
    },
    json: true
  };
  rp(options).then(rst => response.json(rst));
};
