# AI Agent Suite using Google ADK, Gemini & MCP

This repository hosts five full-stack AI agents built using the Agent Development Kit (ADK) — each designed to handle a distinct real-world task.  
All agents follow ADK best practices, include configuration and setup instructions, and are ready for local execution or deployment.

---

## 🔹 Agents Overview

### **a) Deep Research Agent – Lead Generation**  
Automatically performs research across public sources, enriches found data, and builds structured lead records suitable for CRM or marketing pipelines.  
- Intelligent web search and data collection  
- Lead scoring & prioritization  
- Outputs enriched leads ready for downstream workflows  

Reference implementation: original lead-generation ADK project  

---

### **b) Advanced Tool Agent — Gemini CLI + ADK Pipeline**  
Demonstrates how to embed the Gemini CLI as a tool inside an ADK workflow. This allows combining LLM-powered tasks (e.g., summarization, code generation, content analysis) with ADK’s orchestration and tool-handling capabilities.  
- Gemini CLI based workflows  
- Custom tool integration in ADK  
- Example included for deployment (e.g. via Cloud Run)  

---

### **c) MCP-Based Bug Assistance Agent**  
Built with ADK + Model Context Protocol (MCP) tools to analyze codebases, detect common issues, and propose patch suggestions. Useful for automating bug detection and generating fix recommendations.  
- Static code inspection combined with AI reasoning  
- Context-aware bug detection and explanation  
- Patch generation and interactive flow  

---

### **d) Production-Quality Code Review Assistant**  
A robust code review agent designed to automatically review pull requests (PRs), analyze code changes, highlight issues (bugs, style, security, maintainability), and produce structured review feedback — ready for CI/CD integration.  
- Automatic code-quality, security, and style review  
- Context-aware feedback generation  
- Built to integrate with GitHub / GitLab workflows  

---

### **e) E-Commerce Agent (ADK + MCP + DB Integration)**  
This agent simulates a production-grade e-commerce assistant: supports product search, recommendations, and interactive shopping workflows. It combines ADK orchestration, MCP tools, and backend data (e.g. in a database) to deliver a conversational shopping experience.  
- Product discovery & recommendation logic  
- Integration with a structured data backend (e.g. relational DB)  
- End-to-end conversational commerce workflow  

---

## 🛠️ How to Run

1. Clone the repo  
2. Navigate to the agent folder of your choice under `agents/`  
3. Install dependencies (e.g. `pip install -r requirements.txt`)  
4. Run the agent via its entry script (e.g. `python main.py --help` for usage details)  

Each agent folder includes configuration options, instructions for setup, and usage examples.

---

## 🎥 Video Walkthroughs  
A complete demo video of playlist : [youtube ](https://www.youtube.com/playlist?list=PLh8Ujk1E7vYWML6wlTBj_i9byENdP05OY)

---

## Why This Structure?  
- **Modular**: each agent lives in its own folder — easy to focus on one at a time.  
- **Reusable**: agents share patterns and can be extended.  
- **Production-ready**: designed with deployment, integration, and real-world use in mind.  
- **Flexible tooling**: integrates LLMs, CLI tools, MCP tools, databases — ADK supports it all.  

---

## 🔗 References & Inspiration  
- ADK official documentation and sample agents  
- Original Lead Generation ADK example  
- Gemini CLI integration example  
- MCP-based bug assistant pattern  
- E-Commerce agent patterns using structured data + agent orchestration  

