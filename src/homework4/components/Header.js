import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title, onClick, showAdd}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
                <Button onClick={onClick} color={showAdd ? 'red' : 'green' } text={showAdd ? 'Close' : 'Add'}>
                    
                </Button>
        </header>
    )
}

export default Header