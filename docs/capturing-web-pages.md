# Capturing Web Pages

Visible-window capture remains the default. Use **Capture Full Web Page** only
when the command is available for a supported Safari page with website access
granted.

Full-page capture is separate from general manual Safari screenshots. Version 1
workflow observation is also a separate, optional feature limited to supported,
user-approved local pages; it is not automatic observation of arbitrary sites.

## What Lyreline does

Lyreline measures the document, plans bounded viewport segments, scrolls in
controlled increments, waits for layout stabilization, captures each segment,
and stitches one continuous upright image. It then restores the original page
position. Exceptionally tall pages that exceed safe image limits may be stored
as ordered linked tiles to keep text readable.

Document-level scrollbars are hidden while the page is prepared without
disabling scripted scrolling. Lyreline removes its temporary capture styling
and restores the page's normal scrollbar behavior after success, failure, or
cancellation.

## While capture is running

Do not click, type, scroll, resize the Safari window, change tabs, or otherwise
interact with the selected page. Lyreline displays the current stage, segment
progress, and a Cancel command.

Cancellation stops further work, discards incomplete output, and attempts to
restore the original scroll position. A failed full-page request creates no
fallback moment and leaves existing moments unchanged.

See [Troubleshooting](troubleshooting.md) for timeouts, repeated sticky content,
missing regions, or restoration problems. See [Safari Extension](safari-extension.md)
for precise Version 1 workflow-observation limits.
