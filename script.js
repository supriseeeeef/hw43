"use strict";
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50]);
    });
}
getPromise().then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
class Component {
    props;
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
const page = new Page({
    title: "Home Page",
});
page.pageInfo();
