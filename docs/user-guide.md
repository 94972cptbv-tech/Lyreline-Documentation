# User Guide

## Capture Sessions

A Capture Session is an editable local project. Its capture lifecycle is shown
separately from document status:

- **Recording**, **Paused**, or **Completed** describes capture activity.
- **Draft**, **In Review**, **Published**, or **Archived** describes authored
  document status.

Saving does not publish or permanently complete a session. You can resume
capture, edit without recording, or duplicate work as a new draft.

## Capture content

Lyreline supports user-initiated visible-window capture for selected Mac
applications and full-page capture for supported Safari workflows. You can also
import an image or add written steps. If a requested capture fails, Lyreline
does not silently create a lower-quality fallback moment.

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
sections, add instructions and expected results, and review each presentation
before publication. Publication Review keeps unresolved moments visible until
they are approved or intentionally returned for changes.

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

A Procedure can also be exported as a new Markdown document. Lyreline shows an
Export Plan first, then creates a `.md` file and, when needed, a sibling assets
folder containing the current rendered Step visuals. Supported Procedure
metadata is stored in Lyreline-owned YAML front matter so it can be restored on
a later Markdown import.

Markdown export does not modify the original imported Markdown and does not
silently replace existing output. See
[Markdown Import and Round Trip](markdown-round-trip.md) for the complete
workflow.

Publishing records a local version snapshot. Editing a later draft does not
overwrite the prior published version.

## Archive and recovery

PDF and PNG files are publication outputs, not complete editable backups. Use a
Lyreline archive when you need restorable working data. See
[Data Safety](data-safety.md) before deleting or transferring important work.
