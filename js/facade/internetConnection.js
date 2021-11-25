class InternetConnection {
  connect() {}
  getData(url, param) {
    return "response data from internet";
  }
  disconnect() {}
}

exports.InternetConnection = InternetConnection;
