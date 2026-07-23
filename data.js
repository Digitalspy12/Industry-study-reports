// Enterprise Multi-Agent SDLC Research Dashboard Data

const FRAMEWORKS = [
  {
    id: "microsoft",
    name: "Microsoft Agent Framework",
    badgeColor: "#3B82F6", // Blue
    badgeBg: "rgba(59, 130, 246, 0.12)",
    badgeBorder: "rgba(59, 130, 246, 0.3)",
    icon: "layers",
    tagline: "Enterprise-grade orchestration & durable state workflows",
    pros: ["Durable checkpointing & recovery", "Built-in approval HITL workflows", "Magentic dynamic orchestration"],
    cons: ["Higher setup complexity for simple tasks", "Requires Microsoft ecosystem alignment"],
    maturity: {
      "Dynamic Agent Creation": 5,
      "Multi-Agent Communication": 5,
      "Memory & Knowledge Management": 5,
      "AI SDLC Support": 4,
      "Workflow Orchestration": 5,
      "State Management": 5,
      "Human-in-the-Loop": 5
    },
    docsUrl: "https://learn.microsoft.com/en-us/agent-framework/"
  },
  {
    id: "aws",
    name: "AWS Bedrock",
    badgeColor: "#F59E0B", // Amber / AWS Orange
    badgeBg: "rgba(245, 158, 11, 0.12)",
    badgeBorder: "rgba(245, 158, 11, 0.3)",
    icon: "cloud",
    tagline: "Cloud-native managed multi-agent collaboration on AWS",
    pros: ["AWS-native security & IAM", "Supervisor & Collaborator pre-built routing", "Managed session memory"],
    cons: ["AWS lock-in", "Less customizable graph primitives compared to LangGraph"],
    maturity: {
      "Dynamic Agent Creation": 4,
      "Multi-Agent Communication": 4,
      "Memory & Knowledge Management": 4,
      "AI SDLC Support": 4,
      "Workflow Orchestration": 4,
      "State Management": 4,
      "Human-in-the-Loop": 4
    },
    docsUrl: "https://aws.amazon.com/bedrock/agents/"
  },
  {
    id: "langgraph",
    name: "LangChain Deep Agents",
    badgeColor: "#10B981", // Emerald / Green
    badgeBg: "rgba(16, 185, 129, 0.12)",
    badgeBorder: "rgba(16, 185, 129, 0.3)",
    icon: "git-fork",
    tagline: "Stateful graph-based multi-agent orchestration engine",
    pros: ["Extremely flexible cyclic graphs", "Built-in subagent spawning tool", "LangGraph persistence & time travel"],
    cons: ["Requires explicit governance setup", "Complex state graph design"],
    maturity: {
      "Dynamic Agent Creation": 5,
      "Multi-Agent Communication": 5,
      "Memory & Knowledge Management": 5,
      "AI SDLC Support": 4,
      "Workflow Orchestration": 5,
      "State Management": 5,
      "Human-in-the-Loop": 5
    },
    docsUrl: "https://docs.langchain.com/oss/python/deepagents/overview"
  },
  {
    id: "cursor",
    name: "Cursor",
    badgeColor: "#94A3B8", // Slate / Steel
    badgeBg: "rgba(148, 163, 184, 0.12)",
    badgeBorder: "rgba(148, 163, 184, 0.3)",
    icon: "code",
    tagline: "Developer-in-the-loop IDE coding assistant",
    pros: ["Deep codebase context & file awareness", "Immediate developer feedback loop", "Zero orchestration overhead"],
    cons: ["Not an enterprise workflow engine", "No multi-agent message routing APIs"],
    maturity: {
      "Dynamic Agent Creation": 2,
      "Multi-Agent Communication": 2,
      "Memory & Knowledge Management": 3,
      "AI SDLC Support": 5,
      "Workflow Orchestration": 2,
      "State Management": 3,
      "Human-in-the-Loop": 5
    },
    docsUrl: "https://docs.cursor.com/"
  },
  {
    id: "anthropic",
    name: "Anthropic Pattern",
    badgeColor: "#A855F7", // Purple
    badgeBg: "rgba(168, 85, 247, 0.12)",
    badgeBorder: "rgba(168, 85, 247, 0.3)",
    icon: "cpu",
    tagline: "Modular specialist agents with structured handoffs & HITL",
    pros: ["Context engineering optimization", "Prevents prompt pollution", "Strong safety & human oversight"],
    cons: ["Architectural pattern, not a turnkey platform", "Requires building custom runtime"],
    maturity: {
      "Dynamic Agent Creation": 4,
      "Multi-Agent Communication": 4,
      "Memory & Knowledge Management": 4,
      "AI SDLC Support": 4,
      "Workflow Orchestration": 4,
      "State Management": 4,
      "Human-in-the-Loop": 5
    },
    docsUrl: "https://www.anthropic.com/engineering/building-effective-agents"
  }
];

