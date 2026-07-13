# Open Reader

## 收藏的笔记，终于可以听完了

选中一段文字，或者直接打开整篇笔记。Open Reader 会过滤 Markdown 符号，用自然语音在本地朗读。走路、通勤、眼睛需要休息时，你的笔记仍然可以继续输入大脑。

**为什么值得试试：**

- **完全本地** — 笔记内容不上传，不需要云端账号。
- **理解 Markdown** — 自动跳过链接、元数据、代码和格式符号。
- **一键配置语音** — macOS、Windows 均可从插件设置安装本地引擎。
- **为长笔记设计** — 支持分段、暂停、继续、调速和进度显示。

[免费下载试用](https://github.com/lornezhang66/open-reader/releases/latest) · [遇到问题，告诉我](https://github.com/lornezhang66/open-reader/issues/new?template=bug_report.yml)

> 桌面端插件 · 免费开源 · 首次安装本地语音模型约 1.5 GB

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
