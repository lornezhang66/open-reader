# Open Reader

## 注意力读不下去时，让耳朵接着读

我有 ADHD。长时间盯着文字很容易失去注意力，但听觉能帮我重新进入内容。所以我做了 Open Reader：一个免费、中文友好的 Obsidian 本地朗读插件。

选中一段文字，或者打开整篇笔记，就能用本地中文语音朗读。无需购买云端 TTS，不用 API Key，也不按字数付费。

**为什么值得试试：**

- **免费使用** — 没有订阅费、调用额度或隐藏成本。
- **中文友好** — 支持中文和中英混读，不只是系统机械音。
- **代替云端 TTS** — 不用 API Key，笔记内容也不会上传。
- **理解 Markdown** — 自动跳过链接、元数据、代码和格式符号。
- **一键配置语音** — macOS、Windows 均可从插件设置安装本地引擎。

[试听声音对比](https://open-reader.pages.dev/#listen) · [免费下载试用](https://github.com/lornezhang66/open-reader/releases/latest) · [遇到问题，告诉我](https://github.com/lornezhang66/open-reader/issues/new?template=bug_report.yml)

> 目前仅支持桌面端 · 免费开源 · 首次安装本地语音模型约 1.5 GB

## Local TTS Contract

The preferred protocol is Local TTS HTTP protocol 1. The CLI remains the installer, daemon launcher, and compatibility fallback:

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
