# Advanced Testing — Optional

[Tester Program](index.md) · [Standard Test](tester-guide.md) · [Your Own Workflow](real-work-test.md) · **Advanced** · [Safari](safari-testing.md) · [Feedback](feedback.md)

This page is optional. Choose only the areas relevant to your work. Use
test-only content, especially for archive, restore, and deletion tests.

## Larger and resumed projects

- Reopen an older paused Capture Session and continue it with a newly selected
  source.
- Insert a new named moment between existing moments and confirm numbering and
  order remain sensible.
- Use **Edit Without Recording** when no new screenshot is needed.
- Duplicate a Capture Session as a new Draft and confirm the original remains
  unchanged.
- Build a larger Procedure with several sections and reorder sections and steps.

Expected: saved work remains available, capture state and document status stay
separate, and revising one draft does not silently alter another.

## Presentation editing

- Reopen an existing crop, redaction, highlight, or numbered callout and move or
  resize it.
- Duplicate an overlay and change its order relative to other overlays.
- Add several callouts and verify numbering and labels remain readable.
- Hide or detach the Original Reference and open the editable workspace in a
  separate window.
- Compare **Fit**, **Fit Width**, **Actual Size**, 200%, and 400% on a tall image.
- Confirm the immutable Original never shows the edited rendering.

Expected: edits remain aligned, editable, non-destructive, and consistent in
Document Preview and exported output.

## Selected Regions

- Use **Select Regions** to retain three distant areas of a tall image.
- Move, resize, label, include/exclude, duplicate, delete, and reorder regions.
- Compare **Condense Selected Regions** with **Preserve Page Positions**.
- Change the gap and preview the result.
- Export one combined PNG and ordered separate-region PNG files.
- Try **Create Steps from Regions** on test content.

Expected: the original remains unchanged; annotations intersecting retained
regions remain aligned and clipped; excluded regions do not export.

## Publication and history

- Mark one presentation **Needs Changes**, confirm it remains unresolved, then
  correct and approve it.
- Complete a larger Publication Review queue and watch its position and count.
- Export both Standard and High image-quality PDFs and compare readability and
  file size.
- Preserve a Capture Session snapshot and inspect **View Published Versions**.
- Begin another editable draft and confirm a prior snapshot remains read-only.

## Archives and restore

- Export one test Capture Session as a `.lyrelinearchive`.
- Export selected test sessions or all test work if appropriate.
- Import the archive and review the preview before accepting changes.
- Exercise Restore Missing Items or Restore as Copies with disposable data.
- If a safe conflict can be created, confirm the default preserves local work
  and imports a copy rather than silently overwriting it.

Expected: archive validation occurs before local data changes, cancellation
leaves no partial result, and restored copies receive safe identities.

## Recently Deleted and permanent deletion

> **Warning:** Use newly created test-only content. Never perform
> permanent-deletion tests on important procedures, captures, or the canonical
> sample.

- Move a disposable Capture Session or Procedure to Recently Deleted.
- Restore it and confirm its content returns.
- Move it to Recently Deleted again and inspect the permanent-deletion impact
  summary.
- Verify typed confirmation is not shown until archive validation succeeds or
  you explicitly choose deletion without an archive.
- Verify `PERMANENTLY DELETE` must be entered exactly.
- Cancel before the final destructive action unless deletion itself is the
  intended test.

Expected: ordinary deletion is recoverable, archive-first safeguards remain
visible, and cancellation preserves the record and assets.

## Full-page Safari capture

Full-page capture is available only for a supported, permitted Safari page. If
the command is available in your test environment, follow the optional
[Safari test](safari-testing.md). Do not expect it on an arbitrary website.
