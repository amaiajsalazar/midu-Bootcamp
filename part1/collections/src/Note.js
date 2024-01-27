
export const Note = (props) => {
    const { id, title, body } = props;
    // console.log("props"+props) // lio [Object Object]
    // console.log(props)
    //debugger
    return <li>
        <p><strong>{id}</strong>. {title}</p>
        <time><small>{body}</small></time>
    </li>;
};