const QUESTIONS = [
  {
    id: "q1",
    title: "How should the agent be designed?",
    shortTitle: "Agent Design",
    color: "#3B82F6"
  },
  {
    id: "q2",
    title: "How should agents communicate?",
    shortTitle: "Communication",
    color: "#10B981"
  },
  {
    id: "q3",
    title: "When should a new agent be created dynamically?",
    shortTitle: "Dynamic Spawning",
    color: "#F59E0B"
  },
  {
    id: "q4",
    title: "How should context be maintained across SDLC stages?",
    shortTitle: "Memory & Context",
    color: "#8B5CF6"
  },
  {
    id: "q5",
    title: "Which framework and architecture are suitable?",
    shortTitle: "Architecture Fit",
    color: "#06B6D4"
  },
  {
    id: "q6",
    title: "What are the industry best practices?",
    shortTitle: "Best Practices",
    color: "#EC4899"
  }
];

// Table 1 Data: SDLC Framework Research Questions
const TABLE1_DATA = {
  microsoft: {
    q1: {
      summary: "Role-based agents, often organized around planner/executor or specialist roles.",
      source: "Microsoft Agent Framework – Workflows & Orchestrations",
      url: "https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/"
    },
    q2: {
      summary: "Structured orchestration, tool calls, workflow graphs, shared state.",
      source: "Microsoft Workflow Orchestrations",
      url: "https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/"
    },
    q3: {
      summary: "When a subtask needs a different skill, domain, or parallel execution (Concurrent, Handoff, Magentic patterns).",
      source: "Microsoft Workflow Orchestrations",
      url: "https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/"
    },
    q4: {
      summary: "Through durable state, checkpoints, and shared workflow memory.",
      source: "Microsoft Workflow Checkpoints",
      url: "https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/checkpoints"
    },
    q5: {
      summary: "Best for enterprise orchestration and controlled multi-agent workflows.",
      source: "Microsoft Agent Framework Overview",
      url: "https://learn.microsoft.com/en-us/agent-framework/"
    },
    q6: {
      summary: "Strong fit for governed, auditable enterprise automation.",
      source: "Microsoft Agent Framework documentation",
      url: "https://learn.microsoft.com/en-us/agent-framework/"
    }
  },
  aws: {
    q1: {
      summary: "Agents are usually designed as managed task executors with clear tool boundaries.",
      source: "Amazon Bedrock Agents",
      url: "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"
    },
    q2: {
      summary: "Via Bedrock agent orchestration and integrations with external services.",
      source: "Multi-Agent Collaboration",
      url: "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-multi-agent-collaboration.html"
    },
    q3: {
      summary: "When task decomposition or retrieval requires specialization (Supervisor & Collaborator agents).",
      source: "Multi-Agent Collaboration",
      url: "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-multi-agent-collaboration.html"
    },
    q4: {
      summary: "Through AWS-native persistence and enterprise system integration.",
      source: "Agent Memory",
      url: "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-memory.html"
    },
    q5: {
      summary: "Best for cloud-native enterprise deployment on AWS.",
      source: "Amazon Bedrock Agents Overview",
      url: "https://aws.amazon.com/bedrock/agents/"
    },
    q6: {
      summary: "Emphasizes security, access control, and scalable managed operations.",
      source: "AWS Well-Architected & Bedrock Security",
      url: "https://docs.aws.amazon.com/bedrock/latest/userguide/security.html"
    }
  },
  langgraph: {
    q1: {
      summary: "Flexible agent roles, often planner + specialist + tool-using subagents.",
      source: "Deep Agents Overview",
      url: "https://docs.langchain.com/oss/python/deepagents/overview"
    },
    q2: {
      summary: "Graph-based or chained message passing with tool calling.",
      source: "LangGraph Overview",
      url: "https://docs.langchain.com/oss/python/langgraph/overview"
    },
    q3: {
      summary: "When deeper reasoning, branching, or parallelization is needed.",
      source: "Deep Agents documentation",
      url: "https://docs.langchain.com/oss/python/deepagents/overview"
    },
    q4: {
      summary: "Through memory components, checkpoints, and external stores.",
      source: "LangGraph Persistence & Memory",
      url: "https://docs.langchain.com/oss/python/langgraph/persistence"
    },
    q5: {
      summary: "Best for custom architectures and experimentation.",
      source: "LangGraph Overview",
      url: "https://docs.langchain.com/oss/python/langgraph/overview"
    },
    q6: {
      summary: "Best when paired with explicit governance and evaluation.",
      source: "LangSmith Observability & Evaluation",
      url: "https://docs.smith.langchain.com/"
    }
  },
  cursor: {
    q1: {
      summary: "Developer-in-the-loop coding agent experience rather than full enterprise orchestration.",
      source: "Cursor Docs – Agent Mode",
      url: "https://docs.cursor.com/chat/agent"
    },
    q2: {
      summary: "Primarily through IDE interaction, code context, and task-driven prompting.",
      source: "Cursor Documentation",
      url: "https://docs.cursor.com/"
    },
    q3: {
      summary: "When codebase areas or coding tasks need focused assistance.",
      source: "Cursor Agent documentation",
      url: "https://docs.cursor.com/chat/agent"
    },
    q4: {
      summary: "Through repo context, file awareness, and conversation history.",
      source: "Cursor Context documentation",
      url: "https://docs.cursor.com/context"
    },
    q5: {
      summary: "Best for coding assistance, not full SDLC orchestration.",
      source: "Cursor Documentation",
      url: "https://docs.cursor.com/"
    },
    q6: {
      summary: "Best used with human review and IDE-based control.",
      source: "Cursor Agent Mode documentation",
      url: "https://docs.cursor.com/chat/agent"
    }
  },
  anthropic: {
    q1: {
      summary: "Specialist agents with explicit task separation.",
      source: "Anthropic Engineering – Building Effective Agents",
      url: "https://www.anthropic.com/engineering/building-effective-agents"
    },
    q2: {
      summary: "Typically via handoffs, tool use, and shared task framing.",
      source: "Building Effective Agents",
      url: "https://www.anthropic.com/engineering/building-effective-agents"
    },
    q3: {
      summary: "When a task benefits from decomposition into smaller expert jobs.",
      source: "Building Effective Agents",
      url: "https://www.anthropic.com/engineering/building-effective-agents"
    },
    q4: {
      summary: "Through structured context sharing, summaries, and controlled handoff.",
      source: "Anthropic Context Engineering & Claude docs",
      url: "https://docs.anthropic.com/"
    },
    q5: {
      summary: "Best for modular agent collaboration and reasoning workflows.",
      source: "Building Effective Agents",
      url: "https://www.anthropic.com/engineering/building-effective-agents"
    },
    q6: {
      summary: "Strong emphasis on human oversight and safety boundaries.",
      source: "Anthropic Responsible Scaling Policy",
      url: "https://www.anthropic.com/responsible-scaling-policy"
    }
  }
};

