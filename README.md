# popup-es
Lightweight custom modal that works independently of framework.   


### Installation
> This is still under development but feel free to test it and use on your projects.To install this   
package via **npm**, run `npm install popup-es` or via **yarn**  `yarn add popup-es --dev`.


### How To use
You can now use the es6 **import** to import this package to your project . By time of writing, transpiling ES6 codes to ES5 inside `node_modules/` is not enabled by default, we forced the transpilation using `browserify`, `babelify` and `babel-preset-es2015` plugin as a temporary solution.Please read this [FAQ](https://github.com/babel/babelify#why-arent-files-in-node_modules-being-transformed) for more info.   
   


#### Javascript
```javascript
import Popup  from 'popup-es'

//wait the page to be fully loaded before initializing popup
function init(){
	document.addEventListener('DOMContentLoaded',(e)=>{
		//create a popup instance
		let Pop=new Popup()
	})	
}

init()
```   

#### CSS
Put inside the header of your html
```html
 <link rel="stylesheet" type="text/css" href="path/to/node_modules/popup-es/dist/src/css/popup-es.min.css">
```

If you do not want additional external stylesheet, you may copy the content of `src/css/popup-es.css` and paste it directly to your stylesheet.

**src/css/popup-es.css**

```css
/**
 * Popup-es.css
 */
*[data-popup]{
	position: fixed;
	width: 100%;
	height: 100%;
	top:0;
	left: 0;
	overflow-y: auto;
	background: rgba(40,40,40,0.9);
	visibility:hidden;
	opacity: 0;
	z-index: 1;
}

*[data-popup="fade"]{
	transition: visibility 0.2s, opacity 0.2s ease-in-out;
}

*[data-popup] > .content:not([data-role="none"]){
	position: absolute;
	float: left;
	width: 250px;
	height:auto;
	min-height: 300px;
	background: #fff;
	left:calc(50% - 125px);
	top:10vh;
}

*[data-popup] .popup-close-button{
	float: right;
	margin:5px;
}

*[data-popup-display="open"]{
	opacity: 1;
	visibility: visible;
}

*[data-popup-display="closed"]{
	opacity: 0;
	visibility:hidden;
}

```

#### HTML
You can place this modal everywhere in the body of your html pages. This will stay hidden untill 
the `data-popup-button` is press.
```html
<div id="modal" data-popup="fade">
	<div class="content">
		<!--close button-->
		<a href="#" data-popup-toggle="close">x</a>
		<div class="header"></div>
		<div class="body"></div>
	</div>	
</div>   

<!--open button-->
<a href="#modal" data-popup-button>Popup</a>
```   

### Popup attributes
- **data-popup** [fade]     
Initialize popup box. Specify a value of **"fade"** to have a fade effect when you open or close the popup. You may change the ***0.2s*** default timming by replacing the value of `*[data-popup="fade"]` in `popup-es.css`   


- **data-popup-toggle** [close]      
Closed the parent popup   


- **data-popup-button**     
Opens the popup box with an **id similar** to its **href**.
   

### Customizing Popup
**popup-es** is designed to work **without JQuery** or any other similar frameworks. This will give 
more freedom to the developer to design their popups on their own.They just need to add `data-role="none"` attribute in the **.content** to ignore the default css and apply their custom styling.     


