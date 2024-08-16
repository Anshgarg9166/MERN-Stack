function customRender(reactElement,container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.prop.href)
    domElement.setAttribute('target',reactElement.prop.target)
    container.appentChild(domElement)
    */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
        }
    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props:{
        href : "https://www.google.co.in",
        target: '_blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)