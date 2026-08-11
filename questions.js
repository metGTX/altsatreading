const QUESTIONS = [
  {
    id: 67,
    topic: "Murder Drones",
    skill: "Inference",
    difficulty: "Hard",
    passage: `After initially presenting J primarily through her rigid adherence to corporate hierarchy and frequent hostility toward N, the series gradually provides information that complicates this characterization. J continues invoking company terminology even when doing so offers little practical benefit, and her harshest responses frequently occur when circumstances threaten the stability of the group or her own sense of control. Some viewers therefore interpret her corporate mannerisms not merely as evidence of loyalty but as a means of imposing order on situations she finds difficult to confront directly, suggesting that _____`,
    question: "Which choice most logically completes the text?",
    choices: {
      A: "J's hostility toward N is primarily intended to prevent him from discovering the true purpose of their mission.",
      B: "J's continued reliance on corporate behavior may serve a psychological function beyond expressing commitment to her employer.",
      C: "J recognizes that her loyalty to corporate authority has caused most of the conflicts experienced by the group.",
      D: "J's apparent confidence proves that she experiences less uncertainty than the other Disassembly Drones."
    },
    answer: "B",
    explanations: {
      A: "Too specific. The passage does not establish that J is trying to hide the mission from N.",
      B: "Correct. The passage explicitly suggests that her corporate behavior may help her impose order when she feels threatened or uncertain.",
      C: "Unsupported. The passage never says J recognizes or admits this.",
      D: "Contradicted by the passage. Her confidence may actually mask uncertainty."
    }
  },
  {
    id: 2,
    topic: "Geometry Dash",
    skill: "Central Ideas",
    difficulty: "Medium",
    passage: `Players often describe difficult Geometry Dash levels as tests of reflexes, but repeated attempts can change the nature of the challenge. After enough practice, players may stop consciously reacting to every obstacle and instead perform long sequences from memory. This does not mean reflexes become irrelevant; rather, memorization and timing reduce how much active decision-making is required during familiar sections.`,
    question: "Which choice best states the main idea of the text?",
    choices: {
      A: "Memorizing a Geometry Dash level removes the need for reflexes entirely.",
      B: "Difficult Geometry Dash levels are primarily tests of long-term memory rather than timing.",
      C: "Practice can shift part of the challenge from active reaction toward memorized execution.",
      D: "Players who rely on memorization are less skilled than players who rely on reflexes."
    },
    answer: "C",
    explanations: {
      A: "Too extreme. The text explicitly states that reflexes remain relevant.",
      B: "Incorrect. The passage does not state that memory is more important than timing.",
      C: "Correct. This directly summarizes the main idea: practice shifts the burden from constant active reaction to memorized execution.",
      D: "Incorrect. The passage makes no value judgment comparing player skill levels."
    }
  },
  {
    id: 3,
    topic: "The Amazing Digital Circus",
    skill: "Words in Context",
    difficulty: "Medium",
    passage: `Pomni initially treats the digital circus as a place whose rules must contain some hidden escape route. Over time, however, repeated failures make her increasingly skeptical of simple solutions. Her attitude becomes less credulous, even when another character confidently claims to have discovered a way out.`,
    question: "As used in the text, “credulous” most nearly means",
    choices: {
      A: "easily convinced",
      B: "deeply amused",
      C: "physically exhausted",
      D: "openly hostile"
    },
    answer: "A",
    explanations: {
      A: "Correct. 'Credulous' means gullible or ready to believe. The text contrasts her new skepticism with her previously 'credulous' state.",
      B: "Incorrect. The text addresses belief and skepticism, not feelings of amusement.",
      C: "Incorrect. 'Credulous' describes a mindset regarding belief, not physical stamina.",
      D: "Incorrect. While she becomes skeptical, being credulous does not mean hostile; it refers to being overly willing to believe."
    }
  },
  {
    id: 6767,
    topic: "Roblox",
    skill: "Transitions",
    difficulty: "Easy",
    passage: `A Roblox developer may spend hours designing an elaborate map. _____, a visually impressive map alone does not guarantee that players will remain engaged; movement, pacing, and game mechanics also shape the experience.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: {
      A: "Similarly",
      B: "However",
      C: "For example",
      D: "Therefore"
    },
    answer: "B",
    explanations: {
      A: "Incorrect. 'Similarly' is used to show a parallel idea, whereas the second sentence introduces a contrast/limitation.",
      B: "Correct. 'However' introduces the counter-point that visual effort alone is not enough to guarantee success.",
      C: "Incorrect. The second sentence is not an example of spending hours on a map.",
      D: "Incorrect. The second sentence is not a direct result or consequence of the first."
    }
  },
  {
    id: 1,
    topic: "Geometry Dash",
    skill: "Inferences",
    difficulty: "Medium",
    passage: `Society is a 2.1/2.2 Extreme Demon mega-collaboration level hosted by Neomarbilan, verified by wPopoff on 20 June 2026. The level was created as the sequel to Escalator. _____, its gameplay is inspired by Slaughterhouse, and its design draws on the weirdcore/dreamcore aesthetic, incorporates many references to internet horror, and features a rainbow colour scheme that makes it visually distinct from other top levels.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: {
      A: "On the other hand, as its predecessor",
      B: "For this reason",
      C: "Moreover, like its predecessor",
      D: "Likewise to its predecessor"
    },
    answer: "C",
    explanations: {
      A: "Incorrect. 'On the other hand' indicates contrast, but the passage is simply building on background information about the level.",
      B: "Incorrect. The gameplay inspiration is not a direct consequence ('For this reason') of being a sequel.",
      C: "Correct. 'Moreover' properly signals an additional supporting detail about the level's lineage and design elements.",
      D: "Incorrect. 'Likewise to its predecessor' is grammatically non-standard phrasing for a transition in formal text."
    }
  },
  {
    id: 4,
    topic: "General Brainrot",
    skill: "Words in Context",
    difficulty: "Easy",
    passage: "The following text is adapted from Rusty Hatchet's 2024 poem \"The heart.\"\nSigma sigma on the wall, who's the skibidiest of them all?\nIs it Baby Gronk?\nIs it Grimace?\nIs it Skibidi Toilet?\nPerhaps it is I, who rizzed up a level 10 Gyatt, and fanum taxed her heart.\nShe is the Chick-fil-A sauce in my McDonalds.\nForever griddying in Ohio.",
    question: "As used in the text, “taxed” most nearly means",
    choices: {
      "A": "levied a mandatory financial fee upon",
      "B": "overburdened with exhausting labor",
      "C": "criticized or reprimanded severely",
      "D": "seized or taken a portion of"
    },
    answer: "D",
    explanations: {
      "A": "Incorrect. While 'taxed' in standard contexts refers to levying a financial assessment, the poem uses the slang phrase 'fanum taxed,' which means taking a piece or portion of something.",
      "B": "Incorrect. 'Taxed' can mean strained or physically exhausted, but the passage describes capturing or claiming someone's affection.",
      "C": "Incorrect. 'Taxed' can mean to challenge or scold, but in this romantic slang context, it implies taking possession.",
      "D": "Correct. In internet slang (derived from 'Fanum tax'), to 'fanum tax' something means to claim, steal, or take a slice/portion of it. In 'fanum taxed her heart,' the speaker means they took or captured her heart."
    }
  },
  {
    id: 5,
    topic: "Murder Drones",
    skill: "Inferences",
    difficulty: "Hard",
    passage: `In Murder Drones, the Solver of the Absolute (Absolute Solver) operates as an existential, eldritch program capable of reanimating deactivated worker drones and manipulating matter at a fundamental level. While Worker Drones were initially manufactured by JCJenson to execute routine resource extraction on Copper-9, the emergence of the Absolute Solver transformed select units—most notably Cyn and Doll—into vectors for widespread planetary destruction. Crucially, the program’s ability to manifest physical alterations and weaponized appendages in host units depends heavily on high-energy thermal management; without continuous cooling or the ingestion of drone warm-coolant (oil), host units suffer severe physical degradation and overheating. Consequently, while the Absolute Solver grants near-omnipotent reality-warping capabilities to its host, it paradoxically binds the host to an absolute physical dependence on the very units it targets for eradication.`,
    question: "Based on the passage, which choice best states the central paradox regarding host units infected by the Absolute Solver?",
    choices: {
      A: "Their ability to manipulate matter allows them to rebuild damaged JCJenson infrastructure, yet they prioritize planetary destruction over resource extraction.",
      B: "Their acquisition of near-omnipotent power directly creates an imperative for them to consume the specific beings they are equipped to destroy.",
      C: "Their reliance on JCJenson's original programming limits their ultimate power, despite their capacity to reanimate deactivated units.",
      D: "Their thermal management systems allow them to generate unlimited energy, even though their physical structures suffer rapid degradation."
    },
    answer: "B",
    explanations: {
      A: "Incorrect. The passage mentions matter manipulation and planetary destruction, but it does not claim they rebuild JCJenson infrastructure.",
      B: "Correct. The text explicitly highlights this paradox in the final sentence: despite their godlike powers, hosts must consume the oil of worker drones (the units they destroy) to prevent overheating.",
      C: "Incorrect. The text does not claim original JCJenson programming limits the Solver's power.",
      D: "Incorrect. The passage states that high energy causes overheating and degradation without oil, not that thermal management generates unlimited energy."
    }
  },
  {
    id: 6,
    topic: "Geometry Dash",
    skill: "Words in Context",
    difficulty: "Hard",
    passage: `When attempting to earn a Creator Point in Geometry Dash, a builder must move beyond standard block placement and cultivate a distinct visual identity. While static structures can establish a layout's rhythm, top-tier level design relies on dynamic triggers to breathe life into the environment. Master creators carefully configure move, rotate, and pulse triggers so that background elements, color palettes, and obstacles continuously react to the audio track. Without this layer of perpetual motion and visual feedback, even the most intricate layout risks feeling static and monotonous to the player.`,
    question: "As used in the passage, the word 'dynamic' most nearly means",
    choices: {
      A: "highly competitive or ambitious.",
      B: "constantly changing or active.",
      C: "difficult to navigate or execute.",
      D: "visually bright or vibrant."
    },
    answer: "B",
    explanations: {
      A: "Incorrect. Although creator point levels are competitive, 'dynamic' refers to movement and reactiveness, not creator ambition.",
      B: "Correct. The passage contrasts 'dynamic triggers' with 'static structures' and describes 'perpetual motion' and elements that 'continuously react,' meaning active and constantly changing.",
      C: "Incorrect. 'Dynamic' here describes environmental visual movement, not gameplay difficulty or player skill requirements.",
      D: "Incorrect. While dynamic triggers change color palettes, the word 'dynamic' itself refers to continuous movement and change rather than simple visual brightness."
    }
  }
];
