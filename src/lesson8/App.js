import style from './Button.module.css'
import styled from 'styled-components'
import logo from '../../src/lesson4_3/assets/images/before.jpg'
import "./styles/App.scss"
function Button() {
    return (
        <div className="container">
            {/* eg1:使用模块化生成，编译后会变成序号filename_classname_hash，类名动态生成*/}
            <button className={style.button}>Button</button><br />
            {/* eg2:全局 */}
            <button className='button'>Button</button>
            <Title>Hello</Title>
            <Title>Eg:4</Title>
            <StyledColumn witdh="10%">Hello Hello Hello Hello Hello Hello</StyledColumn>
            <StyledColumn witdh="20%">test test</StyledColumn>
            <Title>Eg:5</Title>
            <PinkStyledColumn witdh="20%">test test</PinkStyledColumn>
        </div>
    )
}
//eg3:定义style-component,类名动态生成
//创建一个Title组件，附带样式h1标签
const Title = styled.h1`
    font-size:1.5em;
    text-align:center;
    color:pink;
`
//eg4:动态Styling
//StyledColumn组件，里面宽属性是通过传值来实现
const StyledColumn = styled.h1`
    width:${props => props.witdh};
    background-color:red;
`
//eg5:继承，使用（）把组件包裹进去
const PinkStyledColumn = styled(StyledColumn)`
    background-color:pink;
`
//eg6:jpg，输出是图片地址
console.log(logo)
//svg 直接引入 

export default Button