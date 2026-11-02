# WhatsApp Tools — public website & downloads

This repository contains the public product landing page and downloadable Windows releases. The desktop application's development repository remains private.

The generated Source code archives on this public repository contain this website, not the desktop app's development source. Desktop release packages contain the runtime files needed to run the app; an Electron application's bundled JavaScript can be inspected.

## Website

Static HTML, CSS, JavaScript, and example-account screenshots. GitHub Pages publishes the repository root from main.

## Downloads

Use the Releases section for Windows ZIP packages and checksums. No app source ZIPs, account profiles, contacts, cookies, or campaign data are published here.

To run: quit any older version, extract the entire Windows ZIP, and open Session.exe. Keep the accompanying files together. This is an unsigned Windows preview. macOS and Linux packages are not available yet.

WhatsApp Tools is an independent client and is not affiliated with WhatsApp or Meta. Broadcast Studio prepares messages for manual review and send; it does not send automatically or verify delivery.

## Updating a release

1. Add the new Windows package and SHA256SUMS.txt to a release in this public repository. Do not attach the private app source ZIP.
2. Update download URLs, version, file size, and release-note links in index.html.
3. Update screenshots only with example accounts and fictitious contact data.
4. Push main and verify GitHub Pages and anonymous release downloads.
