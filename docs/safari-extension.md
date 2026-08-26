# Safari Extension

Lyreline's Safari extension assists with supported browser-based workflows on
websites that you explicitly add and approve. It can recognize supported web
actions, help prepare an approved page for capture, and support full-page
capture when that capability is available.

The extension is optional. It does not automatically gain access to every
website, and adding a site does not start screen recording or continuous
capture. You remain in control of both website access and capture.

## Enable the extension

1. Open Safari Settings and select **Extensions**.
2. Enable **Lyreline Safari Extension**.
3. Return to Lyreline and open or resume the Capture Session you want to use.

Lyreline reports extension embedding, Safari enablement, native-bridge
connection, and website access as separate conditions. If observation is not
available, check each condition rather than repeatedly toggling the extension.

## Add a website

Website approval starts in Lyreline and is completed in Safari:

1. In the Capture Session, find **Safari Workflow Observation**.
2. Under **Approved Sites**, enter the website or URL you want to document.
3. Choose **Add Site**. Lyreline adds the exact site to its locally stored
   approved list.
4. Open that site in Safari, then open the Lyreline toolbar item. The popup is
   titled **Lyreline Site Access**.
5. If Safari access has not yet been granted for that site, choose
   **Grant Access** and approve Safari's permission request. Reload the page if
   the toolbar item asks you to do so.
6. Return to the workflow, select the exact Safari window in Lyreline, and
   begin or continue the Capture Session. Confirm that its state is
   **Recording**.
7. When you want supported action assistance, enable
   **Observe supported Safari workflows**.

Adding or approving a website does not create a Capture Moment. Lyreline may
propose a supported action while observation is enabled, but you still decide
whether to choose **Create Moment** or run another explicit capture command.

## Site approval and privacy

Lyreline approval and Safari permission are separate controls. A website
participates only when it is present under **Approved Sites** and Safari has
allowed the extension to access that site. Removing a site from Lyreline's
approved list stops Lyreline from observing it even if Safari still retains a
permission for the extension.

Lyreline stores approved entries locally as exact sites. It does not retain
paths, query information, fragments, or credentials as part of an approved-site
entry. Approval is not unrestricted browsing access, does not enable continuous
recording, and does not create content without an explicit capture decision.

Observation messages omit typed values, credentials, authentication tokens,
selected filenames, API results, and page-result content. The extension does
not remove Lyreline's macOS sandbox or Safari's permission controls. See
[Data Safety](data-safety.md) for how Lyreline protects working data and
original assets.

## Observation boundaries

Safari observation is off by default. It requires all of the following:

- an active Capture Session in the **Recording** state;
- **Observe supported Safari workflows** enabled in Lyreline;
- the exact site added under **Approved Sites**;
- website permission granted in Safari;
- a supported page and a live connection to that page.

Pausing or completing the session stops observation. Approving a site alone
does not start observation or screen capture.

## Safari-assisted and manual capture

The Safari extension enhances supported browser workflows; it is not required
for normal Lyreline use. Manual and window capture remain available for other
websites, Mac applications, and workflows that do not use the extension.

See [Quick Start](quick-start.md) for the standard Capture Session workflow and
[Capturing Web Pages](capturing-web-pages.md) for visible-window and full-page
capture guidance.

## Full-page capture

For an approved, supported page, **Capture Full Web Page** captures bounded
viewport segments and restores the original scroll position. Leave the
selected page and window unchanged until capture finishes. A failed request
saves no partial or fallback moment.

## Troubleshooting

If a site is listed in Lyreline but Safari access is not granted, open that site
and use **Lyreline Site Access** in Safari to choose **Grant Access**. If the
extension is disabled, use **Open Safari Extension Settings** in Lyreline and
confirm **Lyreline Safari Extension** is enabled in Safari.

For connection, page-readiness, permission, or full-page capture problems, see
[Troubleshooting](troubleshooting.md).
