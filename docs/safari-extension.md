# Safari Extension

Lyreline's Safari extension supports privacy-safe workflow observation on sites
explicitly supported by the installed version of Lyreline. Version 1 access is
limited to user-approved local workflow pages. Manual Capture Sessions remain
available for other websites and Mac applications.

## Enable the extension

1. Open Safari Settings and select **Extensions**.
2. Enable **Lyreline Safari Extension**.
3. Open the supported local workflow page.
4. Grant the extension website access for that page.
5. In Lyreline, create or resume a Capture Session and select the exact Safari
   window.
6. Start Recording.
7. Enable **Observe supported Safari workflows**.

Lyreline reports extension embedding, Safari enablement, native-bridge
connection, and website access as separate conditions. If observation is not
available, check each condition rather than repeatedly toggling the extension.

## Observation boundaries

Safari observation is off by default. It requires all of the following:

- an active Capture Session in the Recording state;
- explicit enablement in Lyreline;
- website permission in Safari;
- a supported page.

Observation messages omit typed values, credentials, authentication tokens,
selected filenames, API results, and page-result content. Pausing or completing
the session stops observation.

## Full-page capture

For a supported page, **Capture Full Web Page** captures bounded viewport
segments and restores the original scroll position. Leave the selected page and
window unchanged until capture finishes. A failed request saves no partial or
fallback moment.

See [Support](support.md) if the extension, page acknowledgement, or full-page
capture does not complete.
