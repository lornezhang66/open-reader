# Obsidian Community Plugin Submission

Add this entry to the end of `community-plugins.json` in `obsidianmd/obsidian-releases`.

```json
{
  "id": "open-reader",
  "name": "Open Reader",
  "author": "zhangxiaolong",
  "description": "Read selected text and Markdown notes aloud with a local offline TTS CLI.",
  "repo": "lornezhang66/open-reader"
}
```

Before submitting:

1. Push this repository to GitHub.
2. Create a GitHub release tagged with the exact version from `manifest.json`.
3. Confirm the release contains `main.js`, `manifest.json`, and `styles.css`.
4. Fork `obsidianmd/obsidian-releases`.
5. Add the JSON entry above to `community-plugins.json`.
6. Open a pull request.
