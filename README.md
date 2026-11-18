# WhatsApp Tools

Public landing page and official direct-download release assets for WhatsApp Tools Desktop.

**Website:** https://spatsariya.github.io/whatsapp-tools/  
**Downloads and release notes:** https://github.com/spatsariya/whatsapp-tools/releases/latest

## Public downloads

The last verified public release at the time of this update is **v1.0.13**. Installers are available for:

- Windows x64: unsigned `.exe` installer (Windows may show SmartScreen).
- macOS Apple Silicon: signed/notarized direct-download `.dmg`.
- Linux x64: `.AppImage` and `.deb` packages.

Download binaries only from a published release. Each release includes SHA-256 checksums. The Mac App Store release is separate and remains pending.

## New desktop release

The desktop application's private repository has a right-click editing fix for message and search inputs, included in the **v1.0.14** build process. The release is available to download **only after its installers have been built, checked and published**. Until then, v1.0.13 remains the latest public download.

The website checks the public GitHub Releases API on load. It updates its displayed version, release notes and operating-system download links only when all four expected public packages have been uploaded. If GitHub is unavailable, the static v1.0.13 links remain in place.

## Publishing

GitHub Pages publishes the root of `main`, with HTTPS.

The desktop development repository (`spatsariya/whatsapp-tools-desktop`) is private. Its build workflow runs tests and packages Windows, Linux and Apple Silicon versions, including production licensing configuration and Mac notarization checks. A release mirror requires a suitable `PUBLIC_RELEASE_TOKEN` secret with permission to create releases in this public repository. Only approved installers and checksums may be mirrored, **not** the private development source archive.

For further releases, verify that the public release is non-draft and contains all expected downloadable packages. Verify public anonymous download access before promoting release claims.

## Product

WhatsApp Tools is an independent desktop client for multiple WhatsApp Web account workspaces. Broadcast Studio prepares messages for manual review and sending. It does not send messages automatically. The product is not affiliated with WhatsApp or Meta.

Direct-download Premium activation in India is ₹500 after the 30-day trial. The Windows app is unsigned; macOS direct builds require signing and notarization. Licensing and purchase support: https://spatsariya.github.io/whatsapp-tools/support.html

## SEO

The repository includes SEO metadata, structured data, a sitemap, and guides. Keep static fallback version metadata accurate; the landing page also updates structured release version data at runtime when verified assets are available.
