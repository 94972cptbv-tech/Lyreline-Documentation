# Safari Testing — Optional

Version 1 contains two different Safari experiences. Keep them separate when
reporting feedback.

## A. Manual Safari capture

Manual capture works like capture from another Mac application. It does not
require **Observe supported Safari workflows** and does not depend on automatic
action observation.

1. Open a harmless website in Safari.
2. Create or continue a Capture Session.
3. Use Apple's system picker to select the exact Safari window.
4. Start the session and use **Screenshot** to capture requested moments.
5. Pause, resume, save, and continue the session.
6. Organize the moments and return to the linked Procedure.
7. If **Capture Full Web Page** is available for a supported, permitted page,
   you may test it. Leave the page and Safari window unchanged until capture
   completes. Skip it when the command is unavailable.

Expected: manual screenshots occur only when requested. Manual Safari capture
does not require observation to be enabled.

## B. Safari workflow observation — Version 1 limitation

Version 1 automatic observation is **not** general-purpose observation of
arbitrary websites. It is off by default and is limited to explicitly supported,
user-approved local workflow pages such as `localhost` and `127.0.0.1`. It was
developed around a local JV Recovery test workflow and is not configured for
production eBuilder sites.

Skip this section unless the test coordinator has provided a suitable local
workflow environment. Do not improvise with a production or confidential site.

### Preconditions

Observation requires all of the following:

- the Lyreline Safari extension enabled in Safari;
- website access granted for the supported local page;
- an active Capture Session targeting the exact Safari window;
- capture state **Recording**;
- **Observe supported Safari workflows** explicitly enabled.

### Observation test

1. Enable **Lyreline Safari Extension** in Safari Settings.
2. Open the provided supported local page and grant website access.
3. Create a Capture Session and select the exact Safari window.
4. Start the session and enable **Observe supported Safari workflows**.
5. Activate one supported, clearly labeled button or link.
6. Confirm Lyreline reports a privacy-safe action and, where configured, creates
   one automatic moment rather than duplicates.
7. Change a checkbox, radio control, or select control if the local workflow
   provides one.
8. Type harmless text in a text field. Confirm the typed content is not shown in
   Lyreline's observed action.
9. Open a file-selection control using a fictional file if provided. Confirm the
   filename, path, and contents are not reported.
10. Pause the Capture Session and activate another supported control. Observation
    should stop.
11. Resume Recording and confirm a supported action can be observed again.
12. Visit an unrelated site. It should not be observed.
13. Complete or pause the Capture Session and confirm observation stops.

Privacy-safe observation may identify button or link activation, checkbox or
radio changes, select changes, a generic file-selection action, form submission,
or another explicitly labeled supported control.

It intentionally excludes passwords, typed text, textarea contents, filenames,
file paths, uploaded contents, authentication tokens, cookies, API bodies,
clipboard contents, and arbitrary page content.

When reporting a Safari issue, state whether it involved **manual capture** or
**supported local workflow observation**.
