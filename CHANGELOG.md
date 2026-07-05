# Changelog

## Unreleased

- Added macOS default `ttsctl.sh` path for the local TTS CLI.
- Added system-name based TTS CLI path settings for shared macOS / Windows Obsidian vaults.
- Added TTS CLI auto-detection and a `local-tts-service` install guide link from settings.
- Aligned Markdown speech cleanup with the agent hook: skip Markdown links, file references, tables, and non-text code fences while preserving `text` / `txt` / `plain` fences.

## 1.0.1 - 2026-07-03

- Fixed local wav playback by reading generated audio back into a Blob URL before playback.
- Added a floating playback controller with pause, continue, stop, and output-folder actions.
- Added clearer audio playback error messages and autoplay recovery guidance.

## 1.0.0 - 2026-05-26

- Refocused Open Reader on local `ttsctl` speech synthesis.
- Removed cloud TTS provider setup from the product surface.
- Added configurable local CLI path, output folder, speed, chunking, and audio retention.
- Added command and settings action for testing the local TTS CLI.
- Added command and settings action for opening the generated audio folder.
- Added playback controls for pause, resume, and stop.
- Added Markdown text cleanup, chunking, and settings UI.
