# Data Safety

PDF and PNG files are publication outputs. They are useful for reading and
sharing, but they do not contain the complete editable Lyreline working data.

A `.lyrelinearchive` package is a restorable working-data backup. Depending on
the selected archive scope, it can contain Capture Sessions, moments, original
image assets, presentation edits, linked Procedures, publication history,
document context, Recently Deleted state, and protected document-number
issuance records.

## Create an archive

Use Lyreline's archive commands to export a Capture Session, selected sessions,
or all Lyreline work. Lyreline validates source records and assets, creates and
checks the package, and then places it at the destination you selected.

Missing optional assets are reported before writing. Cancelling leaves no
partial final archive. When a session links to a Procedure, including that
document produces the more complete backup.

## Restore an archive

Choose **Import Lyreline Archive…**. Lyreline validates the package before
showing the restore preview or changing local data. The preview reports record
counts, Recently Deleted contents, warnings, and conflicts.

Restore choices include restoring missing items, importing copies with new
stable identifiers, and merging compatible missing work without silently
replacing newer local author work. The safe conflict default keeps the local
record and imports a copy.

## Recently Deleted

Normal Delete moves Capture Sessions and Procedures to Recently Deleted. Their
hierarchy, metadata, document numbers, presentation edits, and referenced assets
remain recoverable. Version 1 does not perform age-based or background purge.

Use **Restore** to return an item. If a linked counterpart is unavailable,
Lyreline restores the surviving item and reports that the linked document is
unavailable.

## Permanent deletion

Permanent deletion is available only in Recently Deleted. Lyreline first shows
an impact summary and offers **Archive and Permanently Delete**. The typed
confirmation stage appears only after an archive has completed and validated,
or after the user explicitly chooses deletion without an archive.

High-impact deletion requires typing `PERMANENTLY DELETE` exactly. Assets are
removed only after model deletion has been saved and verified. Document-number
issuance history is not made reusable by deletion, restoration, or purge.
