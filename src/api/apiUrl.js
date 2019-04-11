/**
 * 配置应用所有接口地址，利于维护
 */
import globalInfo from `./config`

const { root } = globalInfo
const {
  common,
  loan,
  refund,
  account,
  authLogin,
  authLogin,
  sign,
  authenticate,
  process,
  bindCard,
  fillInformation,
  rejectApply,
  userInfo,
  chooseProduct,
  imageProcessing,
  authentication,
  remark,
  jzBank,
  collectLocation,
  submitInterviewInfo,
  authMeituan,
  getOcrResult
} = {
  common: {
    getParameters: `${root}common/getParameters.do`,  //多参数查询接口---商户贷/现金贷
    getDianPingNameList: `${root}common/getDianPingNameList.do` //商户名称关联接口
  },
  loan: {
      bha: `${root}visit/bha.do`,//埋点
      getProductInfos: `${root}loanApply/getProductInfos.do`, //借款产品配置信息接口---商户贷
      addLoanApply: `${root}merchant/loanApply/addLoanApply.do`, //借款申请接口---商户贷/现金贷
      submitData: `${root}loanApply/submitData.do`,  //统一进件接口---商户贷
      myLoan: `${root}merchant/process/myLoan.do`, //我的借款进度---商户贷
      getLoanApply: `${root}loanApply/getLoanApply.do`,  //根据借款申请编号查询借款申请信息接口---商户贷/现金贷
      confirmLoanApply: `${root}merchant/loanApply/confirmLoanApply.do`,    //补充借款申请数据接口---商户贷/现金贷
      showLoanContract: `${root}loanContract/showLoanContract.do`, //查看借款合同---商户贷/现金贷
      loadDownLoanContract: `${root}loanContract/loadDownLoanContract.do`, //查看借款合同---商户贷/现金贷
      loanAgreement: `${root}loanContract/loanAgreement.do`, //借款协议---商户贷/现金贷
      getContractTemplateList: `${root}loanContract/getContractTemplateList.do`, //借款合同模板列表---商户贷/现金贷
      getContractList: loan +`loanContract/getContractList.do`, //签约成功后获取合同
      getProductCapitails: `${root}loanContract/getProductCapitails.do`, // 产品资金方列表---商户贷/现金贷
      getContractFillDate: `${root}loanContract/getContractFillDate.do`, //新的获取合同数据填充接口
      getExpandLoanApply: `${root}loanApply/getExpandLoanApply.do`, // 根据借款申请编号查询扩展的借款申请信息接口---商户贷/现金贷
      getQuotaInfo: `${root}quotainfo/getQuotaInfo.do`, //客如云预估额度查询接口
      checkMerchantBlackList: `${root}loanApply/checkMerchantBlackList.do`, //商户贷校验黑名单接口
      getOpenAccountMobileMessage:  `${root}pufaBank/getOpenAccountMobileMessage.do`, //浦发开户---开户
      openAccount:  `${root}pufaBank/openAccount.do`, //浦发开户---获取短信
      queryResult:  `${root}pufaBank/queryResult.do` //浦发开户---查询
  },
  refund: {
      getLoanApplys: `${root}plan/getLoanApplys.do`, //所有借款记录---商户贷/现金贷
      getLoanApplyDetail: `${root}plan/getLoanApplyDetail.do`, //还款记录---商户贷/现金贷
      trialRepaymentPlan: `${root}plan/trialRepaymentPlan.do` //还款计划试算
  },
  account: {
      showBasicAccount: `${root}account/showBasicAccount.do`, //点击忘记支付密码（查询账户信息）
      sendMessage: `${root}account/sendMessage.do`, //发送验证码接口
      chackMessageCode: `${root}account/chackMessageCode.do`, //验证验证码接口
      chackAccount: `${root}account/chackAccount.do`, //验证身份证和卡号
      savePassword: `${root}password/savePassword.do`, //设置支付密码接口
      checkBussinessPwd: `${root}password/checkBussinessPwd.do` //验证交易密码接口
  },
  authLogin: {
      addAuthLogin: `${root}authLogin/addAuthLogin.do`  //是否授权接口---商户贷
  },
  sign: {
      signature: `${root}sign/signature.do` //确认借款---商户贷/现金贷
  },
  authenticate: {
      authCertInfo: `${root}merchant/authenticate/authCertInfo.do`,  //资料---身份证接口---商户贷/现金贷
      authCorporationInfo: `${root}merchant/authenticate/authCorporationInfo.do`,  //认证资料---营业执照接口---商户贷
      authBankCardInfo: `${root}authenticate/authBankCardInfo.do`,  //认证资料---银行卡认证接口---商户贷/现金贷
      getCorporationInfo: `${root}merchant/authenticate/getCorporationInfo.do`,//营业执照回显接口
      getAccountMobleCode: `${root}authenticate/getAccountMobleCode.do`, //给银行卡预留手机号发送短信验证码接口
      changeLoanAccount: `${root}authenticate/changeLoanAccount.do` //更换借款所使用银行卡接口
  },
  process: {
      control: `${root}merchant/process/control.do`  //放款审批查询与审批阶段查询接口可以共用---商户贷/现金贷
  },
  bindCard: {
      getAccountList: `${root}bindCard/getAccountList.do`,  //绑定银行卡---已绑定的银行卡接口---商户贷/现金贷
      getMobileCodeForBind: `${root}bindCard/getMobileCodeForBind.do`,  //绑定银行卡---短信验证码接口---商户贷/现金贷
      getMobileCodeForBindAgain: `${root}bindCard/getMobileCodeForBindAgain.do`,  //绑定银行卡---再次获取短信验证码接口---商户贷/现金贷
      toBind: `${root}bindCard/toBind.do`,  //绑定银行卡---绑定接口---商户贷/现金贷
      getBankList: `${root}bindCard/getBankList.do`,//绑定银行卡---银行列表接口---商户贷/现金贷
      checkCardUsable: `${root}bindCard/checkCardUsable.do`//所选卡是否可用接口
  },
  fillInformation: {
      addOperationInformation: `${root}fillInformation/addOperationInformation.do`,  //填写资料---其他信息接口---商户贷
      addApplyFamilyInformation: `${root}fillInformation/addApplyFamilyInformation.do`,  //填写资料---家庭信息接口---商户贷
      fillPhoto: `${root}fillInformation/fillPhoto.do`,   //拍照资料---商户贷
      showFamilyInformation: `${root}fillInformation/showFamilyInformation.do`,  //家庭信息回显---商户贷
      showOtherInformation: `${root}fillInformation/showOtherInformation.do`,  //其他信息回显---商户贷
      showPhoto: `${root}fillInformation/showPhoto.do`,   //店铺logo、经营场回显等按照类型区分---商户贷
      fillSinglePhoto: `${root}fillInformation/fillSinglePhoto.do`,  //单张上传拍照资料---商户贷
      deletePhoto: `${root}fillInformation/deletePhoto.do`,   //删除拍照资料---商户贷
      updateInfoStatus: `${root}fillInformation/updateInfoStatus.do`,//修改完备状态---商户贷
      fillLoanImage:`${root}fillInformation/fillLoanImage.do`,//上传拍照资料接口
      deleteLoanImage:`${root}fillInformation/deleteLoanImage.do`,//删除拍照资料
      showLoanImage:`${root}fillInformation/showLoanImage.do`,//回显图片信息
      updateLoanMore:`${root}fillInformation/updateLoanMore.do`,//上传规模资料
      showLoanMore:`${root}fillInformation/showLoanMore.do`,//回显规模资料
      getBigdataMerchantInfo: `${root}fillInformation/getBigdataMerchantInfo.do` //获取大数据商户信息接口
  },
  rejectApply: {
      rejectApplyList: `${root}rejectApply/rejectApplyList.do`   //修改资料列表查询---商户贷
  },
  password: {
      savePassword: `${root}password/savePassword.do` //设置支付密码接口
  },
  userInfo: {
      getUserInfo: `${root}merchant/userInfo/getUserInfo.do`   //登录之后获取用户信息
  },
  chooseProduct: `${root}merchant/product/chooseProdcut.do`, //选择借款产品
  imageProcessing:{
      getImageNo: `${root}image/getImageNo.do`,//获取imageNo
      deleteLoanImage:`${root}fillInformation/deleteLoanImage.do`,//删除拍照资料
      uploadImages:`${root}personImage/uploadImages.do`
  },
  authentication: {
      personFaceNew: `${root}authentication/personFaceNew.do`,//活体认证接口
      authOperatorOrEC: `${root}authentication/authOperatorOrEC.do`,
      faceID: loan+`authenticationFace/faceID.do`,
      isPass:loan+`authenticationFace/isPass.do`,
      getToken:loan+`authenticationFace/faceID/App/getToken.do`,
      doAuth:loan+`authenticationFace/faceID/App/doAuth.do`
  },
  remark: {
      getRemark: `${root}merchant/loanApply/getRemark.do`,//获取备注信息
      saveRemark: `${root}merchant/loanApply/saveRemark.do`,//保存备注信息
  },
  jzBank: {
      getOpenAccountUrl: `${root}jzBank/getOpenAccountUrl.do`,//晋中开户URL---查询接口
      callback: `${root}jzBank/callback.do` //晋中开户回调
  },
  collectLocation: `${root}location/collectLocation.do`, //终端信息收集接口
  submitInterviewInfo: `${root}merchant/interview/submitInterviewInfo.do`, // 视频面签信息接口
  authMeituan: `${root}merchant/authentication/authMeituan.do`, // 提额
  getOcrResult: `${root}authenticate/getOcrResult.do` // 身份证图片OCR识别}
}
export {
  common,
  loan,
  refund,
  account,
  authLogin,
  authLogin,
  sign,
  authenticate,
  process,
  bindCard,
  fillInformation,
  rejectApply,
  userInfo,
  chooseProduct,
  imageProcessing,
  authentication,
  remark,
  jzBank,
  collectLocation,
  submitInterviewInfo,
  authMeituan,
  getOcrResult
 }
