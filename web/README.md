# Inspiration
- Main Inspo: https://boston-react.vercel.app/
  - neobrutalism
  - font: Rubik? Ubuntu? [Atkinson Hyperlegible?](https://www.brailleinstitute.org/freefont/)
- https://shadcn-landing-page-livid.vercel.app/ / https://github.com/nobruf/shadcn-landing-page
  - tailwind gradient technique to highlight a word
  - tailwind blur div behind element to highlight it
## more
- [Best Artificial Intelligence Landing Page Design Inspiration - Lapa Ninja](https://www.lapa.ninja/category/artificial-intelligence/)
- [34 Best  Artificial Intelligence Landing Page Design Inspiration & Examples](https://www.landingfolio.com/inspiration/landing-page/artificial-intelligence)

# Palette
- https://coolors.co/1b5169-2a9d8f-f9c74f-f3722c
  - Midnight Green #1b5169
  - Persian Green #2a9d8f
  - Saffron #f9c74f
  - Orange Crayole #f3722c

# Animations
- [motiondivision/motion: A modern animation library for React and JavaScript](https://github.com/motiondivision/motion) — powers Framer animations (the best scrolls, and path animations), see examples in docs
  - https://meta-droid.vercel.app/ / https://github.com/vignesh-gupta/meta-droid
    - example page using `motion`



# Resources
## Starting Code
- [Boston - React NextJS Personal Portfolio](https://elements.envato.com/boston-react-nextjs-personal-portfolio-T6QFHLA)
- [nextjs/saas-starter: Get started quickly with Next.js, Postgres, Stripe, and shadcn/ui.](https://github.com/nextjs/saas-starter)

## future ideas beyond landing page
- [nobruf/shadcn-next-workflows: Interactive workflow builder using React Flows, Next.js, and Shadcnui. Create, connect, and validate custom nodes easily.](https://github.com/nobruf/shadcn-next-workflows)


----------------------------------------------

# Landing Page Content

## Unix Philosophy Meets AI Engineering
Transform your AI workflows with production-ready building blocks that just work.

## AI Bits delivers modular, production-ready AI functions that follow Unix principles:
- Do one thing and do it well
- Work together seamlessly
- Handle text streams universally
- Scale from prototype to production

## Our core offerings:
1. **Inference Endpoints**: Deploy production-ready AI models with one command
2. **On-premises Containers**: Run AI workloads in your secure environment
3. **Open-Source Libraries**: Build with our battle-tested foundations

### Why Choose AI Bits

Because we believe AI infrastructure should be:
- **Reliable**: Built on proven Unix principles
- **Fast**: From prototype to production in minutes
- **Cost-effective**: Pay only for what you use
- **Flexible**: Use anywhere, scale anytime
- **Open**: No vendor lock-in, full transparency

### How It Works

1. **Choose Your Building Blocks**
- Browse our library of AI functions
- Select pre-built containers or endpoints
- Mix and match to create your workflow

2. **Deploy Your Way**
```sh
# Same code can run from an inference endpoint or from on-prem deployment
lm summarize "this long article"
```

3. **Connect Everything**
```sh
# Build pipelines straight in the shell or in any language of your choice
lm summarize "this long article" > summary.txt
cat summary.txt | cv generate -p "use concepts from this article to generate an abstract picture" > image.jpg
if [[ \
  `cv classify "safe not-safe" -i image.jpg` == "safe" && \
  `cat summary.txt | lm classify "safe not-safe"` == "safe" \
]]; then return 0; fi
return 1
```

Built by developers, for developers.
Reliable. Fast. Open Source.


### Products
**Unix Pipelines Meet AI Functions**  
AiBits offers **three core products** to streamline your workflow:  
1. **Inference Endpoints**: Deploy low-latency AI models in seconds. Pay-per-request pricing.  
2. **On-Premises AI Containers**: Self-hosted, secure AI functions (NLP, vision, agents) with Kubernetes support.  
3. **Open-Source AI Libraries**: Modular, extensible code for building custom workflows. Think *“Legos for AI.”*  


### Benefits
- **Speed** Fast Inference Endpoints via our global API.
- **Security** On-premises or in your VPC.
- **Cost-effective, Scalable, Reliable** Modular, only pay money or compute for what you need. Smaller models and model routing out of the box
- **No vendor lock-in**

**The Value We Deliver**  
✅ **Cost:** 70% cheaper than major cloud providers.  
✅ **Speed:** Ship workflows 10x faster with Unix-style pipelining.  
✅ **Flexibility:** Mix-and-match open-source and proprietary modules.  

**Don’t Build It All From Scratch**  




# Tech Stack
## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
