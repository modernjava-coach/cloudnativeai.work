# 🌩️ cloudnativeai.work

**cloudnativeai.work** — A showcase and knowledge hub for Cloud-Native + Agentic AI projects.

## 🚀 Tech Stack
- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed via [Vercel](https://vercel.com)

## 🧭 Setup Instructions

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Run locally
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 3️⃣ Deploy on Vercel
- Push to GitHub
- Import repo in [Vercel](https://vercel.com)
- Add domain `cloudnativeai.work`
- Update GoDaddy DNS:

| Type | Name | Value | TTL |
|------|------|--------|-----|
| A | @ | 76.76.21.21 | 1 Hour |
| CNAME | www | cname.vercel-dns.com | 1 Hour |

After propagation, your site is live 🎉