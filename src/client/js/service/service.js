function callAjax(callType, callURL, callContentType, callData) {
  return new Promise(((resolve, reject) => {
    $.ajax({
      type: callType,
      url: callURL,
      contentType: callContentType,
      data: callData,
    }).done((data) => {
      resolve(data);
    }).fail((msg) => {
      reject(msg);
    });
  }));
}

function getMsg() {
  return callAjax('GET', '/api/getMsg', 'application/json');
}

export default getMsg;
