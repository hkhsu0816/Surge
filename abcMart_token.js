function abcMartNotify(subtitle = '', message = '') {
    $notification.post('ABCMart token', subtitle, message, { 'url': '' });
  };
  
  const abcMartToken = $request.headers['authorization'] || $request.headers['Authorization'];
  if (abcMartToken) {
    const saveToken = $persistentStore.write(abcMartToken, 'AbcMartToken');
  
    if (!saveToken) {
      abcMartNotify(
        '保存失敗 ‼️',
        '請稍後嘗試'
      );
    } else {
      abcMartNotify(
        '保存成功 🍪',
        ''
      );
    }
  } else {
    abcMartNotify(
      '保存失敗 ‼️',
      '請重新登入'
    );
  }
  $done({});