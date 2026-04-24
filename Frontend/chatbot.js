window.onload = function () {

  const body = document.getElementById("chat-body");
  const chatbox = document.getElementById("chatbox");
  const input = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");
  const badge = document.getElementById("chat-badge");

  let unread = 0;

  let state = {
    step: "ask_name",
    name: "",
    goal: "",
    level: ""
  };

  // ✅ FULL COURSES DATA
  const courses = {

    "AI/ML": {
      "Beginner": [
        { title: "Python for Beginners", link: "course.html" },
        { title: "Machine Learning Basics", link: "course.html" },
        { title: "AI Foundations", link: "course.html" }
      ]
    },

    "Data Science": {
      "Beginner": [
        { title: "Data Analysis with Python", link: "course.html" },
        { title: "Statistics for Data Science", link: "course.html" }
      ]
    },

    "Web Development": {
      "Beginner": [
        { title: "HTML CSS JavaScript", link: "course.html" }
      ]
    },

    "Cloud Computing": {
      "Beginner": [
        { title: "AWS Courses", link: "aws-courses.html" },
        { title: "Azure Courses", link: "azure-course.html" }
      ]
    },

    "AWS": {
      "Beginner": [
        { title: "AWS Cloud Practitioner", link: "aws-courses.html" },
        { title: "AWS Certifications Roadmap", link: "aws-courses.html" }
      ],
      "Intermediate": [
        { title: "AWS Solutions Architect Associate", link: "aws-courses.html" }
      ],
      "Advanced": [
        { title: "AWS Cloud Architecture Professional", link: "aws-courses.html" },
        { title: "AWS DevOps Engineer Professional", link: "aws-courses.html" },
        { title: "AWS Security Specialty", link: "aws-courses.html" },
        { title: "AWS Solutions Architect Professional", link: "aws-courses.html" }
      ]
    },

    "Google Cloud": {
      "Beginner": [
        { title: "Google Cloud Certifications Roadmap", link: "categories/google-cloud.html" }
      ],
      "Intermediate": [
        { title: "Google Associate Cloud Engineer", link: "categories/google-cloud.html" }
      ],
      "Advanced": [
        { title: "Google Professional Cloud Architect", link: "categories/google-cloud.html" },
        { title: "Google Professional Data Engineer", link: "categories/google-cloud.html" },
        { title: "Google Cloud Professional Track", link: "categories/google-cloud.html" }
      ]
    },

    "Cybersecurity": {
      "Beginner": [
        { title: "CompTIA Security+", link: "categories/cybersecurity.html" },
        { title: "Certified Ethical Hacker (CEH)", link: "categories/cybersecurity.html" },
        { title: "Kali Linux Ethical Hacking Fundamentals", link: "categories/cybersecurity.html" }
      ],
      "Intermediate": [
        { title: "EC-Council Certification Roadmap", link: "categories/cybersecurity.html" },
        { title: "ISC2 Certification Roadmap", link: "categories/cybersecurity.html" },
        { title: "CompTIA Enterprise Security Track", link: "categories/cybersecurity.html" },
        { title: "ISO Governance & Compliance", link: "categories/cybersecurity.html" },
        { title: "Cloud Security Certifications", link: "categories/cybersecurity.html" }
      ],
      "Advanced": [
        { title: "CISSP Training Program", link: "categories/cybersecurity.html" },
        { title: "CISM Training Program", link: "categories/cybersecurity.html" },
        { title: "CCSP Cloud Security", link: "categories/cybersecurity.html" },
        { title: "SIEM SOC Operations", link: "categories/cybersecurity.html" },
        { title: "Splunk SOC Analyst", link: "categories/cybersecurity.html" },
        { title: "QRadar SIEM", link: "categories/cybersecurity.html" },
        { title: "Elastic SIEM", link: "categories/cybersecurity.html" },
        { title: "Sentinel SIEM", link: "categories/cybersecurity.html" },
        { title: "Information Security Audit", link: "categories/cybersecurity.html" },
        { title: "Security Governance Operations", link: "categories/cybersecurity.html" }
      ]
    },

    "Networking": {
      "Beginner": [
        { title: "Networking Certifications Roadmap", link: "categories/networking.html" },
        { title: "Cisco CCNA", link: "categories/networking.html" }
      ],
      "Intermediate": [
        { title: "Fortinet NSE 4", link: "categories/networking.html" },
        { title: "Palo Alto Firewall Administrator", link: "categories/networking.html" }
      ],
      "Advanced": [
        { title: "Cisco CCNP Enterprise", link: "categories/networking.html" },
        { title: "Network Engineering Professional Track", link: "categories/networking.html" }
      ]
    },

    "DevOps": {
      "Beginner": [
        { title: "Docker Certified Associate", link: "categories/devops.html" }
      ],
      "Intermediate": [
        { title: "Jenkins CI/CD Engineer", link: "categories/devops.html" },
        { title: "Ansible Automation for Engineers", link: "categories/devops.html" }
      ],
      "Advanced": [
        { title: "HashiCorp Terraform Associate", link: "categories/devops.html" }
      ]
    },

    "Data & Analytics": {
      "Beginner": [
        { title: "Power BI Data Analyst", link: "categories/data.html" }
      ],
      "Intermediate": [
        { title: "Databricks Data Engineer", link: "categories/data.html" },
        { title: "Snowflake Data Engineering", link: "categories/data.html" }
      ],
      "Advanced": [
        { title: "SAP S/4HANA Enterprise Certification", link: "categories/data.html" }
      ]
    },

    "Project Management": {
      "Beginner": [
        { title: "PRINCE2 Foundation", link: "categories/project-management.html" }
      ],
      "Intermediate": [
        { title: "PMP Certification Prep", link: "categories/project-management.html" },
        { title: "BCS Business Analysis Roadmap", link: "categories/project-management.html" }
      ],
      "Advanced": [
        { title: "PMI Leadership Roadmap", link: "categories/project-management.html" },
        { title: "ITIL + Lean Six Sigma Roadmap", link: "categories/project-management.html" }
      ]
    },

    "Microsoft Azure": {
      "Beginner": [
        { title: "Azure Fundamentals AZ-900", link: "categories/microsoft-azure.html" },
        { title: "Azure Certification Roadmap", link: "categories/microsoft-azure.html" }
      ],
      "Intermediate": [
        { title: "Azure Administrator AZ-104", link: "categories/microsoft-azure.html" }
      ],
      "Advanced": [
        { title: "Azure Solutions Architect AZ-305", link: "categories/microsoft-azure.html" },
        { title: "Azure Security Engineer AZ-500", link: "categories/microsoft-azure.html" },
        { title: "Azure DevOps Engineer AZ-400", link: "categories/microsoft-azure.html" },
        { title: "Enterprise Cloud & Security Roadmap", link: "categories/microsoft-azure.html" }
      ]
    }

  };

  // TOGGLE CHAT
  document.getElementById("chat-icon").onclick = () => {
    const isOpen = chatbox.style.display === "flex";
    chatbox.style.display = isOpen ? "none" : "flex";

    if (!isOpen) {
      unread = 0;
      badge.style.display = "none";
    }
  };

  document.getElementById("close-chat").onclick = () => {
    chatbox.style.display = "none";
  };

  sendBtn.onclick = sendMessage;
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    handle(text);
  }

  function scrollToBottom() {
    body.scrollTop = body.scrollHeight;
  }

  function addMessage(text, sender = "bot") {
    const div = document.createElement("div");
    div.className = sender;
    div.innerText = text;
    body.appendChild(div);

    if (sender === "bot" && chatbox.style.display !== "flex") {
      unread++;
      badge.style.display = "block";
      badge.innerText = unread;
    }

    scrollToBottom();
  }

  function showTyping(callback) {
    const typing = document.createElement("div");
    typing.className = "typing";
    typing.innerText = "Typing...";
    body.appendChild(typing);
    scrollToBottom();

    setTimeout(() => {
      typing.remove();
      callback();
    }, 600);
  }

  function addOptions(options) {
    const container = document.createElement("div");

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.innerText = opt;
      btn.className = "option-btn";
      btn.onclick = () => handle(opt);
      container.appendChild(btn);
    });

    body.appendChild(container);
    scrollToBottom();
  }

  function showCourses() {
    const list = courses[state.goal]?.[state.level] || [];

    list.forEach(c => {
      const div = document.createElement("div");
      div.className = "course-card";

      div.innerHTML = `
        <div class="course-title">${c.title}</div>
        <a href="${c.link}" class="course-btn">View Course</a>
      `;

      body.appendChild(div);
    });

    addOptions(["Back", "Book Consultation", "FAQs"]);
  }

  function showFAQs() {
    addMessage("Here are important links:");

    const div = document.createElement("div");
    div.innerHTML = `
      <a href="faq.html">FAQs</a><br>
      <a href="terms.html">Terms & Conditions</a><br>
      <a href="refund-policy.html">Refund Policy</a><br>
      <a href="privacy-policy.html">Privacy Policy</a>
    `;
    body.appendChild(div);

    addMessage("Please choose an option to continue.");

    if (state.step === "goal") {
      addOptions([
        "AI/ML","Data Science","Web Development","Cloud Computing","DevOps",
        "AWS","Google Cloud","Cybersecurity","Networking","Data & Analytics",
        "Project Management","Microsoft Azure"
      ]);
    } 
    else if (state.step === "level") {
      addOptions(["Beginner", "Intermediate", "Advanced"]);
    } 
    else {
      addOptions(["Back", "Book Consultation"]);
    }
  }

  function handle(inputText) {
    addMessage(inputText, "user");

    if (inputText === "FAQs") return showFAQs();
    if (inputText === "Book Consultation") return window.location.href = "contact.html";

    if (inputText === "Back") {
      state.step = "goal";
      addMessage("Please select your area of interest:");
      addOptions([
        "AI/ML","Data Science","Web Development","Cloud Computing","DevOps",
        "AWS","Google Cloud","Cybersecurity","Networking","Data & Analytics",
        "Project Management","Microsoft Azure"
      ]);
      return;
    }

    if (state.step === "ask_name") {
      state.name = inputText;
      state.step = "goal";

      showTyping(() => {
        addMessage(`Welcome ${state.name}. Please select your area of interest:`);
        addOptions([
          "AI/ML","Data Science","Web Development","Cloud Computing","DevOps",
          "AWS","Google Cloud","Cybersecurity","Networking","Data & Analytics",
          "Project Management","Microsoft Azure","FAQs"
        ]);
      });
    }

    else if (state.step === "goal") {
      state.goal = inputText;
      state.step = "level";

      showTyping(() => {
        addMessage("Please select your experience level:");
        addOptions(["Beginner", "Intermediate", "Advanced", "FAQs"]);
      });
    }

    else if (state.step === "level") {
      state.level = inputText;
      state.step = "courses";

      showTyping(() => {
        addMessage("These courses are recommended for you:");
        showCourses();
      });
    }
  }

  addMessage("Hi! Welcome to Strikava. Please enter your name to begin.");
};