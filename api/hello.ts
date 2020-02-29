import { NowRequest, NowResponse } from '@now/node'
const rp = require('request-promise');

const workWeChatHooks = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=111caaee-4e34-48c6-b91b-df2962995167'

export default (_: NowRequest, response: NowResponse) => {

  const options = {
    method:"POST",
    uri:workWeChatHooks,
   body: {
      "msgtype": "markdown",
      "markdown": {
          "content": `实时新增用户反馈<font color=\"warning\">132例</font>，请相关同事注意。
           类型:<font color=\"comment\">用户反馈</font>
           普通用户反馈:<font color=\"comment\">117例</font>
           VIP用户反馈:<font color=\"comment\">15例</font>`
      }
  },
  json:true
  
  }
  rp(options).then(rst=>response.json(rst))
}

