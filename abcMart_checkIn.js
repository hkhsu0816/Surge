  function abcMartNotify(subtitle = '', message = '') {
    $notification.post('ABC Mart 簽到', subtitle, message, {
      'url': ''
    });
  };
  
  const checkinRequest = {
    url: 'https://www.abc-mart.com.tw/api/home',
		insecure: true,
    headers: {
      'authorization': $persistentStore.read('AbcMartToken'),
    }
  };
  
  function checkin() {
    $httpClient.get(checkinRequest, function (error, response, data) {
      if (error) {
        abcMartNotify(
          '簽到失敗 ‼️',
          '連線錯誤'
        );
        $done();
      } else {
        if (response.status === 200) {
            const obj = JSON.parse(data);
            try {
              if (obj.status === 1) {
                abcMartNotify(
                  '目前點數',
                  '獲得 ' + obj.result.user.get_bonus + ' 積分'
                );
              } else {
                abcMartNotify(
                  '檢查點數紀錄失敗 ‼️️',
                  'Error: ' + obj.message
                );
              }
            } catch (e) {
              abcMartNotify(
                '簽到失敗 ‼️',
                e
              );
            }
        } else {
          abcMartNotify(
            'Cookie 已過期 ‼️',
            '請重新登入'
          );
          $done();
        }
      }
      $done();
    });
  }
  checkin();