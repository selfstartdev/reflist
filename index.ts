import { RefList } from './src/RefList';

const dataArray = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
];

const list = new RefList<string, typeof dataArray[0]>('color', dataArray);
console.log(list.sort((a, b) => a.color <= b.color));

console.log(list.mergeAndSort((a, b) => a.color <= b.color, new RefList<string, typeof dataArray[0]>('color', [{ color: 'purple', value: 'purple'}])));
