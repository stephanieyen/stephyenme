// EDIT THIS FILE TO UPDATE YOUR PORTFOLIO CONTENT
// No coding knowledge needed - just change the text between the quotes!

const portfolioContent = {
  // HEADER / OVERVIEW SECTION
  name: "Steph Yen",
  tagline: "Building at the intersection of tech, words, and sound",
  welcomeText: "Welcome. I work in tech startups, write about what matters, and create music that moves.",
  
  // EXPANDED OVERVIEW (shown when you click "Read more")
  overviewExpanded: [
    "I've spent the last decade navigating the unpredictable waters of startups, where every day brings a new challenge and every decision can reshape the trajectory of a company. But my journey isn't confined to spreadsheets and pitch decks.",
    "Writing has always been my way of processing the world—turning complex ideas into clear narratives, whether it's dissecting the latest tech trends or exploring the cultural shifts happening around us. And when words aren't enough, I turn to music, creating soundscapes that capture emotions words can't reach.",
    "This portfolio is a window into those three worlds. Explore each to see how they intertwine and inform one another."
  ],

  // TECH STARTUPS CARD
  tech: {
    title: "Tech Startups",
    summary: "Navigating the fast-paced world of innovation, building products that solve real problems, and helping teams scale from zero to one.",
    details: {
      focus: "Working on growth strategy and product development for early-stage B2B SaaS companies. I specialize in finding product-market fit and scaling go-to-market motions.",
      experience: "Led product teams at two venture-backed startups from pre-seed to Series A, managing everything from user research to roadmap planning to cross-functional execution.",
      philosophy: "The best products emerge from deep customer empathy combined with ruthless prioritization. Build less, but build it better."
    },
    // Stack of cards that appear when expanded
    stack: [
      {
        type: "project",
        title: "Project Alpha",
        description: "Built a B2B SaaS platform that scaled to 10k users in 6 months",
        image: "🚀"
      },
      {
        type: "snippet",
        title: "Lesson Learned",
        description: "Speed matters, but direction matters more. We pivoted 3 times before finding PMF.",
        image: "💡"
      },
      {
        type: "project",
        title: "Growth Experiment",
        description: "Ran a viral loop that increased signups by 300%",
        image: "📈"
      }
    ]
  },

  // WRITING CARD
  writing: {
    title: "Writing",
    summary: "Exploring ideas through essays, articles, and long-form pieces. Expect thoughts on technology, culture, and the creative process.",
    details: {
      topics: "The intersection of technology and society, lessons from startup life, the evolution of remote work, and the role of creativity in business.",
      recent: '"Why Most Startup Advice is Wrong," "The Case for Slower Growth," and "Finding Signal in the Noise: A Framework for Decision Making."',
      where: "My essays appear on my personal blog, Medium, and occasionally in tech publications. I publish weekly on Thursdays."
    },
    // Stack of cards that appear when expanded
    stack: [
      {
        type: "article",
        title: "Why Most Startup Advice is Wrong",
        description: "An essay on how context matters more than tactics",
        image: "✍️"
      },
      {
        type: "snippet",
        title: "Writing Tip",
        description: "The best writing happens when you're thinking through a problem, not explaining a solution.",
        image: "💭"
      },
      {
        type: "article",
        title: "The Case for Slower Growth",
        description: "Why sustainable beats exponential",
        image: "🌱"
      }
    ]
  },

  // MUSIC CARD
  music: {
    title: "Music",
    summary: "Composing and producing soundscapes that tell stories without words. From ambient textures to full arrangements.",
    details: {
      style: "My work blends ambient electronica with neo-classical elements—think Nils Frahm meets Jon Hopkins. I focus on creating emotional landscapes that shift and evolve.",
      latest: '"Liminal Spaces," a 7-track EP exploring transitions and in-between moments. Released on all streaming platforms.',
      process: "I compose primarily with piano and modular synths, layering textures and building narratives through sound. Each piece starts with a feeling I want to capture."
    },
    // Stack of cards that appear when expanded
    stack: [
      {
        type: "track",
        title: "Liminal Spaces EP",
        description: "A 7-track journey through transitions",
        image: "🎵"
      },
      {
        type: "snippet",
        title: "Studio Moment",
        description: "That feeling when a melody just clicks at 2am and suddenly everything makes sense.",
        image: "🎹"
      },
      {
        type: "track",
        title: "Nocturne in C",
        description: "Piano piece inspired by late night city walks",
        image: "🌙"
      }
    ]
  },

  // ABOUT PAGE
  about: {
    intro: "I'm someone who thrives at intersections. Where technology meets human need. Where structured thinking meets creative expression. Where business strategy meets artistic vision.",
    
    techSection: "Currently working in the startup ecosystem, I focus on [your specific role: product, growth, operations, etc.]. I've helped [companies/teams] scale from early stage to [milestone], working on everything from go-to-market strategy to product development. I believe the best products are built when you deeply understand both the technology and the people using it.",
    
    writingSection: "Writing is how I make sense of the world. I publish essays on [topics you care about: tech trends, startup lessons, cultural observations, etc.]. My work has appeared in [publications, or say 'various online platforms' if just starting]. I'm drawn to questions that don't have easy answers and ideas that challenge conventional thinking.",
    
    musicSection: "Music has been a constant companion since [when you started]. I create [genre/style] and release work under [artist name or 'various projects']. For me, music is about creating emotional spaces—moments of reflection, energy, or contemplation. You can find my work on [platforms].",
    
    contact: "I'm always interested in connecting with people working on meaningful projects. Whether you want to discuss startup ideas, collaborate on creative work, or just have a conversation, feel free to reach out at [your@email.com] or find me on [Twitter/LinkedIn/etc.]."
  }
};