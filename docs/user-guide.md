# User Guide

## Capture Sessions

A Capture Session is an editable local project. Its capture lifecycle is shown
separately from document status:

- **Recording**, **Paused**, or **Completed** describes capture activity.
- **Draft**, **In Review**, **Snapshot Saved**, or **Archived** describes the
  Capture Session's project/history state. **Snapshot Saved** means a read-only
  Capture Snapshot exists; it does not mean the linked Procedure was published.

Saving does not publish or permanently complete a session. You can resume
capture, edit without recording, or duplicate work as a new draft.

## Capture content

Lyreline supports user-initiated visible-window capture for selected Mac
applications and full-page capture for supported Safari workflows. The source
picker can filter **All**, **Windows**, or **Applications**, search by
application/window title, and distinguish APP from WINDOW selections. You can also
import an image or add written steps. If a requested capture fails, Lyreline
does not silently create a lower-quality fallback moment.

The capture workspace shows an **Active Capture Target** card so you can verify
the selected application or exact window. After a capture, **Last Captured
Moment** confirms the newest moment with its source context.

For a full-page Safari capture, Lyreline measures the page, captures bounded
ordered segments, stitches one upright image, and restores the original scroll
position. Do not interact with the page while this operation is running.

## Presentation editing

Capture Presentation keeps the original image immutable. Available
non-destructive edits include:

- outer-boundary crop;
- redactions, highlights, rectangles, and numbered callouts;
- multiple retained regions with labels, section numbers, ordering, and export
  inclusion;
- condensed or original-position region layouts;
- undo and redo.

Use **Fit Width** for tall captures. **Actual Size** is the stable 100% baseline;
200% and 400% are absolute multiples of that baseline. Overlay coordinates stay
aligned to the original image at every zoom level.

### Numbered callouts and instruction links

A numbered callout combines a marker with an optional label, leader line, and
visual target. Link a selected callout to the Procedure instruction it explains
when one image contains several annotated actions or areas. The link remains
stable even if the visible callout number changes.

Callouts remain non-destructive presentation edits and do not alter the original
captured image. See [Numbered Callouts](numbered-callouts.md) for details.

## Procedures and review

Included moments can become ordered Procedure steps. Organize steps into
Sections, add instructions and expected results, and use the visible
**Drag to Reorder** handle (or Move Up / Move Down) to adjust order.

Use **Review Presentation** to verify crop, annotations, redactions, selected
regions, and other presentation choices before export. **In Review** means the
authored Procedure is ready for verification and finalization; it does not
start a collaborative-review workflow.

A fictional Northstar work-order example may be used to learn the workflow. It
contains demonstration-only names and data and is not a customer environment.

## Continue in Lyreline Studio

Lyreline Studio is an optional advanced composition workspace for authored
procedure content and presentation data. A supported Lyreline → Studio →
Lyreline round trip preserves images, presentation edits, numbered callouts,
optional labels, and instruction links. Studio-authored sections return to
Lyreline as Procedure steps without fabricating Capture Moments or changing
historical capture provenance.

Detailed handoff and publication instructions are provided in the separate
[Lyreline Studio documentation](https://94972cptbv-tech.github.io/LyrelineStudio-Documentation/using-with-lyreline/).

## Export and publication

Lyreline can export the current presentation as a combined PNG or, when retained
regions exist, as ordered separate PNG files. Procedure publication creates a
PDF from the saved document and presentation state. Export destinations are
chosen by the user.

The Procedure toolbar places **Export PDF…** and **Export Markdown…** together.
PDF is review-ready finished output; Markdown is an editable/interchange copy.

For Markdown, Lyreline shows an Export Plan first, then creates a `.md` file and, when needed, a sibling assets
folder containing the current rendered Step visuals. Supported Procedure
metadata is stored in Lyreline-owned YAML front matter so it can be restored on
a later Markdown import.

Markdown export does not modify the original imported Markdown and does not
silently replace existing output. See
[Markdown Import and Round Trip](markdown-round-trip.md) for the complete
workflow.

A **Capture Snapshot** is separate from Procedure publication. It preserves a
read-only historical checkpoint of a Capture Session while the linked Procedure
can continue to be edited and published independently.

## Multilingual authored text

Lyreline supports Unicode authored text in Procedure titles, instructions,
details, and metadata. Multilingual content is preserved through save/reopen,
Markdown export/import, the supported Lyreline Studio handoff, and PDF output.
Validated examples include Latin text with diacritics, Japanese, Chinese, and
Arabic.

## Archive and recovery

PDF and PNG files are publication outputs, not complete editable backups. Use a
Lyreline archive when you need restorable working data. See
[Data Safety](data-safety.md) before deleting or transferring important work.
