import { ArrowUpCircle } from 'react-bootstrap-icons';

export default function UpIcon(props){
    const textSecondary = {
        color: "#3F72AF"
    }
    
    return(
        <a href={props.to}><ArrowUpCircle color={textSecondary.color} size="32px"/></a>
    )
}