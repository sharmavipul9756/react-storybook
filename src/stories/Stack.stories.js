import { template } from "lodash"
import Stack from "../components/Stack"

export default {
    title: "components/Stack",
    component: Stack,
    argTypes : {
        numberOfChildren: {type: "number", defaultValue: 4}
    }
}

const Template = ({numberOfChildren,...args}) => (<Stack {...args}>{[...Array(numberOfChildren).keys()].map(number => {
    return (
        <div style={{width: "50px",height: "50px",backgroundColor: "red",display: "flex", justifyContent: "center",alignItems: "center"}}>{number+1}</div>
    )
})}</Stack>)

export const Horizontal = Template.bind({})

Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false
}