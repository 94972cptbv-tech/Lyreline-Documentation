# Markdown Import and Round Trip

Lyreline can bring existing Markdown documentation into its native Procedure
workspace, let you restructure and enrich that content, and export the current
Procedure as a new Markdown document.

The original imported Markdown is never modified. A Markdown export always
creates a new portable artifact.

## The round-trip workflow

A typical workflow is:

1. Import an existing Markdown file or Markdown documentation source.
2. Review how headings and images will map into Lyreline.
3. Create a native Lyreline Procedure.
4. Edit instructions, sections, steps, visuals, and presentation details.
5. Choose **Export as Markdown…** from the Procedure.
6. Review the Markdown Export Plan.
7. Choose an export folder.
8. Lyreline creates a new `.md` file and, when visuals are present, a sibling
   assets folder.
9. The exported Markdown can be edited externally, stored in source control,
   used with tools such as MkDocs, or imported into Lyreline again.

## Importing Markdown

Lyreline interprets Markdown structure before creating native Procedure
content.

The standard mapping is:

- `#` — Procedure title
- introductory text beneath the `#` — unnumbered Overview
- `##` — Section
- `###` — Step

Deeper headings and content that do not have a safe automatic destination
remain visible during review rather than being silently discarded.

Images are resolved from their Markdown references. When Lyreline can
determine that an image belongs to a Step, it can propose that image as a
native Step visual.

For Steps with more than one image, visual order follows the resolved Markdown
order.

## Review before import

Before creating Procedures, Lyreline shows a conversion plan.

Use this review to confirm:

- Procedure, Section, and Step counts;
- heading interpretation;
- visual destinations and order;
- missing references;
- content that requires review or preservation.

Import does not proceed through ambiguous content silently.

## Editing imported content

After import, the result is a native Lyreline Procedure.

You can:

- rename and reorder Sections;
- edit Step instructions and details;
- add or replace visuals;
- add captions;
- crop, redact, highlight, or annotate visuals;
- add numbered callouts;
- continue supported work in Lyreline Studio.

The imported Markdown is no longer the editable backing store for the
Procedure. Lyreline's native Procedure becomes the current authored version.


## Exporting as Markdown

Open the Procedure and choose **Export as Markdown…**.

Lyreline first shows an Export Plan that includes:

- proposed Markdown filename;
- proposed assets-folder name;
- Section count;
- Step count;
- visual count;
- Overview handling;
- any representation warnings.

Choose **Export Markdown…** and select a destination folder.

Lyreline creates a new Markdown document. It does not overwrite the originally
imported Markdown.

Existing output with the same planned names is not silently replaced.

## Exported visuals

When the Procedure contains visuals, Lyreline creates a sibling assets folder.

For example:

    Configure-the-Connection.md
    Configure-the-Connection-assets/
        section-01-step-01-visual-01.png
        section-01-step-01-visual-02.png

The Markdown file uses relative references to those assets:

    ![Server address field](Configure-the-Connection-assets/section-01-step-01-visual-01.png)

Lyreline exports the current authored presentation of each visual. Supported
crop, redaction, highlight, callout, and other presentation work is rendered
into the exported PNG.

Visual captions are used as Markdown image alt text when available.

## Lyreline metadata in YAML front matter

Supported Lyreline Procedure metadata is stored separately from visible
procedure content using YAML front matter.

An exported document may begin like this:

    ---
    lyreline:
      format: 1
      document_kind: "Procedure"
      status: "Draft"
      document_id: "SOP-001"
      version: "2.9"
      organization: "Example Organization"
      author: "Jane Doe"
      document_owner: "Documentation"
      purpose: "Configure the connection"
      scope: "Supported environments"
    ---

This keeps Lyreline metadata out of the visible Procedure hierarchy.

Supported metadata can include:

- document type and status;
- document identifier and version;
- effective date;
- organization;
- author and ownership information;
- purpose and scope;
- intended audience;
- prerequisites and responsibilities;
- overall expected result;
- troubleshooting information;
- references;
- revision summary;
- footer text.

When a supported Lyreline-owned front-matter block is imported again, Lyreline
restores those values to native Procedure metadata fields.

Lyreline does not silently interpret unrelated or mixed YAML front matter as
Lyreline metadata.

## Re-importing an exported document

A Markdown document exported by Lyreline can be imported again using the normal
Markdown import workflow.

When the Markdown file and its sibling assets folder remain together, Lyreline
can restore:

- Procedure title;
- supported native metadata;
- Sections;
- Steps;
- text;
- visual captions;
- multiple visuals and their order.

The conversion plan is shown again before the new Procedure is created.

## What Markdown export is not

Markdown export is a portable documentation artifact. It is not a complete
Lyreline backup.

Use a Lyreline archive when you need restorable application data, history, and
working state.

See [Data Safety](data-safety.md) for archive and recovery guidance.

## Markdown and MkDocs

The exported structure uses normal Markdown headings and relative image paths,
so the output is suitable for Markdown-based documentation workflows such as
MkDocs and source-control repositories.

External tools may use additional Markdown or YAML conventions that Lyreline
does not interpret. Review externally modified documents when importing them
back into Lyreline.
