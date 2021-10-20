# Debounce 與 Throttle

## 使用時機

- `Debounce` 的使用時機通常使用在不可連續點擊的「按鈕」，避免使用者重複送出相同的事件
- `Throttle` 最常見的用法在 `onScroll`，限制每個時間間隔事件觸發的數量，避免 `onScroll` 無節制地重複觸發造成效能問題。
