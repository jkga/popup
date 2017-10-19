/**
 Copyright (c) 2017 John Kenneth Abella

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
export default class{
	constructor(){
		this.implementedPopups=[]
		this._popupOpenHandler()
		this._popupCloseHandler()
	}
	_setDisplayAttr(el,display='block'){
		el.setAttribute('data-popup-display',display)
	}

	_populatePopups(selector){
		return new Promise((resolve,reject)=>{
			//Do not query visited popups
			if(typeof this.implementedPopups[selector]!='undefined'){
				return resolve(this.implementedPopups[selector])
			}

			document.querySelectorAll(selector).forEach((el,index)=>{
				//do not override attached open
				if(typeof el.open=='undefined'){
					el.open=(e)=>{
						e.preventDefault()
						this._setDisplayAttr(el,'open')
					}
				}

				if(typeof el.close=='undefined'){
					el.close=()=>{
						this._setDisplayAttr(el,'closed')
					}
				}

				//prevent attaching event listeners to the same target
				this.implementedPopups[selector]=el
				resolve(el)
			})

		})
	}

	_closeParentPopup(e){
		e.preventDefault()
		//allow close button to be placed inside OR outside .content 
		if(this.offsetParent.getAttribute('data-popup-display')!=null){
			return this.offsetParent.close()	
		}

		return this.offsetParent.offsetParent.close()
	}

	_popupOpenHandler(){
		document.querySelectorAll('[data-popup-button]').forEach((el,index)=>{
			var target=el.getAttribute('href')
			this._populatePopups(target).then((e)=>{
				el.addEventListener('click',e.open)
			})
		})
	}

	_popupCloseHandler(){
		document.querySelectorAll('[data-popup-toggle]').forEach((el,index)=>{
			el.removeEventListener('click',this._closeParentPopup)
			el.addEventListener('click',this._closeParentPopup)
		})
	}

}