// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My collaborators and I have developed quite a bit of novel technology that improves accuracy for RAG applications. We&#39;re also big believers in open-source software, so we open-source a lot of the core RAG tech we develop. You can find our main open-source repos below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-consulting",
          title: "consulting",
          description: "I offer specialized consulting services for companies looking to leverage LLMs and RAG in their products and workflows.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/consulting/";
          },
        },{id: "nav-people",
          title: "people",
          description: "I rarely work alone. Most of my work is done in collaboration with my extremely talented brother and D-Star cofounder, Nick.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-why-chat-and-rag-don-39-t-mix",
        
          title: "Why chat and RAG don&#39;t mix",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/rag-chat/";
          
        },
      },{id: "post-contextual-vs-non-contextual-llm-tasks",
        
          title: "Contextual vs. non-contextual LLM tasks",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/contextual-tasks/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zmccormick7", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zach-mccormick-295a5953", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/zmccormick7", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
