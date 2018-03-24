module.exports = {
  summary: 'The rule to demo AnyProxy plugin',
  getWebFiles() {
    return [
      './web.js',
      './web.css'
    ]
  },
  *beforeDealHttpsRequest(requestDetail) {
    return true;
  },

  *beforeSendRequest(requestDetail) {
    requestDetail.pluginData = {
      requestPluginData: 'The data you set in before sending request'
    }
    return requestDetail;
  },
  /**
   * 总入口
   * @param requestDetail
   * @param responseDetail
   */
  *beforeSendResponse(requestDetail, responseDetail) {
    responseDetail.pluginData = {
      responsePluginData: 'The data you set in before sending response'
    }

    return responseDetail;
  }
};
