function getPromise(): Promise<[string, number]> {
    return new Promise((resolve) => {
        resolve(["Text", 50]);
    });
}

getPromise().then((data) => {
    console.log(data);
});



type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
};

function compare(top: Pick<AllType, "name" | "color">, bottom: Pick<AllType, "position" | "weight">): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}


function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign(objA, objB);
}


interface PageProps {
    title: string;
}

class Component<T> {
    constructor(public props: T) { }
}

class Page extends Component<PageProps> {
    pageInfo() {
        console.log(this.props.title);
    }
}

const page = new Page({
    title: "Home Page",
});

page.pageInfo();