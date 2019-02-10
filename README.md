## baguette-dialog
對話視窗
## 前置安裝
    jQuery
## 安裝
1.用npm指令安裝
```sh
npm install baguette-dialog
```
2.用html語法引入
```html
<script src="baguette-dialog/baguette-dialog.jquery.js"></script>
```
#### Vue
```javascript
require('baguette-dialog/baguette-dialog.jquery.js');
```
## Demo
[Demo on jsFiddle](https://jsfiddle.net/Palehorse/xs0f2p5t/47)
## 使用方法
#### HTML
```html
<div id="popup-dialog">
    <div class="header">
        <div id="close-dialog">X</div>
    </div>
    <div class="message">
        <h3>This is a simple example</h3>
    </div>
</div>
```
#### CSS
```css
#show-dialog {
  cursor: pointer;
  font-size: 18px;
}

#popup-dialog {
  display: block;
  width: 260px;
  text-align: center;
  background-color: #fff;
  padding: 1.5%;
  border-radius: 5px;
}

#popup-dialog .header {
  display: block;
  width: 100%;
  font-size: 14px;
  height: 14px;
}

#popup-dialog .header #close-dialog {
  float:right;
  width: 14px;
  text-align:center;
  margin-right:10px;
  cursor: pointer;
}
```
#### 初始化
```javascript
$('#popup-dialog').dialog();
```
#### 顯示對話視窗
```javascript
$('#popup-dialog').dialog('show');
```
#### 關閉對話視窗
```javascript
$('#popup-dialog').dialog('hide');
```
#### 在對話視窗以外的任意處點擊滑鼠左鍵可關閉視窗
```javascript
$('#popup-dialog').dialog('dismiss');
```
