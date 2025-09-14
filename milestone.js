document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // Milestone data
  const milestones = {
    "1968": {
      title: "1968: Intel Founded",
      subtitle: "The beginning of a technology revolution.",
      overview: "Intel Corporation was founded on July 18, 1968, in Mountain View, California, right in the heart of what would later be known as Silicon Valley. The company was established by Robert Noyce and Gordon Moore, both of whom had previously worked at Fairchild Semiconductor, alongside Andy Grove, the first hired employee who later became Intel’s legendary CEO.",
      actions: [
        "Received $2.5 million in venture capital from Arthur Rock, a record startup investment at the time.",
        "Originally named NM Electronics, later changed to Intel (short for Integrated Electronics).",
        "Released the Intel 3101, the world’s first commercial memory chip in 1969.",
        "Introduced the world’s first DRAM (dynamic RAM) in 1970, revolutionizing computer memory.",
        "Laid the groundwork for the Intel 4004 microprocessor, released in 1971."
      ],
      impact: "Intel’s founding marked the spark of Silicon Valley’s rise and the digital age. By combining visionary leadership, groundbreaking semiconductor research, and bold business strategies, Intel changed the course of computing forever. Its early innovations in memory and microprocessors paved the way for personal computers, cloud computing, mobile devices, and artificial intelligence — shaping the modern digital world."
    },

    "1971": {
      title: "1971: First Microprocessor",
      subtitle: "The Intel 4004 changed the world.",
      overview: "The year 1971 marked one of the most important milestones in Intel’s history and in the history of technology: the release of the Intel 4004, the world’s first commercial microprocessor. This tiny piece of silicon changed the future of computing forever.",
      actions: [
        "Developed under contract with Japanese calculator company Busicom.",
        "Led by Federico Faggin, Intel’s team put all CPU functions on a single chip.",
        "The 4004 was a 4-bit processor capable of 60,000 operations per second.",
        "Shifted Intel’s focus from memory chips to microprocessors.",
        "Paved the way for future processors: 8008 (1972), 8080 (1974), and 8086 (1978)."
      ],
      impact: "The Intel 4004 revolutionized computing by shrinking the power of a computer into one chip. It sparked the microprocessor revolution, enabled the personal computer era, and cemented Intel as a pioneer in modern computing. This achievement made computing more affordable and accessible, laying the foundation for today’s digital world."
    },

    "1978": {
      title: "1978: Intel 8086 Processor",
      subtitle: "The architecture that powered the PC revolution.",
      overview: "In 1978, Intel introduced the 8086 microprocessor, a 16-bit chip that became the foundation of the x86 architecture. This design would go on to dominate personal computing for decades.",
      actions: [
        "Released as Intel’s first 16-bit microprocessor, delivering a major leap in performance over earlier chips.",
        "Formed the basis of the IBM PC in 1981, which used Intel’s x86 design as its standard.",
        "Enabled compatibility across generations of processors, ensuring longevity and scalability of the architecture.",
        "Sparked the growth of software ecosystems designed specifically for the x86 platform.",
        "Became the most enduring processor architecture, still influencing modern CPUs today."
      ],
      impact: "The 8086 established Intel’s dominance in the microprocessor market and launched the x86 architecture, which remains the foundation of most personal computers to this day. It marked the beginning of Intel’s partnership with IBM and positioned Intel as the driving force of the PC revolution."
    },

    "1980s": {
      title: "1980s–2000s: PC Revolution",
      subtitle: "Intel inside the digital era.",
      overview: "During the 1980s through the 2000s, Intel became the driving force behind the personal computer (PC) revolution, solidifying its role as one of the most influential companies in technology history.",
      actions: [
        "Released the 8086 processor in 1978, forming the basis of the IBM PC in 1981.",
        "Introduced successive processors: 80286, 80386, and 80486, advancing speed and multitasking.",
        "Launched the Pentium processor in 1993, marketed directly to consumers with the iconic 'Intel Inside' campaign.",
        "Powered computers from IBM, Dell, HP, and Compaq, making PCs mainstream worldwide.",
        "Expanded into servers and enterprise markets, providing infrastructure for the internet and e-commerce."
      ],
      impact: "This era established Intel as a household name and the backbone of modern computing. Its processors fueled the spread of PCs in homes, schools, and businesses, enabled internet access for millions, and laid the foundation for the digital economy and early cloud computing."
    },

    "2016": {
      title: "2016: Conflict-Free Processors",
      subtitle: "Sourcing responsibly for a better future.",
      overview: "By 2016, Intel reached a historic milestone when it announced that all of its microprocessors were officially conflict-free, becoming the first company in the world to achieve this.",
      actions: [
        "Committed years earlier to eliminating conflict minerals (tin, tungsten, tantalum, and gold) from its supply chain.",
        "Partnered with NGOs, governments, and industry groups to create sourcing standards.",
        "Conducted independent audits of thousands of global suppliers.",
        "Shipped its first conflict-free prototype in 2013.",
        "Achieved full conflict-free production across all processors by 2016."
      ],
      impact: "Intel’s conflict-free milestone was not just a supply chain victory, but a humanitarian achievement. It proved that a global tech leader could drive ethical change in sourcing, inspiring other companies to follow suit. This expanded Intel’s legacy beyond performance and innovation into social impact and corporate responsibility, defining a new era of accountability in technology."
    },

    "2022": {
      title: "2022: Net-Zero Pledge",
      subtitle: "Commitment to climate action.",
      overview: "In 2022, Intel announced an ambitious pledge to achieve net-zero greenhouse gas emissions for its global operations (Scope 1 and 2) by 2040, reinforcing its role as a sustainability leader in the tech industry.",
      actions: [
        "Committed to 100% renewable electricity worldwide by 2030.",
        "Redesigned factories for higher efficiency with advanced cooling and power-saving technologies.",
        "Invested in reducing emissions from chemical and industrial processes in chip manufacturing.",
        "Encouraged suppliers and partners to adopt cleaner energy and sustainable practices.",
        "Ensured accountability through transparent reporting and independent third-party reviews."
      ],
      impact: "The 2022 pledge positioned Intel as a catalyst for global environmental responsibility. By aligning its technological ambitions with the fight against climate change, Intel showed that innovation and sustainability can progress together. This pledge aims not only to decarbonize Intel’s operations but to ripple across the global supply chain, shaping the digital revolution into a greener and more accountable future."
    },

    "2023": {
      title: "2023: Measurable Progress",
      subtitle: "Turning pledges into tangible results.",
      overview: "In 2023, Intel began to demonstrate measurable progress toward the sustainability pledges it had made in 2022, showing stakeholders that its long-term roadmap was on track.",
      actions: [
        "Sourced over 90% renewable electricity globally, moving closer to the 2030 goal of 100%.",
        "Improved energy efficiency across manufacturing, achieving record-low carbon intensity per chip at several factories.",
        "Restored billions of gallons of water through watershed projects, achieving net-positive water use in the U.S.",
        "Advanced green chemistry and process innovations to cut hard-to-abate emissions at the source.",
        "Expanded collaboration with supply chain partners to enforce stricter sustainability standards."
      ],
      impact: "By 2023, Intel’s measurable results proved that its net-zero journey was actionable, not just aspirational. These efforts reinforced Intel’s leadership in sustainability, aligning technological innovation with responsible resource management and building momentum toward its 2030 and 2040 goals."
    },

    "2025": {
      title: "2025: 99% Renewable Electricity",
      subtitle: "A near-complete global transition to clean power.",
      overview: "By 2025, Intel announced it had achieved 99% renewable electricity usage across its global operations, marking a critical step toward its 2030 goal of 100%.",
      actions: [
        "Reached 100% renewable electricity earlier in the U.S., Europe, Israel, and Malaysia.",
        "Overcame challenges in less developed markets by building partnerships and investing in local renewable infrastructure.",
        "Used renewable energy credits, long-term power purchase agreements, and direct funding of wind and solar projects.",
        "Reduced absolute greenhouse gas emissions while increasing efficiency in manufacturing operations.",
        "Demonstrated that large, complex multinational operations can decarbonize rapidly with accountability."
      ],
      impact: "Reaching 99% renewable electricity in 2025 proved that Intel’s long-term climate strategy was both serious and achievable. It positioned Intel as an industry leader in sustainable manufacturing, encouraged competitors to accelerate their own clean energy adoption, and built momentum toward its 2030 zero waste and 2040 net-zero goals."
    },

    "2030": {
      title: "2030: Zero Waste Goal",
      subtitle: "A bold move toward circular manufacturing.",
      overview: "By 2030, Intel aims to achieve a zero waste to landfill goal for its global operations, ensuring that nearly all manufacturing waste is reused, recycled, or recovered with virtually nothing sent to landfills.",
      actions: [
        "Invested in advanced recycling technologies and waste recovery systems.",
        "Redesigned packaging to use sustainable materials and reduce plastics.",
        "Created take-back and recycling systems for customers and partners.",
        "Collaborated with governments, industry groups, and communities to strengthen circular economy infrastructure.",
        "Aligned waste reduction goals with renewable energy and net-zero commitments to form a holistic sustainability strategy."
      ],
      impact: "Intel’s 2030 zero waste pledge goes beyond traditional waste management — it represents a transition toward a circular economy where resources are continuously reused rather than discarded. Achieving this milestone would make Intel one of the world’s most sustainable semiconductor manufacturers and prove that innovation and responsibility can advance together."
    },

    "2040": {
      title: "2040: Net-Zero Operations",
      subtitle: "Achieving global operational net-zero.",
      overview: "By 2040, Intel has committed to reaching net-zero greenhouse gas emissions across its global operations (Scope 1 and Scope 2), eliminating or offsetting emissions from its factories, labs, offices, and purchased energy.",
      actions: [
        "Operate entirely on 100% renewable electricity worldwide, building on the 2025 (99%) and 2030 (100%) milestones.",
        "Redesign factories to be the most energy- and water-efficient in the industry, with advanced cooling, waste heat recovery, and sustainable process technologies.",
        "Develop and deploy green chemistry solutions to address hard-to-abate emissions in semiconductor fabrication.",
        "Collaborate with industry consortia to accelerate decarbonization across the semiconductor sector.",
        "Provide transparent, annual sustainability reporting to ensure measurable and verifiable progress."
      ],
      impact: "Intel’s 2040 net-zero operations goal is the centerpiece of its long-term climate strategy. It symbolizes a transformation in how the company balances growth with responsibility, proving that cutting-edge technology and environmental stewardship can go hand in hand. Achieving this milestone positions Intel as a global leader in sustainable innovation, paving the way for a low-carbon digital future."
    },

    "2050": {
      title: "2050: Supply Chain Net-Zero",
      subtitle: "Sustainability across Intel’s global value chain.",
      overview: "By 2050, Intel has pledged to achieve net-zero greenhouse gas emissions across its entire value chain (Scope 1, 2, and 3), extending responsibility beyond its operations to suppliers, partners, customers, and product lifecycles.",
      actions: [
        "Work with suppliers worldwide to enforce rigorous sustainability standards and incentivize renewable energy adoption.",
        "Reduce Scope 3 emissions by tackling raw material sourcing, chemical emissions, logistics, and circular economy practices.",
        "Redesign chips and packaging to maximize energy efficiency during use and simplify recycling at end-of-life.",
        "Fund research and invest in global renewable infrastructure to support large-scale decarbonization.",
        "Partner with governments, NGOs, and peers to accelerate climate solutions across the tech sector."
      ],
      impact: "Intel’s 2050 net-zero value chain goal is the culmination of over 80 years of innovation and responsibility since its founding in 1968. By addressing Scope 3 emissions — the hardest and largest share of its footprint — Intel aims to reshape the global electronics supply chain, reduce emissions across the full product lifecycle, and spark a green technology revolution. This milestone symbolizes Intel’s vision to leave a lasting positive impact on both the digital world and the planet."
    }
  };

  // Load milestone data
  if (milestones[id]) {
    const m = milestones[id];
    document.getElementById("milestone-title").textContent = m.title;
    document.getElementById("milestone-subtitle").textContent = m.subtitle;
    document.getElementById("milestone-overview").textContent = m.overview;

    const actionsList = document.getElementById("milestone-actions");
    actionsList.innerHTML = "";
    m.actions.forEach(action => {
      const li = document.createElement("li");
      li.textContent = action;
      actionsList.appendChild(li);
    });

    document.getElementById("milestone-impact").textContent = m.impact;
  } else {
    document.getElementById("milestone-title").textContent = "Milestone Not Found";
    document.getElementById("milestone-overview").textContent = "Sorry, we couldn’t find details for this milestone.";
  }
});

