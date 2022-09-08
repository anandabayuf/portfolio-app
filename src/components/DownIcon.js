import { ArrowDownCircle } from 'react-bootstrap-icons';

export default function DownIcon(props){
    const textSecondary = {
        color: "#3F72AF"
    }
    
    return(
        <a href={props.to}><ArrowDownCircle color={textSecondary.color} size="32px" className='mt-5'/></a>
    )
}