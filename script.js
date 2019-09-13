window.onload = function main() {
    const body = document.body.querySelectorAll( '*' );

    for (let i=0; i <= body.length; i++) {
        const component = body[i]

        if(component.children.length >= 5) continue
        if(component.nodeName == "NAV") continue
        if(component.nodeName == "HEADER") continue

        component.onmouseover = event => {
            event.cancelBubble = true
            component.classList.add('hovering')
        }

        component.onclick = event => {
            event.cancelBubble = true
            let key = nodeToKey(component)
            let node = this.keyToNode(key)
            this.console.log({key,node})
        }

        component.onmouseout = _ => component.classList.remove('hovering')
    }
}

function nodeToKey(component) {
    const path = [];
    let node = component;

    while (node && node.parentNode) {
        path.push(Array.prototype.indexOf.call(node.parentNode.childNodes, node));
        node = node.parentNode
    }
    return path.reverse().join('/');
}

function keyToNode(key) {
    const body = document.body
    const path = key.split('/')
    let current = body
    for (let i = 2; i < path.length; i++) {
        const index = path[Number.parseInt(i)];
        current = current.childNodes[index]
    }
    return current
}
    

// <!-- PASTE HERE -->
// <script type="text/javascript" src="script.js"></script>
// <link rel="stylesheet" type="text/css" href="styles.css">
// <!-- PASTE HERE END -->
