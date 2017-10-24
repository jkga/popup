# popup-es
Lightweight custom modal that works independently of framework.      

![Stage](https://img.shields.io/badge/stage-development-green.svg)


### Installation
> This is still under development but feel free to test it and use on your projects.To install this packagevia **npm**,   
run `npm install popup-es` or via **yarn**  `yarn add popup-es --dev`. Check the **develop** branch
for the latest features and updates.


### How To use
You can now use the es6 **import** to import this package to your project . By the time of writing, transpiling ES6 codes to ES5 inside `node_modules/` is not enabled by default, we forced the transpilation using `browserify`, `babelify` and `babel-preset-es2015` plugin as a temporary solution.Please read this [FAQ](https://github.com/babel/babelify#why-arent-files-in-node_modules-being-transformed) for more info.   
   

#### CSS
Put inside the head of your html
```html
 <link rel="stylesheet" type="text/css" href="path/to/node_modules/popup-es/dist/src/css/popup-es.min.css">
```

If you do not want additional external css, you may copy the content of `src/css/popup-es.css` and paste it right to your stylesheet.


#### HTML
You can place this modal anywhere in the body of your html pages and this will stay hidden untill 
the `data-popup-toggle` is press. We recommend the use of HTML5 `<dialog>` element but you can still use a regular `<div>`
```html
<dialog id="modal" data-popup="fade">
	<div class="content">
		<!--close button-->
		<a href="#" data-popup-toggle="close">x</a>
		<div class="header"></div>
		<div class="body"></div>
	</div>	
</dialog>   

<!--open button-->
<menu>
	<a href="#" data-target="#modal" data-popup-toggle="open">Popup</a>
</menu>
```      


#### Javascript
```javascript
import Popup  from 'popup-es'

//create a popup instance
let PopupInstance=new Popup()
```   


   
### Popup functions
- `element.show()`		Opens the target popup   
- `element.close()`		Close the target popup
- `PopupInstance.closeAll()`		Close all the popup instance
- `PopupInstance.close([])` [querySelector. . .]		Close all popups specified in close params


### Popup attributes
- `data-popup` [fade]     
Initialize popup box. Specify a value of **"fade"** to have a fade effect when you open or close the popup. You may change the ***0.2s*** default timming by replacing the value of `*[data-popup="fade"]` in `popup-es.css`     

- `data-popup-toggle` [open | close]		**Opens** or **Closed** the popup box.   


- `data-target` 		The popup you want to open. This must be use with `data-popup-toggle="open"`       


### Direct Calls
In case you need to open/close popup inside your function, you can make a direct call for the following:
```javascript
document.getElementById('modal').open() // open
document.getElementById('modal').close() // close
```


### Promise
You can use a callback in closing multiple modal
	`let PopupInstance=new Popup()`
- `PopupInstance.close([]).then(e=>{ //some func; })`
- `PopupInstance.closeAll().then(e=>{ //some func; })`   



### Customizing Popup
**popup-es** is designed to work **without JQuery** or any other similar frameworks. This will give 
more freedom to the developer to design their popups on their own.They just need to add `data-role="none"` attribute in the **.content** to ignore the default css before applying their custom styling.        


> For Bugs, enhancement , or feature request, please submit a ticket [here](https://github.com/jkga/popup-es/issues) 


