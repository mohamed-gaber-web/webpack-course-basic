class Component {
    
    btnClass = "btn-block";

    render() {
        const titleHead = document.createElement('h1');
        titleHead.textContent = "Webpack Learning";
        titleHead.className = "title";
        const body = document.body;
        body.append(titleHead);
    }

    addBtnElement() {
        const divElement = document.createElement('div');
        divElement.className = this.btnClass;
        const body = document.body;
        body.append(divElement);
        const btn = document.createElement('button');
        btn.textContent = "Change Title";
        btn.className = "btn";

        divElement.append(btn);
 
    }

}

export default Component;