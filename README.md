# Single's Room

A simple anonymous-submission page for fellowship discussions.

## What this version does

- Works as a static site on GitHub Pages
- Does not ask members for names, email addresses, phone numbers, or church units
- Sends submissions to `scottieharvey731@gmail.com`
- Lets users choose a topic, describe their experience, ask a question, and choose whether the story may be discussed
- Uses FormSubmit as the form-to-email service

## Important first-time setup

The first submission will trigger a confirmation email from FormSubmit to:

`scottieharvey731@gmail.com`

Open that email and activate the form. Until the email address is confirmed, public submissions will not be delivered normally.

## Put it on GitHub Pages

1. Create a new GitHub repository, for example `singles-room`.
2. Upload `index.html`, `style.css`, and `script.js` to the root of the repository.
3. Commit the files.
4. Open the repository on GitHub.
5. Go to **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and `/ (root)`.
8. Save.
9. GitHub will show the public website address once deployment is complete.

## Test before sharing

1. Open the public site.
2. Submit a test story.
3. Check `scottieharvey731@gmail.com`.
4. Complete FormSubmit's activation step if this is the first submission.
5. Submit another test to confirm delivery.

## Privacy note

This page itself does not request identity fields. However, submissions pass through FormSubmit, a third-party form service, before reaching Gmail. Avoid describing the system as technically guaranteed or cryptographically anonymous. A better description is:

> "We do not ask for your name, email, phone number, or church unit."

Also ask members not to include identifying information in the story itself.

## Later improvements

If the project grows, the email backend can be replaced with Supabase, Firebase, or a custom FastAPI backend without redesigning the whole front end.

## Version 2

- Added a custom thank-you page after submission.
- Removed the private-only option.
- Submitting now requires consent that the story may be discussed anonymously during fellowship.
