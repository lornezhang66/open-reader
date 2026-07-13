# Open Reader - Obsidian Local TTS Plugin

Open Reader is an **Obsidian local TTS plugin** that reads selected text or active Markdown notes aloud with a local `ttsctl` text-to-speech CLI. It is built for offline note reading, Markdown narration, local-first speech synthesis, and shared macOS / Windows Obsidian vaults.

Keywords: Obsidian TTS plugin, local text-to-speech, Markdown reader, offline TTS, note narration, `ttsctl`, macOS TTS, Windows TTS.

The plugin is intentionally local-first: Obsidian extracts and cleans Markdown text, splits long notes into manageable chunks, calls `ttsctl say <text> --output <wav> --speed <number>`, then plays the generated wav files inside Obsidian. `ttsctl` starts a localhost daemon on demand so the speech model is reused between chunks and agent hooks.

## Features

- Obsidian desktop plugin for local text-to-speech and Markdown note narration.
- Read selected text first; if nothing is selected, read the active Markdown note.
- Use the local `ttsctl` CLI as the speech engine.
- Split long Markdown files into chunks before synthesis.
- Play chunks sequentially inside Obsidian.
- Show a floating playback controller while reading.
- Pause, resume, and stop playback.
- Test the configured local TTS CLI from the settings page or command palette.
- Keep or automatically delete generated wav files.
- Open the generated audio output folder.
- Strip YAML frontmatter.
- Optionally skip fenced code blocks.
- Clean common Markdown syntax before narration, including headings, links, embeds, wikilinks, blockquotes, list markers, emphasis, inline code, tables, and file references.
- Desktop-only by design, because local CLI execution requires the Obsidian desktop runtime.

## Local TTS CLI Contract

The configured CLI must support this command shape:

```text
ttsctl say <text> --output <wav-path> --speed <number>
```

Open Reader detects Local TTS in a fixed per-user application directory on each computer. Absolute paths are not stored in the synced vault, so the same vault can be shared between macOS and Windows. If Local TTS is missing, the settings page offers a confirmed one-click installation; the model download is about 1.5 GB.

## Installation

1. Download `main.js`, `manifest.json`, and `styles.css` from the latest release.
2. Create this folder in your vault:

```text
<vault>/.obsidian/plugins/open-reader
```

3. Put the downloaded files into that folder.
4. Restart Obsidian or reload community plugins.
5. Enable **Open Reader** in community plugin settings.
6. Open Open Reader settings and choose **Install** if the local speech engine is not already present.

## Commands

- `Read selected text or active note aloud`
- `Pause reading`
- `Resume reading`
- `Stop reading`
- `Test local TTS CLI`
- `Open TTS output folder`

## Playback Controller

When reading starts, Open Reader shows a floating controller in the lower-right corner of Obsidian.

The controller shows the current synthesis/playback state and chunk progress, and provides:

- `Pause`
- `Continue`
- `Stop`
- `Folder`

If Obsidian or Electron blocks automatic playback after local synthesis, click `Continue` in the controller.

## Settings

- `Local speech engine`: shows whether Local TTS is installed on this computer and provides one-click installation when needed.
- `Output folder`: vault-relative folder for generated wav files. Default: `.open-reader/audio`.
- `Speed`: speech speed passed to the local CLI. Recommended range: `0.5` to `2`.
- `Max chunk characters`: chunk size used before calling the CLI.
- `Strip frontmatter`: skip YAML frontmatter.
- `Skip non-text fenced code blocks`: read `text` / `txt` / `plain` fences, omit other code fences.
- `Keep generated audio files`: keep wav files after playback instead of deleting them.
- `Open folder after synthesis`: open the output folder after a read completes.

## Development

```bash
npm install
npm run build
```

The production build writes `main.js` in the repository root.

## Privacy

Text is sent only to the configured local CLI. The plugin does not call cloud TTS APIs, store API keys, or require network access for synthesis.
