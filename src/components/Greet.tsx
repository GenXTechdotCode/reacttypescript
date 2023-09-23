type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return (
        <div>
            {props.isLoggedIn 
                ? `Welcome ${props.name}! you have ${props.messageCount} unread messages` 
                : 'Welcome Guest'
            }
            
        </div>
    )
}