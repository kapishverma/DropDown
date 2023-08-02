export default function DropDown(props) {
    const { item, handleSelect } = props;
    return (
        <div onClick={() => handleSelect(item.color)}><li>{item.text}</li></div>
    )
}