# Wu-Tang Build Blessing 🐝

> A GitHub Action that prints "Wu-Tang is for the children" in your CI/CD logs, along with a randomized piece of build wisdom. Lighthearted morale for your engineering team.

## What is this?

A drop-in GitHub Action you can add to any CI/CD workflow in **one line of YAML**. Every time your pipeline runs, it prints a Wu-Tang-themed blessing in the logs. It's a tiny morale boost for engineering teams — and a fun way to honor Ol' Dirty Bastard's reminder at the 1998 Grammys: *Wu-Tang is for the children.*

## Why use it?

- ✅ Zero configuration — works out of the box
- ✅ Three output styles (banner, compact, verse)
- ✅ Optional "no deploys on Friday" guardrail
- ✅ Lightweight (under 50ms runtime)
- ✅ Easy to fork and customize for your team

## Quick Start

Add this to any GitHub Actions workflow file (e.g. `.github/workflows/ci.yml`):

```yaml
- name: Bless the build
  uses: your-username/wu-tang-build-blessing@v1
```

That's it. The next time your workflow runs, you'll see a Wu-Tang blessing in the logs.

## Configuration

| Input | Description | Default |
|-------|-------------|---------|
| `style` | Output style: `banner`, `compact`, or `verse` | `banner` |
| `fail-on-friday` | Fail the build on Fridays (no Friday deploys!) | `false` |

## Local Development

```bash
npm install
npm test
npm run build
```

## License

MIT — Do what you want with it. Just remember: Wu-Tang is for the children.