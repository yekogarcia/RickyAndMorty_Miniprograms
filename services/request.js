const request = (edpoint, method, data = {}) => {
  return new Promise((resolve, reject)=>{  
    my.request({
      url: `https://rickandmortyapi.com/api/${edpoint}`,
      method: method,
      data: data,
    success: function (res) {
      resolve(res.data)
      my.alert({
        content: 'success'
      });
    },
    fail: function (error) {
      reject(error);
      my.alert({
        content: 'fail'
      });
    },
    complete: function (res) {
      my.hideLoading();
      my.alert({
        content: 'complete'
      });
    }
  });
})
}

const get = (endpoint, data = {}) =>{
  return request(endpoint, 'GET', data);
}

module.exports = {
  get
}