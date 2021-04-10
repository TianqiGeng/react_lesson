import style from './Button.module.css'
import styled from 'styled-components'
import "./styles/App.scss"
function Button() {
    return (
        <div>
            <button className='button'>Button</button>
            <button className={style.button}>Button</button>
            <Title>Hello</Title>
            <StyledColumn witdh="10%">Hello Hello Hello Hello Hello Hello</StyledColumn>
            <StyledColumn witdh="20%">test test</StyledColumn>
            <PinkStyledColumn witdh="20%">test test</PinkStyledColumn>
        </div>
    )
}
//2定义style-component,类名动态生成
const Title = styled.h1`
    font-size:1.5em;
    text-align:center;
    color:pink;
`
//3动态
const StyledColumn = styled.h1`
    width:${props => props.witdh};
    background-color:red;
`
//4
const PinkStyledColumn = styled(StyledColumn)`
    background-color:pink;
`
//svg
import logo from '../../src/lesson4_3/assets/images/before.jpg'
console.log(logo)


export default Button