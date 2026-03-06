# Email / Contact Forms

All client contact forms are handled by a centralized service at **forms.caltechweb.com** (repo: `caltechweb-forms`). Individual client sites do not need their own email API keys or Resend accounts.

## How it works

1. Client site POSTs to `https://forms.caltechweb.com/api/submit`
2. The service looks up the domain in `src/config/sites.ts` to determine the recipient
3. Resend sends the email from `forms@mail.caltechweb.com` with a styled HTML template

## Client-side integration

POST JSON to `/api/submit`:

```json
{
  "site": "customcablingsolutions.com",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello",
  "source": "contact-page"
}
```

Valid `source` values: `contact-page`, `free-quote`, `rfp-rfq`, `support`, `registration`, `service-request`
