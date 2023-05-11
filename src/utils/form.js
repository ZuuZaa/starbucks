export const formInputsData = [
    {
        id: "username",
        type: "text",
        label: "Username or email address",
        error: "Enter an email/username."
    },
    {
        id: "password",
        type: "password",
        label: "Password",
        error: "Enter a password",
        conditions: [
            "Not satisfied:From 8 to 25 characters",
            "At least one number",
            "At least one capital letter",
            "At least one lowercase letter",
            "At least one special character such as exclamation point or comma"
        ],
       hint: "Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk."
    },
    {
        id: "first-name",
        type: "text",
        label: "First name",
        error: "Enter your first name"
    },
    {
        id: "last-name",
        type: "text",
        label: "Last name",
        error: "Enter your last name"
    },
    {
        id: "email",
        type: "email",
        label: "Email address",
        error: "Please enter your email address.",
        hint: "This will be your username"
    },
    {
        id: "card-number",
        type: "number",
        label: "Card Number (16 digits)",
        error: "A valid Starbucks card number has 16 digits.",
        hint: "No spaces or dashes"
    },
    {
        id: "security-code",
        type: "number",
        label: "Security Code",
        error: "A valid security code has 8 digits.",
        hint: "Scratch to reveal 8-digit code"
    }
]