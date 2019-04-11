/**
 *  配置不同环境应用api请求地址
 *  env  —— mock：mock数据  dev：开发，sit2：测试， 'pro'：生产
 *  getContractTempUrl  获取合同模板地址——用于显示协议
 *  root 后台服务器地址
  */
const dpr = window.devicePixelRatio <= 2 ? 2 : 3
const random = Math.floor(Math.random() * 8)
const environment = { isAndroid: false, isIos: false, isWx: false }
const env = 'dev'

// 判断环境
const userAgentInfo = navigator.userAgent.toLowerCase()
const iOSAgents = ['iphone', 'ipad', 'ipod']
environment.isAndroid = userAgentInfo.indexOf('android') > -1 || userAgentInfo.indexOf('adr') > -1
environment.isWx = /micromessenger/i.test(userAgentInfo)
for (let v = 0; v < iOSAgents.length; v += 1) {
  if (userAgentInfo.indexOf(iOSAgents[v]) > -1) {
    environment.isIos = true
    break
  }
}

let root = ''
let getContractTempUrl = ''
const { origin } = window.location
const useContractNumber = 'JZCTB_LMM_PERSONINFO_AUTH'
const creditContractNumber = 'JZCTB_LMM_PERSONCREDIT_AUTH'
// 配置请求路径
switch (env) {
  case 'mock':
    root = '/'
    break
  case 'dev':
    root = 'http://test.qianbaocard.com:23480/loan/' // 测试环境
    getContractTempUrl = 'http://test.qianbaocard.com:23480/file/images.do?name='
    break
  case 'test':
    root = `${origin}/loan/`
    getContractTempUrl = `${origin}/file/images.do?name=`
    break
  case 'pro':
    root = `${origin}/loan/`
    getContractTempUrl = `https://img${random}.qianbao.com/public/qianbaolife/`
    break
  default:
}
const globalInfo = {
  root,
  getContractTempUrl,
  dpr,
  environment,
  useContractNumber,
  creditContractNumber,
}

// 暴露出来的信息
export default globalInfo
