# Changelog

## 1.0.1 - 2026-07-03

- Fixed local wav playback by reading generated audio back into a Blob URL before playback.
- Added a floating playback controller with pause, continue, stop, and output-folder actions.
- Added clearer audio playback error messages and autoplay recovery guidance.

## 1.0.0 - 2026-05-26

- Refocused Cloud TTS Reader on local `ttsctl` speech synthesis.
- Removed cloud TTS provider setup from the product surface.
- Added configurable local CLI path, output folder, speed, chunking, and audio retention.
- Added command and settings action for testing the local TTS CLI.
- Added command and settings action for opening the generated audio folder.
- Added playback controls for pause, resume, and stop.
- Added Markdown text cleanup, chunking, and settings UI.
