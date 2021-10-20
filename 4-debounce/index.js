let interval = null;
let callCount = 0; // mockSendData 實際被呼叫的次數
let clickCount = 0; // 點擊次數，模擬使用者點擊按鈕觸發事件的次數

const mockData = {
  name: 'Harry',
  email: 'harrychiu1106@gmail.com',
};

/**
 * debounce
 * 說明：時間內重複觸發相同事件時，只保留最後一個觸發的事件
 * @param {*} func 需要 debounce 的 function
 * @param {*} delay 時間間隔
 * @returns {func} debounce 化的 function
 */
function debounce(func, delay = 250) {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function mockSendData(data) {
  callCount++;
  console.log('傳送資料至 Server 次數: ', callCount);
  console.log('點擊次數', clickCount);
  console.log('參數正確傳入: ', data);
}

const debouncedFunc = debounce(mockSendData);

interval = setInterval(() => {
  if (clickCount < 10) {
    debouncedFunc(mockData);
    clickCount++;
  } else {
    clearInterval(interval);
  }
}, 100);
