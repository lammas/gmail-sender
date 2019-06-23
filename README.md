# gmail-sender
Simple tool to send templated emails via Gmail

## Installation

```sh
npm install
# ^ only for development

docker-compose up
```

## Usage

To use this you need an app password for your Gmail account.
To enable app passwords you first need to enable 2-Step verification for your Gmail accout: [My Account](https://myaccount.google.com/) -> [Sign-in & security](https://myaccount.google.com/security) -> 2-Step verification

Then you need to generate an application-specific password:
[My Account](https://myaccount.google.com/) -> [Sign-in & security](https://myaccount.google.com/security) -> [Signing in to Google](https://myaccount.google.com/security#signin) -> [App passwords](https://security.google.com/settings/security/apppasswords?utm_source=OGB&pli=1)

Select 'Other (Custom name)' in 'Select app'/'Select device' drop-downs, enter descriptive name for your application and device and press 'GENERATE'.
Copy provided password.
