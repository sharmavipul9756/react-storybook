import Button from "../components/Button"

export default {
    title: "components/Button",
    component: Button,
    argTypes : {handleClick :  {action: "handleClick"}}
}

const Template = args => <Button {...args}/>

export const Red =  Template.bind({})

Red.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "md"
}

export const large =  Template.bind({})

large.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "lg"
}
export const longLabel =  Template.bind({})

longLabel.args = {
    backgroundColor: "red",
    label: "Press me////////////////////////////////////////////////////////////////////////////////////",
    size: "md"
}
export const Green =  Template.bind({})

Green.args = {
    backgroundColor: "green",
    label: "Press me",
    size: "md"
}