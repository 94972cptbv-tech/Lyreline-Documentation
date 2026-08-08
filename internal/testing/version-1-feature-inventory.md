# Lyreline Version 1.0 Feature Inventory

Internal source-of-truth inventory prepared from submitted application commit
`f6f97b4` and the public documentation at commit `163173b`.

| Feature | Ships in 1.0 | Where the user finds it | Current help | Test value | Notes |
|---|---|---|---|---|---|
| Welcome and Library | Yes | Initial window and Library sidebar | Quick Start, User Guide | Core | Provides Procedures and Capture Sessions entry points. |
| New Capture Session | Yes | Welcome, Capture Sessions, toolbar | Quick Start | Core | Title, optional notes/context, and system source picker. |
| Apple application/window picker | Yes | Capture Session setup | Quick Start, Support | Core | Exact current source must be selected; stale identifiers are not reused. |
| Screen Recording guidance | Yes | Capture Session setup | Support, Privacy | Core | Can open System Settings; restart may be required by macOS. |
| On-demand screenshot capture | Yes | Recording workspace → Screenshot | Quick Start, User Guide | Core | User initiated; not continuous recording. |
| Written capture moments | Yes | Recording workspace moment types | User Guide | Core | Step, Note, Warning, Decision, and Result types. |
| Pause and Resume | Yes | Recording workspace | Quick Start | Core | Capture state is distinct from Draft/Published project state. |
| Save and Continue Later | Yes | Recording workspace | Quick Start | Core | Persists a Paused session. |
| Continue existing session | Yes | Capture Session review | Quick Start | Core | Reselect source and capture a named next moment, or open without recording. |
| Capture insertion point | Yes | Recording workspace | User Guide foundation only | Advanced | New captures can be inserted before/after existing steps. |
| Add Written Step | Yes | Capture Session review | User Guide | Core | Adds instruction without screenshot. |
| Import Image | Yes | Capture Session review | User Guide | Core/optional | Uses a user-selected local image. |
| Moment title, note, order, inclusion | Yes | Capture Session review | User Guide | Core | Include in Procedure controls conversion. |
| Captured Moments workspace | Yes | Capture Session review | Limited public help | Advanced | Collapsible and detachable synchronized workspace. |
| Create/add/update linked Procedure | Yes | Capture Session Procedure action group | User Guide | Core | Existing Procedures can also receive included moments. |
| Procedure sections and steps | Yes | Procedure editor | User Guide | Core | Section/step reorder and editing ship. |
| Instructions and expected results | Yes | Procedure step editor | User Guide | Core | Includes Standard, Note, Tip, Warning, and Decision types. |
| Document context metadata | Yes | Capture setup and Procedure | Limited public help | Advanced | System, workflow, tool, author, owner, organization. |
| Capture Presentation editor | Yes | Open a captured image | Quick Start, User Guide | Core | Non-destructive, original remains immutable. |
| Crop | Yes | Capture Presentation toolbar | User Guide | Core | Single outer-boundary crop. |
| Redaction | Yes | Capture Presentation toolbar/inspector | User Guide | Core | Multiple styles and labels. |
| Highlight and callout | Yes | Capture Presentation toolbar/inspector | User Guide | Core | Rectangle/callout styles and annotations. |
| Numbered Callout | Yes | Capture Presentation toolbar | User Guide | Core | Number and optional label are editable. |
| Overlay move, resize, duplicate, delete, order | Yes | Canvas and inspector | User Guide | Advanced | Existing edits remain editable. |
| Undo and Redo | Yes | Capture Presentation toolbar/shortcuts | User Guide | Core | Covers presentation edits. |
| Selected Regions | Yes | Capture Presentation → Select Regions | User Guide | Advanced | Multiple regions, labels, order, inclusion, gaps, and two layouts. |
| Create Steps from Regions | Yes | Selected Regions inspector | Limited public help | Advanced | Creates ordered documentation steps. |
| Document Preview | Yes | Capture Presentation and Procedure | Quick Start, User Guide | Core | Removes editing affordances. |
| Fit, Fit Width, Actual Size, 200%, 400% | Yes | Capture Presentation zoom controls | User Guide | Advanced | Absolute zoom semantics. |
| Detached original/editor windows | Yes | Capture Presentation Workspace | Limited public help | Advanced | Shared edit state; original is immutable. |
| Publication Review queue | Yes | Capture Session → Review for Publication | User Guide | Core | Approve for Export or Needs Changes per presentation. |
| Combined PNG export | Yes | Capture Presentation Export | User Guide | Core/optional | Does not require selected regions. |
| Separate region PNG export | Yes | Capture Presentation Export | User Guide | Advanced | Requires included selected regions. |
| Procedure PDF export | Yes | Procedure toolbar/export sheet | User Guide | Core | Standard/High, portrait/landscape, optional cover/TOC/page elements. |
| Capture Session snapshots/history | Yes | Review & History | User Guide | Advanced | Read-only local Capture Session versions. |
| Procedure publication state/version data | Yes | Procedure editor/publication | User Guide | Advanced | Local publication/version model; no cloud approval system. |
| Lyreline archive export/import | Yes | Archive menu and Data Safety | Data Safety | Advanced | Validated `.lyrelinearchive` package with safe conflict choices. |
| Recently Deleted and Restore | Yes | Library/Data Safety | Data Safety | Advanced | No automatic age-based purge in Version 1. |
| Permanent deletion safeguards | Yes | Recently Deleted | Data Safety | Advanced | Archive-first path and exact typed confirmation. |
| Manual Safari capture | Yes | Capture Session using Safari source | Safari Extension, User Guide | Core/optional | Same on-demand model as other Mac applications. |
| Safari local workflow observation | Yes, limited | Recording workspace toggle | Safari Extension | Optional Safari | Only supported, permitted localhost/127.0.0.1 workflows; off by default. |
| Full-page Safari capture | Yes, limited | Recording workspace on supported page | Safari Extension, Support | Advanced Safari | Bounded capture; no fallback moment on failure; restores scroll. |
| Help and public documentation links | Yes | Help menu and workflow help | Public site | Core | Manual, troubleshooting, data safety, and Privacy Policy commands. |
| Broad arbitrary-site observation | No | Not present | Safari page states limitation | Do not test | Manual capture remains available. |
| Production eBuilder observation | No | Not configured | Safari page states limitation | Do not test | Local supported workflows only in Version 1. |
| AI-generated instructions | No | Not present | None | Do not test | Future concept only. |
| Cloud collaboration/shared library | No | Not present | None | Do not test | Local app data only. |
| Organization-managed website profiles | No | Not present | None | Do not test | Future concept only. |
