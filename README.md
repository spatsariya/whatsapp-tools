# WhatsApp Tools — public website & downloads

This repository contains the public product landing page and future Premium downloads. The desktop application's development repository remains private.

The generated Source code archives on this public repository contain this website, not the desktop app's development source. Desktop release packages contain the runtime files needed to run the app; an Electron application's bundled JavaScript can be inspected.

## Website

Static HTML, CSS, JavaScript, and example-account screenshots. GitHub Pages publishes the repository root from main.

## Downloads

The signed and notarized Mac Apple Silicon Premium direct download is publicly available in release v1.0.1-direct-arm64. INR 500 India activation is required inside the app. Windows x64 is also publicly available in release v1.0.1-windows-unsigned, explicitly unsigned and subject to SmartScreen/Unknown publisher warnings. Intel Mac and Linux Premium packages are not available. Free preview releases v0.4.0 and v0.5.0 are retained as private drafts. Previously downloaded copies cannot be remotely locked.

macOS 1.0.0 build 2 has been submitted to Apple for review at US$9.99. Direct-download Premium for India is ₹500, with activation separate from Store purchases. Production licensing and live payment/refund webhooks are configured securely. The Apple Silicon direct-download candidate passed signing and notarization. The owner deferred the real-payment test; successful paid activation, refund/retry and desktop restart/offline validation remain pending; the owner authorized publishing with those checks outstanding. Do not publish test-license builds or expose signing secrets.

WhatsApp Tools is an independent client and is not affiliated with WhatsApp or Meta. Broadcast Studio prepares messages for manual review and send; it does not send automatically or verify delivery.

## Updating a release

1. Add the new Windows package and SHA256SUMS.txt to a release in this public repository. Do not attach the private app source ZIP.
2. Update download URLs, version, file size, and release-note links in index.html.
3. Update screenshots only with example accounts and fictitious contact data.
4. Push main and verify GitHub Pages and anonymous release downloads.
