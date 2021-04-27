import ActionLink from './1Action'
import Toggle from './2Toggle'
import ConditionRender from './3ConditionRender'
import Mailbox from './4Mailbox'
import LoginControll from './5LoginControll'
import Page from './6Warning'
import Componentse from './7Components'
import BasicList from './8BasicList'
import WithKey from './9Key'
import KeyCorrect from './10KeyCorrect'
import Form from './11ControlledForm'

// let App = <ActionLink />
// let App = <Toggle />
// let App = <ConditionRender isLoggedIn={true} />

//4条件渲染
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// let App = <Mailbox unreadMessages={messages} />

//5综合click，条件渲染
// let App = <LoginControll />

//阻止渲染
// let App = <Page />

//7多个元素渲染
// let App = <Componentse />

const numbers = [1, 2, 3, 4]
//8基础列表
// let App = <BasicList numbers={numbers} />

//9key的使用错误
//let App = <WithKey numbers={numbers} />

//10 key正确使用
// let App = <KeyCorrect numbers={numbers} />

//11受控组件
let App = <Form />
export default App
