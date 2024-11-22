interface EmailTemplateProps {
    name: string;
    email: string;
    message: string
}
  
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name, email, message
    }) => (
    <div className="bg-base-300">
        <h1>Hello Cooper! {name} has reached out to you.</h1>
        <p>{name} says, {message}</p>
        <p>Respond back at <span className="underline underline-offset-8">{email}</span>.</p> 
    </div>
);