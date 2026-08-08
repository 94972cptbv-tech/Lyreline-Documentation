# Troubleshooting

## Safari did not finish the full-page capture command in time

Safari did not acknowledge the command, stopped reporting progress, or exceeded
Lyreline's bounded safety limit. The error identifies the last reported stage
and whether Lyreline confirmed scroll restoration.

1. Leave the supported local page open in the selected Safari window.
2. Confirm Safari reports **Lyreline Safari Extension** as enabled.
3. Confirm Lyreline reports **Native bridge: Connected** and **Website access:
   Granted**.
4. Confirm the Capture Session is **Recording** and the exact Safari window is
   still selected.
5. Retry without clicking, typing, scrolling, resizing, or changing tabs.
6. If it fails again, choose **Copy Diagnostics** and include that text in a
   support report. Diagnostics include identifiers, dimensions, stages, timing,
   and restoration state—not captured page content or entered values.
7. Use visible-window capture when a page changes continuously or cannot
   stabilize.

## Other Safari issues

- **Permission problem:** Grant access to the exact supported local site and
  reload it.
- **Wrong window:** Reselect the Safari window containing the supported page.
- **Repeated sticky content:** Retry without interacting with the page; report
  the affected region if repetition remains.
- **Missing or duplicated regions:** Record the page dimensions and segment
  progress shown by **Copy Diagnostics**.
- **Linked tiles:** Exceptionally tall pages may be split into ordered tiles to
  preserve readable text.
- **Position not restored:** Manually return to the prior position and include
  `Scroll restored: No` in the report.

Manual Safari screenshots remain available without workflow observation. See
[Safari Extension](safari-extension.md) for the Version 1 observation limits
and [Capturing Web Pages](capturing-web-pages.md) for full-page behavior.

## Capture permission or source problems

If capture is unavailable, confirm Lyreline has Screen Recording permission in
macOS Privacy & Security. Quit and reopen Lyreline if macOS requests it. If the
source is missing, make sure the application or window is open and visible,
then use Apple's picker to select the current window again.

## Archive or restore problems

Import only an unmodified `.lyrelinearchive` package. Lyreline validates its
format, assets, and checksums before changing local data. Review conflicts in
the import preview. For recovery and deletion safeguards, see
[Data Safety](data-safety.md).

For help with a problem that remains unresolved, see [Support](support.md).
