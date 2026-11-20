# Quick Start

## Create a Capture Session

1. Open Lyreline and choose **New Capture Session**.
2. Give the session a descriptive title.
3. Choose the application or window you intend to document. Use the source
   filters (**All**, **Windows**, or **Applications**) and search when the list
   is long. APP and WINDOW labels make the selection scope explicit.
4. Choose **Start Session** and confirm the workspace shows **Recording**.
5. Verify the **Active Capture Target** card shows the application or exact
   window you intended to select.
6. Create a named capture, import an image, or add a written step.
7. After a capture, use **Last Captured Moment** to confirm what Lyreline just
   added without leaving the capture workspace.

Capture is user initiated. Lyreline captures only after you request it and does
not record continuously.

## Curate the captured moment

Open Capture Presentation to crop the outer boundary, redact sensitive areas,
highlight controls, add callouts, or retain multiple selected regions. These
edits are non-destructive: the original capture remains available.

Use **Document Preview** to review the finished presentation without editor
outlines. Save the presentation before publication or export.

## Save and resume

Choose **Save and Continue Later** to pause capture while preserving moments,
instructions, presentation edits, ordering, and publication state. Reopen the
session and choose **Continue Capture Session** to select a current source and
continue, or edit the linked Procedure without recording.

For more detail, continue to the [User Guide](user-guide.md).

For a complete beginner example from first capture through PDF and archive, use
[Your First Lyreline Procedure](your-first-procedure.md).

## Start from existing Markdown

If you already have a Markdown document or MkDocs-style source, you can import
it instead of starting from a new Capture Session. Lyreline shows how headings,
content, and images will map into a native Procedure before anything is
created.

After editing or enriching the Procedure, use **Export Markdown…** from the
Procedure toolbar to create a new `.md` file and sibling visual-assets folder.
Markdown appears beside **Export PDF…**, but remains an editable/interchange
format rather than finished publication output. Supported Lyreline metadata
travels in YAML front matter and can be restored when the exported Markdown is
imported again.

See [Markdown Import and Round Trip](markdown-round-trip.md) for the complete
workflow.

## Continue in Lyreline Studio

Lyreline Studio is optional for normal Lyreline use. When you want narration,
timing, video, or other advanced publication work, choose **Narrate & Publish in
Lyreline Studio…** from the Procedure toolbar. Authored sections reopen as Procedure steps, with supported images,
presentation edits, numbered callouts, labels, instruction links, and
multilingual Unicode text preserved.

Detailed handoff and publication instructions are provided in the separate
[Lyreline Studio documentation](https://94972cptbv-tech.github.io/LyrelineStudio-Documentation/using-with-lyreline/).
