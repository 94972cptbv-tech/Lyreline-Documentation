# Support

These resources cover the most common questions:

- [Quick Start](quick-start.md)
- [User Guide](user-guide.md)
- [Safari Extension](safari-extension.md)
- [Capturing Web Pages](capturing-web-pages.md)
- [Troubleshooting](troubleshooting.md)
- [Data Safety](data-safety.md)
- [Privacy Policy](privacy.md)

## Screen-capture permission

Lyreline uses Apple's system capture picker. If capture is unavailable, open
macOS System Settings and confirm Lyreline has the required Screen Recording
permission, then quit and reopen Lyreline if macOS requests it. Lyreline does
not change this permission for you.

## Source missing from the picker

Confirm the application or window is open and visible, then reopen the picker.
Some protected or system-managed surfaces cannot be captured. If a previously
selected source was closed or replaced, select the current window again.

## Safari extension not connecting

Confirm the extension is enabled, access is granted for the exact supported
page, the Capture Session is Recording, and **Observe supported Safari
workflows** is enabled. Reload the page after granting permission. Manual
capture remains available when automatic observation is not supported.

## Full-page capture failure

Keep the selected Safari tab and window unchanged while capture runs. Do not
click, type, scroll, resize, or change tabs. If capture fails, note the last
reported stage and whether Lyreline restored the original scroll position. A
failed full-page request creates no partial or visible-window fallback moment.

## Archive import problems

Select an unmodified `.lyrelinearchive` package. Lyreline validates its
structure, format version, assets, and checksums before changing local data. Use
the restore preview to resolve conflicts. A renamed folder that is not a valid
archive cannot be imported.

## Restoring from Recently Deleted

Open Recently Deleted and choose **Restore**. If a linked Procedure or Capture
Session is no longer available, Lyreline restores the surviving item and marks
the missing link rather than dereferencing unavailable data.

## Locating exports

PDF, PNG, and Lyreline archive exports are written to the location chosen in the
macOS save panel. Lyreline does not silently move them to a private cloud or a
different export folder. Use Finder's Recents or search for the document title
and file extension if the destination is forgotten.

## What to include in a support request

Include:

- Lyreline version and build number;
- macOS version;
- the action you were attempting;
- the exact error wording;
- whether the issue concerns capture, Safari, export, archive, restore, or
  deletion.

Do not send passwords, credentials, sensitive screenshots, or private Lyreline
archives unless a confirmed support representative specifically requests them
and provides an appropriate transfer method.

## Contact

Official Lyreline support contact:

**Lyreline Support**

[lyreline.support@icloud.com](mailto:lyreline.support@icloud.com)

This page serves as the App Store Support URL and self-service troubleshooting
reference.
