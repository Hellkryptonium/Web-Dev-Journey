function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("bye!");
}

function handleDbClick() {
    console.log("you doulbe clicked!");
}

export default function Button() {
    return (
        <>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>this parah is for event demo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ad cum aut nesciunt iste beatae dolorum. Nisi commodi id aspernatur consectetur nesciunt similique maiores voluptatum illum quidem distinctio, ipsam aperiam?</p>
            <button onDoubleClick={handleDbClick}>double click</button>
        </>
    )
}