// Table 2 Data: Deep Capability Breakdown
const CAPABILITIES = [
  "Dynamic Agent Creation",
  "Multi-Agent Communication",
  "Memory & Knowledge Management",
  "AI SDLC Support",
  "Workflow Orchestration",
  "State Management",
  "Human-in-the-Loop"
];

const TABLE2_DATA = {
  "Dynamic Agent Creation": {
    microsoft: {
      summary: "Uses Magentic orchestration, where a manager agent dynamically selects or hands off work to specialized agents during workflow execution.",
      detail: "Recommended when tasks require adaptive decomposition rather than fixed pipelines.",
      source: "Microsoft Workflow Orchestrations",
      url: "https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/"
    },
    aws: {
      summary: "Uses a Supervisor Agent that delegates work to collaborator agents.",
      detail: "AWS recommends this for complex business workflows where tasks can be broken into domain-specific subtasks.",
      source: "AWS Multi-Agent Collaboration",
      url: "https://docs.aws.amazon.com/en_us/bedrock/latest/userguide/agents-multi-agent-collaboration.html"
    },
    langgraph: {
      summary: "Uses a built-in 'task' tool to spawn specialized subagents.",
      detail: "LangChain recommends subagents when tasks require context isolation, specialized tools, different models, or parallel work. Advise NOT creating subagents for simple single-step tasks.",
      source: "Deep Agents – Subagents",
      url: "https://docs.langchain.com/oss/python/deepagents/subagents"
    },
    cursor: {
      summary: "Agent Mode delegates coding tasks internally, but does not publicly document dynamic runtime agent-spawning APIs.",
      detail: "Focuses on assigning autonomous coding tasks while keeping developer in control. Treat as IDE agent rather than enterprise multi-agent runtime.",
      source: "Cursor Agent Documentation",
      url: "https://docs.cursor.com/chat/agent"
    },
    anthropic: {
      summary: "Recommends creating specialist agents whenever a problem benefits from decomposition.",
      detail: "Explicitly recommends separating planner, researcher, coder, reviewer, etc., instead of building one large general-purpose agent.",
      source: "Anthropic Engineering – Building Effective Agents",
      url: "https://www.anthropic.com/engineering/building-effective-agents"
    }
  },
  "Multi-Agent Communication": {
    microsoft: {
      summary: "Supports Sequential, Concurrent, Group Chat, Handoff, and Magentic orchestration patterns.",
      detail: "Enables flexible agent-to-agent coordination topologies based on workflow state.",
      source: "Microsoft Workflow Orchestrations",
      url: "https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/"
    },
    aws: {
      summary: "Supervisor routes requests to collaborator agents or coordinates responses.",
      detail: "AWS exposes Supervisor and Supervisor-with-Routing modes to reduce latency and manage control flow.",
      source: "AWS Multi-Agent Collaboration",
      url: "https://docs.aws.amazon.com/bedrock/latest/userguide/create-multi-agent-collaboration.html"
    },
    langgraph: {
      summary: "Supervisor → Subagent pattern. Supervisor invokes subagents as tools and combines results.",
      detail: "Runtime context automatically propagates to subagents while internal reasoning remains isolated.",
      source: "Deep Agents Subagents & LangGraph Supervisor",
      url: "https://docs.langchain.com/oss/python/deepagents/subagents"
    },
    cursor: {
      summary: "Communication is primarily through shared repository context, IDE state, and conversation history.",
      detail: "Does not expose an official inter-agent messaging protocol comparable to LangGraph or Microsoft Framework.",
      source: "Cursor Documentation",
      url: "https://docs.cursor.com/"
    },
    anthropic: {
      summary: "Structured handoffs between specialist agents rather than unrestricted conversations.",
      detail: "Agents communicate through clearly defined task descriptions, tool outputs, and summarized context to minimize prompt pollution.",
      source: "Anthropic Engineering – Building Effective Agents",
      url: "https://www.anthropic.com/engineering/building-effective-agents"
    }
  },
  "Memory & Knowledge Management": {
    microsoft: {
      summary: "Uses workflow checkpoints to persist execution state.",
      detail: "Enables pause/resume, recovery, auditing, and migration of long-running workflows across distributed environments.",
      source: "Microsoft Checkpoints",
      url: "https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/checkpoints"
    },
    aws: {
      summary: "Stores conversational memory using sessionId and memoryId.",
      detail: "Enables cross-session recall and summarized history across interactions.",
      source: "AWS Agent Memory",
      url: "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-memory.html"
    },
    langgraph: {
      summary: "LangGraph Persistence with durable checkpoints, long-term memory stores, and virtual filesystems.",
      detail: "Provides automatic summarization and context compression. Runtime context propagates automatically.",
      source: "LangGraph Persistence",
      url: "https://docs.langchain.com/oss/python/deepagents/overview"
    },
    cursor: {
      summary: "Repository awareness through codebase indexing, file context, and recent chat history.",
      detail: "Does not expose enterprise memory APIs or persistent multi-agent memory architecture.",
      source: "Cursor Context Documentation",
      url: "https://docs.cursor.com/context"
    },
    anthropic: {
      summary: "Emphasizes context engineering instead of unlimited chat history.",
      detail: "Recommended techniques include summaries, structured handoffs, retrieval, and external memory stores.",
      source: "Anthropic Engineering – Building Effective Agents",
      url: "https://www.anthropic.com/engineering/building-effective-agents"
    }
  },
  "AI SDLC Support": {
    microsoft: {
      summary: "Suitable for orchestrating specialist agents across requirements, implementation, testing, and approval.",
      detail: "Built-in orchestration patterns handle multi-stage governance seamlessly.",
      source: "Microsoft Workflow Orchestrations",
      url: "https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/"
    },
    aws: {
      summary: "Recommended for enterprise business workflows requiring planning, tool execution, and retrieval.",
      detail: "Scales well across enterprise pipelines with IAM security.",
      source: "AWS Bedrock Agents",
      url: "https://aws.amazon.com/bedrock/agents/"
    },
    langgraph: {
      summary: "Intended for complex multi-step workflows involving coding, testing, shell execution, and MCP.",
      detail: "Provides a flexible foundation for building full custom SDLC automation platforms.",
      source: "Deep Agents Overview",
      url: "https://docs.langchain.com/oss/python/deepagents/overview"
    },
    cursor: {
      summary: "Optimized primarily for the coding portion of SDLC (implementation, debugging, refactoring).",
      detail: "Not intended to orchestrate complete enterprise SDLC workflows outside the IDE context.",
      source: "Cursor Official Documentation",
      url: "https://docs.cursor.com/"
    },
    anthropic: {
      summary: "Claude Code focuses on software engineering tasks including planning, coding, and testing.",
      detail: "Positions as a coding agent that can participate in larger multi-agent workflows.",
      source: "Anthropic Claude Code Documentation",
      url: "https://docs.anthropic.com/"
    }
  },
  "Workflow Orchestration": {
    microsoft: {
      summary: "Supports Sequential, Concurrent, Handoff, Group Chat, and Magentic orchestration.",
      detail: "First-class workflow engine for enterprise agent graphs.",
      source: "Microsoft Workflow Orchestrations",
      url: "https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/"
    },
    aws: {
      summary: "Supervisor orchestrates collaborators, with optional routing to reduce latency.",
      detail: "Fully managed AWS orchestration service.",
      source: "AWS Multi-Agent Collaboration",
      url: "https://docs.aws.amazon.com/bedrock/latest/userguide/create-multi-agent-collaboration.html"
    },
    langgraph: {
      summary: "Workflows represented as stateful graphs supporting branching, looping, and interrupts.",
      detail: "Supports supervisor patterns, swarm handoffs, and durable execution.",
      source: "LangGraph Reference",
      url: "https://reference.langchain.com/python/langgraph/overview"
    },
    cursor: {
      summary: "Workflow orchestration is developer-driven within the IDE environment.",
      detail: "Automates coding activities but does not expose a general graph orchestration engine.",
      source: "Cursor Documentation",
      url: "https://docs.cursor.com/"
    },
    anthropic: {
      summary: "Lightweight orchestration using planner/specialist patterns and explicit task decomposition.",
      detail: "Advocates controlled tool use over complex unconstrained autonomous agent societies.",
      source: "Anthropic Engineering – Building Effective Agents",
      url: "https://www.anthropic.com/engineering/building-effective-agents"
    }
  },
  "State Management": {
    microsoft: {
      summary: "Automatic checkpoints created after workflow supersteps.",
      detail: "Allows durable execution and resume after failures or manual human approvals.",
      source: "Microsoft Checkpoints",
      url: "https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/checkpoints"
    },
    aws: {
      summary: "Session-based execution with persistent memory identifiers.",
      detail: "Ensures continuity across multi-turn enterprise interactions.",
      source: "AWS Agent Memory",
      url: "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-memory.html"
    },
    langgraph: {
      summary: "Checkpointing after graph execution steps with PostgreSQL/SQLite persistence.",
      detail: "Supports pause/resume, time travel debugging, and long-running stateful execution.",
      source: "LangGraph Reference & Persistence",
      url: "https://reference.langchain.com/python/langgraph/overview"
    },
    cursor: {
      summary: "State maintained through active IDE session, repository context, and chat history.",
      detail: "Does not expose durable workflow checkpointing APIs.",
      source: "Cursor Documentation",
      url: "https://docs.cursor.com/"
    },
    anthropic: {
      summary: "Claude Code preserves state via conversation context and external files.",
      detail: "Recommends external persistent memory (retrieval, documents) rather than relying solely on context window.",
      source: "Anthropic Documentation",
      url: "https://docs.anthropic.com/"
    }
  },
  "Human-in-the-Loop": {
    microsoft: {
      summary: "Supports approval-required tools that pause execution until human approval.",
      detail: "Resumes seamlessly from exact saved workflow checkpoint after approval.",
      source: "Microsoft Workflow Orchestrations",
      url: "https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/"
    },
    aws: {
      summary: "Human review can be integrated before executing actions.",
      detail: "Hooks into enterprise governance workflows before invoking destructive actions.",
      source: "AWS Bedrock Agents Documentation",
      url: "https://aws.amazon.com/bedrock/agents/"
    },
    langgraph: {
      summary: "Supports interrupts that pause execution before sensitive tool calls.",
      detail: "Recommends HITL for destructive operations and production deployment.",
      source: "Deep Agents Human-in-the-Loop",
      url: "https://docs.langchain.com/oss/python/deepagents/overview"
    },
    cursor: {
      summary: "Fundamentally developer-in-the-loop by design.",
      detail: "Developer reviews generated code, accepts/rejects edits line-by-line, and controls execution directly in the IDE.",
      source: "Cursor Documentation",
      url: "https://docs.cursor.com/"
    },
    anthropic: {
      summary: "Explicitly recommends human approval at high-impact decision points.",
      detail: "Treats HITL as a core production design principle for code changes and irreversible actions.",
      source: "Anthropic Engineering – Building Effective Agents",
      url: "https://www.anthropic.com/engineering/building-effective-agents"
    }
  }
};
