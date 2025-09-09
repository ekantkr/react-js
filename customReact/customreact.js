const { Children } = require("react");

function customRenter(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for(const prop in reactElement.props){
        if(prop == 'Children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(document)
}

const reactElement = {
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_black'
    },
    Children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRenter(reactElement, mainContainer)