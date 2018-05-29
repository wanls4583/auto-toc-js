# vue-infinite-auto-scroll
> 基于vue.js的无缝自动滚动的插件，可添加无限数据而不卡顿

## 内容

- [**`浏览器兼容性`**](#浏览器兼容性)
- [**`功能特性`**](#功能特性)
- [**`安装`**](#安装)
- [**`使用`**](#使用)
- [**`案例`**](#使用)
- [**`配置项默认值`**](#配置项默认值)   
- [**`个别特殊配置项说明`**](#个别特殊配置项说明)
- [**`历史版本`**](#历史版本)
- [**`贡献`**](#贡献)

## 浏览器兼容性
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+ | &check;| &check; | &check; | &check; | &check; | &check;

## 功能特性
* [x] 
* [x] 配置灵活
* [x] 持续维护迭代

## 安装

### NPM

```bash
npm install auto-toc
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/auto-toc-js@1.0.0/dist/toc.min.js"></script>
```

## 使用

```js
<script src="../dist/toc.min.js"></script>
<script>
	new Toc({
	    wrapperId: 'wrap',
	    insertId: 'wrap',
	    showSerial: true
	}).createToc();
</script>
```

## 案例
请查看[**`example`**](https://github.com/wanls4583/auto-toc-js/example)

## 配置项
|key|description|default|val|
|:---|---|---|---|
|`wrapperId`|需要生成toc目录的容器id| - |`String`|
|`insertId`|位置id，toc目录面板将插入在此id代表的元素的前面| - |`String`|
|`showSerial`|是否显示目录序号|`false`|`Boolean`|


## 个别特殊配置项说明

> 1.目录样式需要自行添加，可参考[**`示例`**](https://github.com/wanls4583/auto-toc-js/example)中的样式代码。


## 历史版本
See the GitHub [历史版本](https://github.com/wanls4583/auto-toc-js/releases).


## 贡献
欢迎给出一些意见和优化，期待你的 `Pull Request`