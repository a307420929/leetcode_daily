const compileUtil = {
    getVal(expr,vm){
        return expr.split('.').reduce((data,currentVal)=>{

        },vm.$data)
    },
    text(node,expr,vm){ //expr:msg 
        const value = this.getVal(expr,vm)
        this.updater.textUpdater(node,value)
    },
    html(node,expr,vm){

    },
    model(node,expr,vm){

    },
    on(node,expr,vm,eventName){

    },

    // 更新的函数
    updater:{
        textUpdater(node,value){
            node.textContent = value
        }
    }
}
class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        this.vm = vm
        // console.log(this.el)
        // 1.获取文档碎片对象，放入内存中会减少页面的回流和重绘
        const fragment = this.node2Fragment(this.el)
        // 2.编译
        this.compile(fragment);
        // 3.追加子元素到根元素
        this.el.appendChild(fragment)
    }

    compile(fragment) {
        //1.获取子节点
        const childNodes = fragment.childNodes;
        [...childNodes].forEach(child => {
            // console.log(child)
            if (this.isElementNode(child)) {
                // 元素节点
                // console.log('元素节点',child)
                this.compileElement(child)
            } else {
                // 文本节点
                // console.log('文本节点',child)
                this.compileText(child)
            }
            if (child.childNodes && child.childNodes.length) {
                this.compile(child)
            }
        })
    }
    compileElement(node) {
        // console.log(node);
        // <div v-text='msg'></div>
        const attributes = node.attributes;
        // console.log(attributes)
        [...attributes].forEach(attr => {
            // console.log(attr)
            const {
                name,
                value
            } = attr;
            if (this.isDirective(name)) { // 是一个指令，v-text v-html v-model v-on：click
                const [, dirctive] = name.split('-'); // text html model on:click
                const [dirName, eventName] = dirctive.split(':'); // text html model on 
                compileUtil[dirName](node,value,this.vm,eventName)
            }
        })
    }
    compileText(node) {

    }
    isDirective(attrName) {
        return attrName.startsWith('v-')
    }
    node2Fragment(el) {
        //创建文档碎片对象
        const f = document.createDocumentFragment()
        let firstChild;
        while (firstChild = el.firstChild) {
            f.appendChild(firstChild)
        }
        return f
    }
    isElementNode(node) {
        return node.nodeType === 1;
    }
}
class MVue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        this.$options = options;
        if (this.$el) {
            // 1.实现一个数据的观察者
            // 2.实现一个指令的解析器
            new Compile(this.$el, this)
        }
    }
}