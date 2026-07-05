# Cloud TTS Reader

Cloud TTS Reader is an Obsidian desktop plugin that reads selected text or the active Markdown note aloud through a local TTS CLI.

The plugin is intentionally local-first: Obsidian extracts and cleans Markdown text, splits long notes into manageable chunks, calls `ttsctl say <text> --output <wav> --speed <number>`, then plays the generated wav files inside Obsidian.

## Features

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

Default settings store CLI paths by system name so the same Obsidian vault can be shared between macOS and Windows:

```text
lorne=/Users/lorne/work_space_ai/codex-defaute/local-tts-service/ttsctl.sh
zhangxiaolong=C:\Users\18660\work_space_ai\07codex_default\local-tts-service\ttsctl.ps1
```

That `ttsctl` entrypoint uses the local `local-tts-service` repository and can synthesize offline without starting the HTTP service.

## Installation

1. Download `main.js`, `manifest.json`, and `styles.css` from the latest release.
2. Create this folder in your vault:

```text
<vault>/.obsidian/plugins/cloud-tts-reader
```

3. Put the downloaded files into that folder.
4. Restart Obsidian or reload community plugins.
5. Enable **Cloud TTS Reader** in community plugin settings.

## Commands

- `Read selected text or active note aloud`
- `Pause reading`
- `Resume reading`
- `Stop reading`
- `Test local TTS CLI`
- `Open TTS output folder`

## Playback Controller

When reading starts, Cloud TTS Reader shows a floating controller in the lower-right corner of Obsidian.

The controller shows the current synthesis/playback state and chunk progress, and provides:

- `Pause`
- `Continue`
- `Stop`
- `Folder`

If Obsidian or Electron blocks automatic playback after local synthesis, click `Continue` in the controller.

## Settings

- `Current detected system name`: read-only OS username, not saved into the shared vault config.
- `TTS CLI path map`: one `system-name=ttsctl-path` entry per line. The plugin chooses the matching path at runtime.
- `Output folder`: vault-relative folder for generated wav files. Default: `.cloud-tts-reader/audio`.
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
