function btn(){
    
    const clickHandler = () =>{
        console.log("Clicked!");
    }
    
    const handleMouseOver = () =>{
        console.log('Hovered!');
    }
    return(
        <div>
        <button onClick={clickHandler}>Click Here!</button>
        <button onMouseOver={handleMouseOver}>Hover Here!</button>
        </div>
    );
}

export default btn;