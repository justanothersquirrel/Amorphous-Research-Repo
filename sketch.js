let zIndexCounter = 100;

let dustParticles = [];
let numParticles = 150; // Adjust for more or less "dust"

let windowStack = 0; // Global counter for stacking windows

//DATABASE OF RESEARCH

let researchData = {
  /*----------------------------------------------------First Page "Amorphous Research Content"
                        Included pages:
                            How to Notice Dust? ∑∑∑∑∑
                            Metric Culture Dust ∑∑∑∑∑
                            Scripting ˚˚˚˚˚˚˚˚˚˚
                            From A Thousand Plateaus ¬¬¬¬¬¬¬
                            Fishing for Words ¬¬¬¬¬¬¬
                            Mapping the Development ΩΩΩΩΩΩΩ
                            تحوير السؤال Modulating the Question ؟؟؟؟؟؟؟؟ 
                            sender and receiver reflection ∞∞∞∞∞∞∞∞∞ 
                            Semi-Mutating the research •••••••••••
  */
  start: {
    title: "Amorphous Research || Dust",
    content: `
The current situation of this research-based art project includes different approaches to the matter of, but not limited to, the notion ‘dust’. The research on dust will be: questioned, explained, elaborated, interacted, exposed, experimented, directed, investigated, refined, rinsed, purposed, interfered, disordered, ordered, swept, collected, archived, documented, broken, scanned, digitalised, computed, decoded, interfered, meta-morphed, excavated, encountered, trained, interacted… and what is between.

∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑
∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑
∑∑∑∑∑∑∑∑∑∑∑∑∑∑<span class="research-link" onclick="spawn('How to notice dust?')">How to notice dust?</span>∑∑∑∑∑∑∑∑∑
∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑
∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑
∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑
∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑
∑∑∑∑∑∑∑∑∑∑∑∑∑∑<span class="text-blue">øøøø</span> <span class="research-link" onclick="spawn('metric culture dust')">metric culture dust</span><span class="text-blue"> øøøø</span>∑∑∑
˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚
˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚
˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚<span class="research-link" onclick="spawn('Scripting')">˚˚˚˚scripting˚˚˚˚</span>˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚
˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚
˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚˚
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
¬¬¬¬¬¬¬¬¬ <span class="research-link" onclick="spawn('From A Thousand Plateaus')">From A Thousand Plateaus</span> ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
¬¬¬¬¬¬¬¬¬¬¬¬¬¬ <span class="research-link" onclick="spawn('Fishing for words')">Fishing for words</span> ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
ΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩ
ΩΩΩΩΩΩΩΩΩΩΩΩΩΩ <span class="research-link" onclick="spawn('Mapping the Development')">Mapping the Development</span>ΩΩΩΩΩΩ
ΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩ
ΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩ
؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟
؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟
؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟
؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟
؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟<span class="research-link" onclick="spawn('>Modulating the Question<')"> >Modulating the Question< </span> >تحوير السؤال< 
؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
∞∞∞∞∞ <span class="research-link" onclick="spawn('sender and receiver reflection')">a study on sender and receiver</span>∞∞∞∞∞∞∞∞∞∞∞
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
•••••••••••••••<span class="research-link" onclick="spawn('Semi-Mutating the research')">Semi-Mutating the research</span>•••••••••••••••••••••••••
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

`,
    type: "text",
    textColor: "#000000",
  },

  /*----------------------------------------------------How to Notice Dust? Content
                        Included pages:
                                Folded Cup Diagram
                                      Image of Diagram
                                      ________________,________________
                                      The Stack by Benjamin Bratton.
                                      Collapsable cup and a cover.
                                      Are We in the Anthropocene Yet?
                                      The mirror test just broke Googles Project Genie.
                                Layers/Strata
                                A List of Dust
                                  a collection of words-dust
                                  a collection of images-dust
                                  a collection of sounds-dust
                                Am I available or ignorant?
  */
  "How to notice dust?": {
    title: "How to notice dust?",
    content: `In order to notice dust I created a <span class="research-link" onclick="spawn('Folded Cup Diagram')">Folded Cup Diagram</span> to assist my research pscychology. 

                               —————————
                                  —————————
<span class="research-link" onclick="spawn('layers/strata')">layers/strata</span> of existing dust————————-
creating <span class="research-link" onclick="spawn('a list of dust')">[a list of dust]</span> ———————
Intertwining types into functions——————————
                                  —————————
                              —————————

How do we notice and understand things. My practice always looked at appreciating the unseen or unnoticed elements. Like any other artist we are destined to appreciate and share that appreciation. We are destined to connect “things/matter” and fail and experiment. 

I have decided to choose dust as a matter to experiment, research, and observe. In my current situation and to what knowledge I have known since I started this course I believe that through computational integration and theory I am able to make dust visible and hearable and touchable.

Therefore I am able to critically or artistically find answers to a simple question how can we appreciate and notice. 

---<span class="research-link" onclick="spawn('Am I available or ignorant?')">[Am I available or ignorant?]</span>

`,
    type: "text",
    textColor: "#000000",
  },
  "Folded Cup Diagram": {
    title: "Folded Cup Diagram",
    content: `
    <img src="assets/Amorphous-research-diagram-Sketch.jpg" class="img-center" ><img src="assets/Amorphous-research-diagram-01.jpg" class="img-center" >
The Folded Cup Diagram is the first representation on how translating the notion of dust is going to pass through different layers of knoweldge, how both sides acknwoeldge each other, the sender and the reciever. Deciding to research dust and its vast layers of information through a mirror diagram. This diagram consists of two perspectives reflecting on each others existence as matter.

Experimenting with the idea of research to find different ways of approaching the matter (dust) in existing and non-existing dimensions.
    ——- <span class="research-link" onclick="spawn('The Stack by Benjamin Bratton.')">The Stack by Benjamin Bratton.</span> 
    ——- <a href="https://www.thingiverse.com/thing:6757756" target="_blank" class="research-link">Collapsable cup and a cover.</a>
    ——-<span class="research-link" onclick="spawn('Are We in the Anthropocene Yet?')">Are We in the Anthropocene Yet?.</span>
    ——-<a href="https://www.instagram.com/reel/DUixJ_3Efyc/" target="_blank" class="research-link">The mirror test just broke Googles Project Genie.</a>
















                                                            <span class="research-link" onclick="spawn('________________,________________')">[________________,________________]</span>
      `,
    type: "text",
    textColor: "#000000",
  },
  "layers/strata": {
    title: "layers/strata",
    type: "link",
    content: "https://humansandnature.org/art-in-the-anthropocene-2/",
  },
  "a list of dust": {
    title: "a list of dust",
    content: `the list is <span class="research-link" onclick="spawn('a collection of words-dust')">a collection of words-dust</span>
the list is <span class="research-link" onclick="spawn('a collection of images-dust')">a collection of images-dust</span>
the list is <span class="research-link" onclick="spawn('a collection of sounds-dust')">a collection of sounds-dust</span>
the list will always be updated
`,
    type: "text",
    textColor: "#000000",
  },
  "a collection of words-dust": {
    title: "a collection of words-dust",
    content: `
    Dust storm 
    cosmic dust 
    moon dust
    plant dust
    human dust 
    domestic dust 
    dust bunnies
    dust mites
    animal dust
    textile dust
    soil dust 
    nuclear dust (karyorhexis)
    ruins dust 
    fugitive dust
    road dust (road debris)
    dust explosion 
    coal dust
    mineral dust
    saw dust (workshop dust)`,
    type: "text", //"image" - "sound"
    textColor: "#002aff",
  },
  "a collection of images-dust": {
    title: "a collection of images-dust",
    content: `<img src="assets/DustCollection/dustCollection_9363.jpg" class="img-center">
    <img src="assets/DustCollection/dustCollection_9361.jpg" class="img-center">
    <img src="assets/DustCollection/dustCollection_9360.jpg" class="img-center">
    <img src="assets/DustCollection/dustCollection_9358.jpg" class="img-center">
    <img src="assets/DustCollection/dustCollection_9357.jpg" class="img-center">
    <img src="assets/DustCollection/dustCollection_9356.jpg" class="img-center">
    <img src="assets/DustCollection/dustCollection_9354.jpg" class="img-center">
    `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "a collection of sounds-dust": {
    title: "a collection of sounds-dust",
    content: `not ready yet! But I think I found a way to transform the shape of the images of dust into waves, then maybe becomes frequencies. Just thought Ill share this idea for now.`,
    type: "text",
    textColor: "#ff2a00",
  },
  "The Stack by Benjamin Bratton.": {
    title: "The Stack by Benjamin Bratton.",
    type: "video",
    content:
      "https://www.youtube.com/embed/cUhhHw_xS4w?si=VJFnrcvyFU_OXAQs&amp;start=1061",
  },
  "Collapsable cup and a cover.": {
    title: "Collapsable cup and a cover.",
    type: "link",
    content: "https://www.thingiverse.com/thing:6757756",
  },
  "Are We in the Anthropocene Yet?": {
    title: "Are We in the Anthropocene Yet?",
    type: "link",
    content: "https://nautil.us/are-we-in-the-anthropocene-yet-235952",
  },
  "________________,________________": {
    title: "________________,________________",
    content: `
      A comma (,) and a full-stop (.) which is which? Comma could be dust yet shadows are comma’ed in-between everything. This might be confusing but I understand it, that’s what is important.

      `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "Am I available or ignorant?": {
    title: "Am I available or ignorant?",
    content: `
This question might be very general but I will start with researching two topics that will lead me to the unknown.

I will enjoy this process of researching and accept any changes and detour it might present in this journey.

…………………………………………………………………………

    Noticing ————————————------------------———— Appreciating 
          |________________DUST________________________|
          |           
         /\\                                      
        /..\\
 Forgotten  Shadowed —-{and other things}—-
  Memory     interrupted
      `,
    type: "text",
    textColor: "#ff8800",
  },

  /*----------------------------------------------------Metric Culture Dust Content
                        Included pages:
                                scimming Measuring the User Experience book
                                Function = input —-{VERBS}—— output
  */
  "metric culture dust": {
    title: "Building a metric culture of dust",
    content: `<span class="research-link" onclick="spawn('scimming Measuring the User Experience book')">scimming Measuring the User Experience book</span>

All users must be observable directly or indirectly 
All users must be quantifiable
Effectiveness = able to complete a task 
Efficiency  = the amount of effort required to complete a task 
Satisfaction = the degree to which the user acknowledged the experience while performing the task 

Measuring emotional engagement 
>facial recognition 
>measuring arousal through skin conductive 

_____________________________________________________________________

Dust ____________ ≈
                            Value 
                            Hide information 
                            Encrypte
                            Cover traces 				Dust is changing
                            Blurring borders 	
                            Revealing hidden stories about system use
                            Dust App UX

Technical terms to user_________ø 
                                        Toolkit 
                                        User experience UX 
                                        Formulas 
                                        Utilise subject matter 
                                        Evaluate - Reflect - measure 
                                        Deciding whether to collect measurements
                                        Interface 
_____________________________________________________________________
<span class="research-link" onclick="spawn(
'Function input VERBS output')">Function = input —-{VERBS}—— output</span>
      `,
    type: "text",
    textColor: "#000000",
  },
  "scimming Measuring the User Experience book": {
    title: "scimming Measuring the User Experience book",
    type: "link",
    content:
      "https://assets.super.so/9bd43d2f-3d87-4399-bcf0-c72619825ed8/files/2cda4c82-c534-42f0-8895-9ed845a1a027.pdf",
  },
  "Function input VERBS output": {
    title: "Function input VERBS output",
    content: `This idea became visible while thinking of measuring as a means of analysing and understanding the subject matter, dust.

To measure is a verb, and in computational thinking, there is input (beginning a story or an idea), followed by the measurement taken to digest, experiment with, or examine the idea, and then the output (finalising the idea, finding the answer, or revealing the other side of the story).

In a computer, the logic is: <span class="research-link" onclick="spawn('input – measure (verb) – output.')">input – measure (verb) – output.</span>

When I remove 'measure' and replace it with other verbs—for example: drive, experiment, investigate, explore, poke, collect, observe, eat, walk—the research shifts. At that point, in Amorphous Research, finding the answer or shaping matter for an output (or outcome) becomes a way to observe subject matter through objects, which then initiated the idea of "in-between-ness".<span class="research-link" onclick="spawn('From A Thousand Plateaus')">#A Thousand Plateaus</span>

<img src="assets/Gemini_Generated_Image_fckrb9fckrb9fckr.jpg" class="img-center">
This image was generated by Gemini as an outcome of the text above. I do not fully agree with its logic, as the output is always moving and changing. However, it interests me how the machine calculated this image based on the previous text inputs regarding the grammar and spelling corrections of my research.

`,
    type: "text",
    textColor: "#000000",
  },
"input – measure (verb) – output.":{
    title: "input – measure (verb) – output.",
    content: `https://www.mathsisfun.com/sets/injective-surjective-bijective.html`,
    type: "link",
    textColor: "#000000",
  },

  /*----------------------------------------------------Scripting Content
                        Included pages:
                                We are both limited
                                Interrupted by writing a proposal
                                    I borrowed Foucaults Discipline and Punish
                                    Forensic Noticing
                                From-To
                                Digital Narrative
                                Some diary notes
                                wizards brain
                                    The artwork as a living system: Christa Sommelier & Laurent Mignonneau ***
                                    The basics of Quantum Computing **
                                    Pierre Huyphes Liminals LAS Art  Foundation ****
                                    The danger of the big research reveal Emma Bolton ** I think its about UX and Dust 
                                    Eve Agree Laramee ****
                                    A book called beyond new media art 
                                    A website of digital art archive 
                                    ADA
                                    The Chiasm Ponty **** 
                                    Ambient Information System **
                                
  */
  Scripting: {
    title: "Scripting______________________________dust",
    content: `The plan for approaching the notion of dust will be observed in gravitational perspective from the top to the bottom, as if we are being scanned from an alien satellite_______
   
                      What is scaling? Why do we measure?
                      Microcosms and the invisible and visible?
                      Finding species and leaving them alone 

                      <span class="research-link" onclick="spawn('We are both limited')">We are both limited</span>

                      <span class="research-link" onclick="spawn('Interruption')">Interruption</span>
                      
                      <span class="research-link" onclick="spawn('from-to')">from-to</span> 

                      Contracting a full feeling of proximity 
    ————————— ————————— — — — -  -   -  -   -   -   -      -      -         
                      Exceeding limitations between screen surface and the user (interactor)              
                      Introducing dust as a medium - accessible function 
                      <span class="research-link" onclick="spawn('Digital Narratives')">Digital Narratives</span>
    ————————— ————————— — — — -  -   -  -   -   -   -      -      -       
    <p><del><small> How to notice and appreciate? I will start this research with learning and experimenting with <sub>microcosm<sub> and <sup>macrocosm<sup><p> <small><del>through the notion of dust
    <p>
    -  -  -   — - - - — —  — —
    -  -  -   - -  <span class="research-link" onclick="spawn('Some diary notes')">Some diary notes</span></span>
    -  -  -   — - - - — —  — — 
<span class="research-link" onclick="spawn('wizards brain')">                        }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}


                        ||||
                        |||||
                        ||||||
                        |||||||
                        ||||||||
                        |||||||||
                        </span></span>



    `,
    type: "text",
    textColor: "#000000",
  },
  "We are both limited": {
    title: "We are both limited",
    content: `—————————————————-—————————————————-—————
It is infinite and boundless but my brain cant comprehend therefore I bound to what knowledge and information it is available to me and I could remember. This is me a being with limits like any other matter with limits. We are both limited towards oneself and towards each other.`,
    type: "text",
    hasScribble: true,
    textColor: "#ff0000",
  },
  Interruption: {
    title: "Interruption",
    content: `Where does noticing and appreciating stem from, and how does it connect different forms of matter (physical and mental)? I intend to research the logic of noticing and appreciating the world around us by experimenting with dust. While sitting in the university cafe awaiting a seminar, <span class="research-link" onclick="spawn('I borrowed Foucaults Discipline and Punish')">I borrowed Foucaults Discipline and Punish</span>, believing his theories might bring me closer to understanding the "discipline" of matter.
    
Dust is a vast, endless subject; to interact with it meaningfully, I must deconstruct it into smaller layers. <span class="research-link" onclick="spawn('forensic noticing')"> I am considering forensic noticing and investigative aesthetics as primary methods to initiate this interaction.</span> By integrating computational techniques, I aim to measure the strata and layers of dust.

My initial approach will be to engage with dust without prematurely categorising or fractionating its meaning. This is where artistic investigation becomes essential—allowing a "queer" or "weird" coexistence with the subject. I do not aim for total clarity, nor do I expect a definitive understanding of the experiment’s outcome. It remains an abstract journey.
`,
    type: "text",
    textColor: "#000000",
  },
  "I borrowed Foucaults Discipline and Punish": {
    title: "I borrowed Foucaults Discipline and Punish",
    content: `Dust becomes an investigative method, {the physical residue of dust uncovers strategic relations, Micro, Macro, Past}|||||||||||||||||||||||||||||||||||||||||||||<img src="assets/Foucault_Michel_Discipline_and_Punish_The_Birth_of_the_Prison_Page26-27.jpg" lass="img-center">Michel Foucault, Discipline and Punish (1977), p. 26.
    `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "forensic noticing": {
    title: "forensic noticing",
    content:
      "https://www.youtube.com/embed/4UFhP-2k-y8?si=hKWzjmFlLOh1nWQY&amp;start=1713",
    type: "video",
    textColor: "#000000",
  },
  "from-to": {
    title: "from-to",
    type: "ticker",
    content: `
    <span class="ticker-phrase">from paper to screen</span>
    <span class="ticker-phrase">from screen to screen</span>
    <span class="ticker-phrase">from screen to paper</span>
    <span class="ticker-phrase">from paper to paper</span>
    <span class="ticker-phrase">from sender to receiver</span>
    <span class="ticker-phrase">from reciever to reciever</span>
    <span class="ticker-phrase">from reciever to screen</span>
    <span class="ticker-phrase">from sender to screen</span>
    <span class="ticker-phrase">from screen to object</span> 
  `,
  },
  "Digital Narratives": {
    title: "Digital Narratives",
    content: `<img src="assets/Digital Narratives and Witnessing  The Ethics of Engaging with Places at a Distance.jpg" lass="img-center"> Nishat Awan, 'Digital Narratives and Witnessing', GeoHumanities (2016). page 312`,
    type: "text",
    textColor: "#000000",
  },
  "Some diary notes": {
    title: "Some diary notes",
    content: `I went into a rabbit hole with researching some topics that probably will take me no where. But this spiral research take some in conjunctions within sculpture and rescaling again, where I had this idea of dust being rescaled, into sculpture. 
—————{terms that I stumbled on with todays Alice in library land is biotechnology art which is another masking on the magical spectacle emerge of art and science, maybe I'm finding it a bit cliche at this point but what I read was books exhibitions and topics between 1995 - 2010 maybe. 
————————-{I'm Still trying to determine what I need to do…it is a research!! I should remember that Im at uni which means I am chained in time and rules. 
Freedom is only available in between milliseconds of the joy I get from finding and observing new technological terms that intertwine with arts.

Colours does not matter, the information’s ecology is free, it is all one/non terms, titles, names. This is how my research documentation is going to exist in any form of knowledge.
    `,
    type: "text", //"image" - "sound"
    textColor: "#bababa",
  },
  "wizards brain": {
    title: "----_______--wizards brain____---__________",
    content: `
    Information and terms from todays research started with trying to figure out more about Pierre Huyghe its about time which then led me to his current exhibition at LAS Art Foundation Liminal (in-between space time) but during the reading about the art foundation I stumbled on Quantum Computing just out of curiosity I began looking…it is like a wizards hat flipped upside down with the wizards brain still stuck on it. The wizard cant decide whether things are right or wrong so the wizard makes all decisions possible in the fastest way. 
———————————
    Then the spiral research took me to biotechnology then I typed art next to it. Then went on art research part of the second floor which is a room with less books and separated with walls but it feels cool to be inside of it.
∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
    Here is the info I skimmed in this quantum room, with ranking out of ***** in relation to my research:
      <span class="research-link" onclick="spawn('Pierre Huyphes Liminals LAS Art  Foundation ****')">Pierre Huyphes Liminals LAS Art  Foundation ****</span>
      <span class="research-link" onclick="spawn('Eve Agree Laramee ****')">Eve Agree Laramee ****</span>
      <span class="research-link" onclick="spawn('The Chiasm Ponty ****')">The Chiasm Ponty ****</span>
      <span class="research-link" onclick="spawn('The artwork as a living system: Christa Sommelier & Laurent Mignonneau ***')">The artwork as a living system: Christa Sommelier & Laurent Mignonneau ***</span>
      <a href="https://uxdesign.cc/the-danger-of-the-big-research-reveal-a6d31ffdb65c" target="_blank" class="research-link">The danger of the big research reveal Emma Bolton ∂∂∂∂ I think its about UX and Dust ***</a>
      <span class="research-link" onclick="spawn('ADA ***')">ADA ***</span> 
      <a href="https://www.ibm.com/think/topics/quantum-computing" target="_blank" class="research-link">The basics of Quantum Computing **</a>
      <a href="https://mascontext.com/contributors/ambient-information-systems" target="_blank" class="research-link">Ambient Information System **</a>
      <span class="research-link" onclick="spawn('A book called beyond new media art')">A book called beyond new media art</span>
    `,
    type: "text",
    textColor: "#ff00e1",
  },
  "Pierre Huyphes Liminals LAS Art  Foundation ****": {
    title: "Pierre Huyphes Liminals LAS Art  Foundation ****",
    content: `https://www.las-art.foundation/programme/pierre-huyghe`,
    type: "link",
    textColor: "#000000",
  },
  "Eve Agree Laramee ****": {
    title: "Eve Agree Laramee ****",
    content: `https://listart.mit.edu/exhibitions/eve-andree-laramee-permutational-unfolding`,
    type: "link", //"image" - "sound"
    textColor: "#000000",
  },
  "The Chiasm Ponty ****": {
    title: "The Chiasm Ponty ****",
    content: `https://doubleoperative.com/wp-content/uploads/2009/12/merleau-ponty-the-intertwining.pdf`,
    type: "link", //"image" - "sound"
    textColor: "#000000",
  },
  "The artwork as a living system: Christa Sommelier & Laurent Mignonneau ***":
    {
      title:
        "The artwork as a living system: Christa Sommelier & Laurent Mignonneau ***",
      content: `https://www.youtube.com/embed/x-2QTnF4B_U?si=e-88uD_rJQijW6sa&amp;start=342" title=`,
      type: "video", //"image" - "sound"
      textColor: "#000000",
    },
  "ADA ***": {
    title: "ADA ***",
    content: `https://www.archive-digitalart.eu/database/general/work/audio-dust.html`,
    type: "link", //"image" - "sound"
    textColor: "#000000",
  },
  "A book called beyond new media art": {
    title: "A book called beyond new media art",
    content: `https://www.linkartcenter.eu/public/editions/Domenico_Quaranta_Beyond_New_Media_Art_Link_Editions_ebook_2013.pdf`,
    type: "link", //"image" - "sound"
    textColor: "#000000",
  },

  /*----------------------------------------------------From A Thousand Plateaus Content
                        Included pages:
                                Highlighted text from A thousand Plateaus
                                A paper explaining french theorists.
                                Two Types of Assemblages.
                                A Few Thoughts on Kleists Style.
  */
  "From A Thousand Plateaus": {
    title: "From A Thousand Plateaus",
    content: `-{<span class="research-link" onclick="spawn('Highlighted text from A thousand Plateaus')">Highlighted text from A thousand Plateaus</span>}-

-{Links opened while reading A Thousand Plateaus
ø <span class="research-link" onclick="spawn('A paper explaining french theorists.')">A paper explaining french theorists.</span>
ø <span class="research-link" onclick="spawn('Two Types of Assemblages.')">Two Types of Assemblages.</span>
ø <span class="research-link" onclick="spawn('A Few Thoughts on Kleists Style.')">A Few Thoughts on Kleists Style.</span>}-
    `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "Highlighted text from A thousand Plateaus": {
    title: "Highlighted text from A thousand Plateaus",
    content: `
<img src="assets/Deleuze_and_Guattari_A_Thousand_Plateaus-page10.jpg" class="img-center" style="pointer-events: auto;">↑<span class="research-link" onclick="spawn('Function input VERBS output')">#Function input VERBS output</span>↑
<img src="assets/Deleuze_and_Guattari_A_Thousand_Plateaus-endless 0 and 1.jpg" class="img-center" style="pointer-events: auto;">
<img src="assets/Deleuze_and_Guattari_A_Thousand_Plateaus-and and and.jpg" class="img-center" style="pointer-events: auto;">
<img src="assets/Deleuze_and_Guattari_A_Thousand_Plateaus-map not trace.jpg" class="img-center" style="pointer-events: auto;">
<img src="assets/Deleuze_and_Guattari_A_Thousand_Plateaus-page-4.jpg" class="img-center" style="pointer-events: auto;">
<img src="assets/Deleuze_and_Guattari_A_Thousand_Plateaus-rhizome.jpg" class="img-center" style="pointer-events: auto;">
<img src="assets/Deleuze_and_Guattari_A_Thousand_Plateaus-verieties of measure.jpg" class="img-center" style="pointer-events: auto;">
    `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "A paper explaining french theorists.": {
    title:
      "A paper explaining french theorists, Gilles Deleuze and Felix Guattari, and the ideas found in their seminal work A Thousand Plateaus (1987).",
    content: `https://www.thing.net/~rdom/ecd/rhizomatic.html`,
    type: "link", //"image" - "sound"
    textColor: "#000000",
  },
  "Two Types of Assemblages.": {
    title: "Two Types of Assemblages.",
    content: `https://larvalsubjects.wordpress.com/2011/02/20/two-types-of-assemblages/`,
    type: "link", //"image" - "sound"
    textColor: "#000000",
  },
  "A Few Thoughts on Kleists Style.": {
    title: "A Few Thoughts on Kleists Style.",
    content: `https://mostlyaboutstories.com/a-few-thoughts-on-kleists-style/`,
    type: "link", //"image" - "sound"
    textColor: "#000000",
  },
  /*----------------------------------------------------Fishing for words Content
   */
  "Fishing for words": {
    title: "Fishing for words",
    content: `
Fishing three keywords 
  ¬ Mirroring or reflecting maybe have different meaning but could be the same word define both
  ¬ Scanning then Replicating 
  ¬ Research through object > in-between

((((Meaning of words I encountered: 
plateau الهضاب
fascicular عنقود
aphorism حكمة
ambivalence ازدواجية
Chaosmos فوضى-كون
sobriety رصانة
grass عشب
heterogeneity تردد
pseudo زائف
asignifying رمز الكمبيوتر
cartography رسم الخرائط
decalcomania ديكالكومانيا
genetic axes المحاور الجينية
amenable قابل للتعديل
`,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },

  /*----------------------------------------------------Mapping the Development Content"
                        Included Tags:
                              #How to Notice Dust? 
                              #a list of dust
                              #Folded Cup Diagram
                              #A Thousand Plateaus
                              #Function input VERBS output
                        Included pages:
                                3D print the diagram
                                    #Folded Cup Diagram
                                a rock I found while visiting a Baalbek Roman temple
                                    >>>Meet the Rock here<<< 
                                    Israeli bombing puts ancient ruins at risk, archaeologists warn
                                Temple of the Sun
                                    replication_photogrammetry scan of the rock
                                    replication_3D printing the rock
                                        Noticing the 3D printer deciding on layering the rock.
                                    replication_skewing the rock
                                    replication_on screen 
                                    replication_Computer Numerical Control
                                        Excavating for a replication of the rock
  */
  "Mapping the Development": {
    title: "Mapping the Development",
    content: `<p><del>Observing/reflecting the research development by re-mapping the steps for Amorphous research<del><p> Mapping the Development of Amorphous Research:

«««Configuring dust as matter to ground experimentations in understanding research through computational practice. 

«««The general, simple question is: How do we appreciate and notice dust? On what grounds does the act of noticing become solid and definable toward any sort of matter, in this case, dust? <span class="research-link" onclick="spawn('How to notice dust?')">#How to notice dust?</span>
««Why did I choose dust? 
Because it has many layers of meaning, and from a personal perspective, it has accumulated in my mind the same way it layers on the edge of my bedroom window. It is nonsense; it can be collected, experimented with, and gazed at.
««What type of dust am I looking at? 
I began with dust that was within reach (on my bedside table and my desk) comprising small particles of hair, skin, and textiles. I then expanded my view to consider dust as waste from 3D print recycling in the workshop, which introduced the notion of the disposed or unnoticed object (trash) as dust. The definition of dust is in a constant flow. <span class="research-link" onclick="spawn('a list of dust')">#a list of dust</span>

«««This research eventually developed into a diagram of categorisation. By capturing different aspects of how dust is realized, the diagram transformed into a research tool—a communal platform acting as a layer between the |obsessor|ovservor| and the |obsessed|observed|. Within the intersection of these two perspectives, the acknowledgment of both sides occurs by passing through the layers of the <span class="research-link" onclick="spawn('Folded Cup Diagram')">#Folded Cup Diagram</span>, beginning with the abstract, geological, ecological, theoretical, and experimental, before meeting at the communal.

«««Following feedback and a series of meetings <span class="research-link" onclick="spawn('From A Thousand Plateaus')">#A Thousand Plateaus</span>, I realised that categorisation is limiting to this research. At the same time, visualising my thoughts has increased their visibility, bringing me closer to refining the research question. That is where I decided to <span class="research-link" onclick="spawn('3D print the diagram')">3D print the diagram</span> to clarify its dynamic of flattening the layers of research and topics.

««««In relation to this process of 3D printing, I started looking at the object as a research method located in-between the subject matter. Its dimensions, measurements, and relation to reality comprise or articulate the research method. Would this then question the act of appreciation and noticing dust? Or would it expand the act of care in noticing the observed (dust, in this case), which then intercepts a momentary question of noticing the in-between of the observer and the observed? That then relinquished the perspective points of the observer and the observed because what matters now is the in-between. </span>. for the purpose of this research I named the experiment <span class="research-link" onclick="spawn('Function input VERBS output')">#Function input VERBS output</span>.

««««Repeating the same object in different forms has produced different forms of research; by noticing the in-between, all matter becomes a research method—flowing and intersecting endlessly. In this situation, I have chosen <span class="research-link" onclick="spawn('a rock I found while visiting a Baalbek Roman temple')">a rock I found while visiting a Baalbek Roman temple</span>. for the purpose of this research I named the experiment <span class="research-link" onclick="spawn('Temple of the Sun')">Temple of the Sun</span>.

    `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "3D print the diagram": {
    title: "3D print the diagram",
    content: `
The ability to translate the <span class="research-link" onclick="spawn('Folded Cup Diagram')">#Folded Cup Diagram</span> into a physical object has developed the research. The 3D printer created beads of material laid down by the printers nozzle, which expanded the way I acknowledge the diagram. 
<img src="assets/3DCUP/IMG_9330.jpg" class="inline-image">
<img src="assets/3DCUP/IMG_9333.jpg" class="inline-image">
If each layer in the drawing had a purpose, and if the 3D-printed version was replicating the drawn diagram, I began by asking: what if each bead or any shape, edge, or even the tiny layering (strata) of the print replicated one of the dimensions the diagram proposed? I started imagining that if each bead is an iteration of the research, then the resulting shape of the print will, in turn, shape the research approach or method.
<img src="assets/3DCUP/IMG_9329.jpg" class="inline-image">
<img src="assets/3DCUP/IMG_9331.jpg" class="inline-image">
<img src="assets/3DCUP/IMG_9374.jpg" class="inline-image">
 These extensions are destined to carve the research layers. Here is where two concepts emerged: experimenting on the space in-between, and looking at any subject matter as the form upon which the research method will act. 
÷
÷
÷
÷
÷
÷
÷
÷
÷
÷
÷
÷
÷

A graphic score is creates musical notation system. 
    `,
    type: "text",
    textColor: "#dd260a",
  },
  "a rock I found while visiting a Baalbek Roman temple": {
    title: "a rock I found while visiting a Baalbek Roman temple",
    content: `
<span class="research-link" onclick="spawn('Meet the Rock here')"> >>>Meet the Rock here<<< </span>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Tp6rPIX_wqA?si=H7KYcgQIkwN8oEM1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<img src="assets/ROCK/israel strikes.jpg" class="inline-image">
<a href="https://www.bbc.co.uk/news/articles/c86qp55q3vyo" target="_blank" class="research-link">Israeli bombing puts ancient ruins at risk, archaeologists warn</a>

    `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "Meet the Rock here": {
    title: "Meet the rock",
    content: `<img src="assets/ROCK/Rock-original_9338.jpg" class="img-center">
    <img src="assets/ROCK/Rock-original_9334.jpg" class="img-center">
<img src="assets/ROCK/Rock-original_9335.jpg" class="img-center">
<img src="assets/ROCK/Rock-original_9336.jpg" class="img-center">`,
    type: "text",
    textColor: "#000000",
  },
  "Temple of the Sun": {
    title: "Temple of the Sun experiment",
    content: `This ongoing experiment replicates the rock in different materials and shapes, prompting different ways of communicating with the rock through producing different dimensions of its reality.

<span class="research-link" onclick="spawn('replication_photogrammetry scan of the rock')">replication_photogrammetry scan of the rock</span>
__Holding the rock with a hand,
__Holding the phone holding the rock in my hand,
__Airdropping the rock on the desktop (it didnt break or did it)
__Holding my focus on the rock, through a phone, with a handy hand, by a desktop…

<span class="research-link" onclick="spawn('replication_3D printing the rock')">replication_3D printing the rock</span>
__Using the scan to transfer the rock into the physical dimension.
__<span class="research-link" onclick="spawn('Noticing the 3D printer deciding on layering the rock.')">Noticing the 3D printer deciding on layering the rock.</span>
__Collaborating with the machine. 

<span class="research-link" onclick="spawn('replication_skewing the rock')">replication_skewing the rock</span>
__Changing the topography or the rocks surface, keeping in mind the how would the research become in the rocks different conditions.

<span class="research-link" onclick="spawn('replication_on screen')">replication_on screen</span>
__Using blender slicing the rock into sections, and replicating one of the sections. 

<span class="research-link" onclick="spawn('replication_Computer Numerical Control')">replication_Computer Numerical Control</span>
__Using fusion360-CNC, detailed observation of the rock and its sections. 
__<span class="research-link" onclick="spawn('Excavating for a replication of the rock.')">Excavating for a replication of the rock.</span>
__Its everywhereº 

  <img src="assets/3DROCK/Rock-mirror-repeat-3DP_9339.jpg" class="img-center">

`,
    type: "text",
    textColor: "#000000",
  },
  "replication_photogrammetry scan of the rock": {
    title: "replication_photogrammetry scan of the rock",
    content: "https://www.youtube.com/embed/ZeJ62mYhLms?si=yP6tEicVm9ctWZLf",
    type: "video",
    textColor: "#000000",
  },
  "replication_3D printing the rock": {
    title: "replication_3D printing the rock",
    content: `<img src="assets/3DROCK/Rock-mirror-repeat-3DP_9343.jpg" class="img-center">
    <img src="assets/3DROCK/Rock-mirror-repeat-3DP_9345.jpg" class="img-center">
    <img src="assets/3DROCK/Rock-mirror-repeat-3DP_9346.jpg" class="img-center">
    <img src="assets/3DROCK/Rock-mirror-repeat-3DP_9347.jpg" class="img-center">
    `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "Noticing the 3D printer deciding on layering the rock.": {
    title: "Noticing the 3D printer deciding on layering the rock.",
    content: "https://www.youtube.com/embed/S08Fr4E78GQ?si=W1X_YQoFCjrgU5dH",
    type: "video",
    textColor: "#000000",
  },
  "replication_skewing the rock": {
    title: "replication_skewing the rock",
    content: `<img src="assets/3DROCK/Rock-mirror-repeat-3DP_9340.jpg" class="img-center">
    <img src="assets/3DROCK/Rock-mirror-repeat-3DP_9341.jpg" class="img-center">
   <img src="assets/3DROCK/Rock-mirror-repeat-3DP_9342.jpg" class="img-center"> `,
    type: "text",
    textColor: "#000000",
  },
  "replication_on screen": {
    title: "replication_on screen",
    content: "https://www.youtube.com/embed/mpyhl89jQbw?si=R4WJ9RKr0vH-J0RK",
    type: "video",
    textColor: "#000000",
  },
  "replication_Computer Numerical Control": {
    title: "replication_Computer Numerical Control",
    content: "https://www.youtube.com/embed/KX0sGbiVhEQ?si=g21JXty3F_iUXxrJ",
    type: "video",
    textColor: "#000000",
  },
  "Excavating for a replication of the rock.": {
    title: "Excavating for a replication of the rock.",
    content: "https://www.youtube.com/embed/KHRQZIfc8Lw?si=WE40JR1TLwMJbTSA",
    type: "video",
    textColor: "#000000",
  },

  /*---------------------------------------------------->Modulating the Question تحوير السؤال< Content
                        Included pages:
                                -subject-matter

  */
  ">Modulating the Question<": {
    title: ">Modulating the Question< >تحوير السؤال<",
    content: `<p><del>At this point of developing the research the question that I’m about to ask kinships from the previous proposal and minor experimentation of the physical replication of the object as a research method.<del><p>The replication experiments, communicating with the rock, and the in-between has modulated the research question.<p><del>¡How can the in between be noticed by traveling through the object positioned in the in between?>>the real question might be: What happens to subject/matter when it becomes a tool for research outcomes?<del><p>

How is dust noticed when shaped through selected object? 
    ........................|........................
    <span class="research-link" onclick="spawn('forensic noticing')">#forensic noticing</span>
    ........................|........................    
How to shape research by passing through <span class="research-link" onclick="spawn('subject-matter')">subject-matter?</span>
    .......................º•º.......................
                Collection of followed leads <p><del>Can objects be folded through computational Art-based research?
                 What happens to objects or matter when it<del><p> 
    `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "subject-matter": {
    title: "subject-matter",
    content: `
    <img src="assets/MODU/vibrant matter latour.jpg" class="img-center">
    Bennett, Jane. Vibrant Matter: A Political Ecology of Things.
    `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },

  /*----------------------------------------------------sender and receiver reflection Content
                        Included pages:
                                The Stack: On Software and Sovereignty, a book by Benjamin H. Bratton
                                Textuality is massive addressability,” claims digital humanites scholar, Michael Witmore.11
  */
  "sender and receiver reflection": {
    title: "sender and receiver reflection",
    content: `
A reflection or study on The Address chapter in relation to understanding (sender and receiver) in the context of <span class="research-link" onclick="spawn('The Stack: On Software and Sovereignty, a book by Benjamin H. Bratton')">The Stack: On Software and Sovereignty, a book by Benjamin H. Bratton</span> 

adjacent - sender and receiver

This feels like given steps or elaboration on how to deconstruct or observe the categorical establishment in modern governance, which is interesting because the way I see it with analysing and researching dust computationally/algorithmically without relying on categorical or titling things seems complicated/impossible, but yet possible in the existence, as Bratton puts it: between real physical features of the world and these ideal abstractions that:  measure , codify, explain {scale - similarities - differences}.

Making things measurable makes them visible, it is no longer important(?) if visibility implies something that can be seen or touched, as long as we can measure it. I wanted to point the latter understanding because this part of the text has reminded me that objects are sounds as well. I became too existed about working -visually- with holdable object, and with doing so, I forgot the joy of unholdable objects. The text notes that “At different frequencies, different communication networks are provided specific zones of operation so that they won't interfere with one another, including commercial television, broadcast radio, cellular telephony, satellite communication, aeronautical radio, commercial Internet, and secure military lines”

Not just referring to this part but this thought visited in here:
Although what Im reading currently feels dominated by human interrelations, I would like to look at this book’s content towards a non-post-more than-human perspective. Stating from the text “The Address layer of The Stack develops through both geographical site subdivision and the identification of untethered instances out in the ambient wild, and its governance depends on the linking of one to the other and making them mutually communicable.”

Reading this reinforces my imagination of how the rock of how the <span class="research-link" onclick="spawn('replication_3D printing the rock')">rock</span> can function like the 'book' being explained here. It could become the in-between by connecting different aspects within the layers, in the context of this research, the is the connection and the act of noticing between dust and human, vice versa. This is not limited to dust and human; it is a method that could be applied to any tested matter. 

Perhaps a formula like this: A - X = [the in between journey] - B
A = dust or human - apple - plastic ….
X = rock  or microphone - water ….point of
B = human  or dust - ripe mango - fermented tofu….

“<span class="research-link" onclick="spawn('Textuality is massive addressability,” claims digital humanites scholar, Michael Witmore.11')"> Textuality is massive addressability,” claims digital humanites scholar, Michael Witmore.11</span> The book or physical instance, then, is one of many levels of address. Backing out into a larger population, we might take a genre of works to be the relevant level of address. Or we could talk about individual lines of print; all the nouns in every line; every third character in every third line. All of this variation implies massive flexibility in levels of address. And more provocatively: when we create a digitized population of texts, our modes of address become more and more abstract: all concrete nouns in all the items in the collection, for example, or every item identified as a ‘History’ by Heminges and Condell in the First Folio. Every level is a provisional unity: stable for the purposes of address, but also: stable because it is the object of address. Books are such provisional unities. So are all the proper names in the phone book. … To have this thought is to dispose relevant elements in the dataset in much the same way a spreadsheet aggregates a text in ways that allow for layered access. A reader is a maker [emphasis mine] of such a momentary dispositif, and reading might be described as the continual[…]”

    `,
    type: "text",
    textColor: "#000000",
  },
  "The Stack: On Software and Sovereignty, a book by Benjamin H. Bratton": {
    title:
      "The Stack: On Software and Sovereignty, a book by Benjamin H. Bratton",
    content:
      "https://observatory.constantvzw.org/books/benjamin-h-bratton-the-stack-on-software-and-sovereignty-2.pdf",
    type: "link",
    textColor: "#000000",
  },
  "Textuality is massive addressability,” claims digital humanites scholar, Michael Witmore.11":
    {
      title:
        " Textuality is massive addressability,” claims digital humanites scholar, Michael Witmore.11",
      content: "https://winedarksea.org/?p=926",
      type: "link", //"image" - "sound"
      textColor: "#000000",
    },

  /*----------------------------------------------------Semi-Mutating the research Content
                        Included pages:
                              
  */

  "Semi-Mutating the research": {
    title: "Semi-Mutating the research",
    content: `<p style="color:red;"><del>Repurposing > Transposing > Transmuting > Semi-Transmuting</del> Semi-Mutating the research</p>
This amorphous curiosity is shaping into a research methodologies with the use of <span class="research-link" onclick="spawn('Temple of the Sun')">the Temple of Sun</span> and <span class="research-link" onclick="spawn('a list of dust')">the notion of Dust</span> orbiting and interweaving, coexisting, gravitating.<img src="assets/SEMI/potato.jpg"style="width: 100%; height: auto; display: block; margin: 10px 0;">By engaging with theoretical frameworks, I have identified a pattern/sequence of events where the “in between” morphs into various research methodologies. How does communicating or the journey between the sender and receiver can be analysed and looked at from the research method aspect (such as: AXB). <img src="assets/SEMI/wordshighlight-01.jpg"style="width: 30%; height: 30; display: block; margin: 10px 0;">For now, the beginning involves finding topics until further notice. This emphasis on 'notice' brings back the question of noticing and appreciating of being both touchable and visible. The trajectory of this research orbit between Temple of Sun and the notion of Dust, while they both intertwine with all their agency. I have chosen different topics to pass through this orbit; by this passing, the outcomes are gravitated toward and informed by the exchange of information.
The topics I have chosen were found during the previous encounters while experimenting with Amorphous Research: 
<span class="research-link" onclick="spawn('Untilled')">Untilled by Pierre Huyghe.</span>
<span class="research-link" onclick="spawn('Entropy')">Entropy.</span>
<span class="research-link" onclick="spawn('Difference and Repetition')">Difference and Repetition by Gilles Deleuze.</span>
<span class="research-link" onclick="spawn('Chiasm')">The Chiasm by Merleau-Ponty.</span><img src="assets/SEMI/Amorphous-research-diagram-semi.jpg"style="width: 70%; height: 70; display: block; margin: 10px 0;">By assembling the above aspects within the movement of the research as <span class="research-link" onclick="spawn('semi-mutations potato')">semi-mutations.</span> I can identify the research map that includes the diagram, the print, the object, the condition, exchanging effectiveness within this research methodology to create infinite proposals, outputs, and experiments. 

Research based-art includes different approaches to the subject/matter that would be: questioned explained elaborated interacted exposed experimented directed investigated refined rinsed purposed interfered disordered ordered...... . . .   .   .    .     .
Computational research-based art <span class="research-link" onclick="spawn('Function input VERBS output')">functions</span> by modulating approaches to subject matter. The object here is the knowledge elaborated from various critical theories. I will write down what I understood from the text and how it might intertwine research between dust and rock. How could applied infomrationthe evolve by engaging with dust and rock?

      `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "semi-mutations potato": {
    title: "semi-mutations potato",
    content: "https://www.youtube.com/embed/eGDLc2Dq_A0?si=-z5MhlvSVMISOkwO",
    type: "video",
    textColor: "#000000",
  },
  "Untilled": {
    title: "Topic_01: Untilled by Pierre Huyghe.",
    content: `
Computational research-based art is functioning the approaches to the subject/matter. The object here is the knowledge that is elaborated from different available critical theories; I will write down what I have understood or related to the text and how it could intertwine research between, but not limited to, dust and rock.  <span class="research-link" onclick="spawn('0.0000001 <-> 1')">0.0000001 <-> 1.</span>

For now, the beginning is finding topics until further notice. Emphasis on the notice brings back the question of noticing and appreciating, being touchable and visible.

Researching: <span class="research-link" onclick="spawn('Pierre Huyghe')">Pierre Huyghe</span>
Art project: <span class="research-link" onclick="spawn('Untilled')">Untilled</span>

The observation of objects and time within scale and interconnection: what is interconnected becomes interdependent.

The criticality of interconnections prevents telepathy, and telepathy is a ‘bypass’; it skips all the layers of the making.

Pierre Huyghe acknowledges the ecological interrelation within the elements in specific locations.

Research the space interdependently (maybe a different word), but connect between unnecessary elements or matter to make them necessary, which is already happening even before Pierre noticed the compost in the park. I am thinking that this is one of the core aspects in research art.

‘Untilled’ (2012), and from looking at the picture of the site-specific art project: while it is located in a compost section at a park, the area becomes an artwork by becoming part of a decision to be looked at and noticed—all the ecological, geological, chemical, living, and decayed substances or elements noticed in this multilayered space where it seems that even the smallest micro-living and dead matter is recognised and intertwines. Like how everything inside and outside the poem becomes this poem just from reading it (present).

Huyghe recognises the ‘in-between’. This is helpful to this research method to scan and analyse his approach to space and site-specificity, and what it produces in time and space.

>>>Meanwhile, the structure of the research is becoming more visible and formulating into an entity that can be questioned, to become an experiment, to become unanswered.>> 

Research through objects located in-between changes the way the dialogue happens between A and B.

Through looking at Huyghe’s way of thinking, I believe that the X of the diagram, which represents the in-between if A and B disintegrate, [works] with the contingency of the activities between the elements in the chosen space. I am mainly looking at ‘Untilled’______

Interrelation appears at the meeting point between rock and dust.


The first outcome from Untilled:
The research method between dust and rock will become in relation to the space they are in, and everything that is in this space, which then will include a computational approach to make visible those connections. For the time being, the space that the rock and dust are in is located at the university HatchLab, which means the HatchLab becomes the in-between/interrelation of the rock and dust; the elements in the HatchLab condition the dialogue between rock and dust and us.

The dialogue will grow attached to:
Constant variation
Leave them in suspension
It circulates again but in a different way - decompose
Eternal return - separation
Contingency - entities"

    `,
    type: "text",
    textColor: "#000000",
  },
  "Pierre Huyghe": {
    title: "Links to Pierre Huyghe's work and interviews",
    content: ``,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "Untilled": {
    title: "Links used to understand the art project 'Untilled' by Pierre Huyghe.",
    content: ``,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "0.0000001 <-> 1": {
    title: "0.0000001 <-> 1.",
    content: `https://api.pageplace.de/preview/DT0400.9780191520280_A23533887/preview-9780191520280_A23533887.pdf`,
    type: "link", 
    textColor: "#000000",
  },

  "Entropy": {
    title: "Entropy.",
    content: ``,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "Difference and Repetition": {
    title: "Difference and Repetition",
    content: ``,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  Chiasm: {
    title: "The Chiasm by Merleau-Ponty",
    content: ``,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },



  "": {
    title: "",
    content: ``,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "": {
    title: "",
    content: ``,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "": {
    title: "",
    content: ``,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "": {
    title: "",
    content: ``,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "": {
    title: "",
    content: ``,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },
  "": {
    title: "",
    content: ``,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },

};

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0); // Forces the canvas to the absolute top-left corner

  // Create the dust particles or initiating dust
  for (let i = 0; i < numParticles; i++) {
    dustParticles.push(new Dust());
  }

  // Starting Button or UI setup
  let startBtn = createButton("Amorphous Research");
  startBtn.position(width / 2, height / 2);
  startBtn.addClass("research-link");
  startBtn.mousePressed(() => spawn("start"));

  // triggering open all
  let openAllBtn = createButton("all at once");
  openAllBtn.position(20, height - 60); // Bottom left
  openAllBtn.addClass("research-link"); // Keep your minimalist style
  openAllBtn.style("font-size", "10px");
  openAllBtn.style("color", "#0033ff");
  openAllBtn.mousePressed(openAllResearch);

  // Inside setup()
  let randomBtn = createButton("random at once");
  randomBtn.position(20, height - 40);
  randomBtn.addClass("research-link"); // Keep the minimalist style
  randomBtn.style("font-size", "10px");
  randomBtn.style("color", "#0033ff");
  randomBtn.mousePressed(() => spawnRandom(6)); // Opens 6 random windows
}

function draw() {
  // background(255);
  clear();

  // Grid background to look like drafting paper
  stroke(255, 0, 0);
  strokeWeight(0.03);
  for (let i = 0; i < width; i += 12) line(i, 0, i, height);
  for (let i = 0; i < height; i += 12) line(0, i, width, i);

  // Update and display each dust particle
  for (let i = 0; i < dustParticles.length; i++) {
    dustParticles[i].update();
    dustParticles[i].show();
  }
}

// Global function so the HTML links can call it
window.spawn = function (id) {
  let item = researchData[id];
  if (!item) return;

  // 1. Find the "Parent" window that was just clicked
  let parentPath = "";
  if (window.event && window.event.target) {
    let parentWindow = window.event.target.closest(".win-box");
    if (parentWindow) {
      // Get the path already stored on the parent window
      parentPath = parentWindow.getAttribute("data-path") + " / ";
    }
  }

  // 2. Create the new full path
  let fullPath = parentPath + item.title;

  // 3. Pass that path to the window creator
  createWindow(item, fullPath);
};

window.spawnRandom = function (count) {
  // 1. Get all IDs
  let allKeys = Object.keys(researchData);

  // 2. Filter out 'start' AND any window that is already open on the screen
  let openWindowTitles = selectAll(".win-box").map((div) => {
    // Get the title text from the header of currently open windows
    return div.elt.querySelector(".win-header span").innerText;
  });

  let availableKeys = allKeys.filter((key) => {
    let item = researchData[key];
    return key !== "start" && !openWindowTitles.includes(item.title);
  });

  // 3. If everything is already open, reset (or do nothing)
  if (availableKeys.length === 0) {
    console.log("All research nodes are already on the desk.");
    return;
  }

  // 4. Shuffle available items
  for (let i = availableKeys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [availableKeys[i], availableKeys[j]] = [availableKeys[j], availableKeys[i]];
  }

  // 5. Spawn the requested number
  let selection = availableKeys.slice(0, count);
  selection.forEach((id, index) => {
    setTimeout(() => spawn(id), index * 200);
  });
};

function createWindow(item) {
  let winW = 600;
  let winH = 400;

  // 1. Calculate Staggered Position
  // Starts near center, but moves 30px per new window
  let startX = (windowWidth - winW) / 2;
  let startY = (windowHeight - winH) / 2;

  let offsetX = startX + windowStack * 30;
  let offsetY = startY + windowStack * 30;

  // Increment stack and reset if it goes too far off screen
  windowStack++;
  if (windowStack > 10) windowStack = 0;

  let win = createDiv();
  win.addClass("win-box");
  win.position(offsetX, offsetY);
  win.style("width", winW + "px");
  win.style("height", winH + "px");
  win.style("z-index", zIndexCounter++);

  win.mousePressed(() => {
    win.style("z-index", zIndexCounter++);
  });

  // --- HEADER ---
  let header = createDiv(`<span>${item.title}</span>`);
  header.addClass("win-header");
  header.parent(win);

  let closeBtn = createButton("X");
  closeBtn.addClass("close-btn");
  closeBtn.parent(header);
  closeBtn.mousePressed(() => win.remove());

  // --- BODY (Now only contains Content) ---
  let body = createDiv();
  body.addClass("win-body");
  body.parent(win);

  let contentPane = createDiv();
  contentPane.addClass("content-pane");
  contentPane.parent(body);

  // Fill content
  if (item.type === "text") {
    contentPane.html(item.content);
  } else if (item.type === "image") {
    let img = createImg(item.content, "");
    img.style("width", "100%");
    img.parent(contentPane);
  } else if (item.type === "link") {
    let frame = createElement("iframe");
    frame.attribute("src", item.content);
    frame.parent(contentPane);
  } else if (item.type === "sound") {
    let audio = createElement("audio");
    audio.attribute("controls", "");
    audio.attribute("src", item.content);
    audio.parent(contentPane);
  }

  // Add this line to apply the color from your data
  if (item.textColor) {
    contentPane.style("color", item.textColor);
  }

  if (item.type === "text") {
    contentPane.html(item.content);
    if (item.textColor) contentPane.style("color", item.textColor);
  }

  // Handling External Webpages
  else if (item.type === "link") {
    let frame = createElement("iframe");
    frame.attribute("src", item.content);
    frame.style("width", "100%");
    frame.style("height", "100%");
    frame.style("border", "none");
    frame.parent(contentPane);
  }

  // Handling Videos (YouTube/Vimeo)
  else if (item.type === "video") {
    let videoFrame = createElement("iframe");
    // Use the content URL from your library
    videoFrame.attribute("src", item.content);

    // These attributes are necessary for YouTube to work correctly
    videoFrame.attribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    );
    videoFrame.attribute("allowfullscreen", "");

    videoFrame.style("width", "100%");
    videoFrame.style("height", "100%");
    videoFrame.style("border", "none");
    videoFrame.parent(contentPane);
  }

  // Handling Images
  else if (item.type === "image") {
    let img = createImg(item.content, "");
    img.style("width", "100%");
    img.parent(contentPane);
  } else if (item.type === "ticker") {
    let tickerContainer = createDiv();
    tickerContainer.addClass("ticker-window-content");
    tickerContainer.parent(contentPane);

    // We write the text twice so it loops seamlessly
    let phrases = item.content + " " + item.content;

    let tickerText = createDiv(phrases);
    tickerText.addClass("ticker-inner");
    tickerText.parent(tickerContainer);
  }
  bindDrag(win, header);

  if (item.hasScribble) {
    addScribbleEffect(contentPane);
  }
}

// SIMPLIFIED DRAG (No boundaries, no squishing)
function bindDrag(win, header) {
  let isDragging = false;

  header.elt.onmousedown = () => {
    isDragging = true;
  };

  window.addEventListener("mousemove", (e) => {
    if (isDragging) {
      // Get current position
      let curX = win.elt.offsetLeft;
      let curY = win.elt.offsetTop;

      // Move by the amount the mouse moved (e.movementX/Y)
      win.position(curX + e.movementX, curY + e.movementY);
    }
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });
}

function addScribbleEffect(parentDiv) {
  let canvas = document.createElement("canvas");
  canvas.classList.add("scribble-canvas");
  parentDiv.elt.appendChild(canvas);
  let ctx = canvas.getContext("2d");

  // Set internal resolution
  canvas.width = parentDiv.elt.offsetWidth;
  canvas.height = parentDiv.elt.offsetHeight;

  let points = [];
  for (let i = 0; i < 1000; i++) {
    points.push({
      x: random(canvas.width),
      y: random(canvas.height),
      vx: random(-0.005, 0.5),
      vy: random(0.5, 0.005),
    });
  }

  function animate() {
    if (!document.body.contains(canvas)) return; // Stop if window closed

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the "Amorphous" Scribble
    ctx.beginPath();
    ctx.strokeStyle = "rgb(255, 0, 0)"; // Minimalist black
    ctx.lineWidth = 0.5;

    for (let p of points) {
      // Jitter movement
      p.x += p.vx + random(-2, 2);
      p.y += p.vy + random(-2, 2);

      // Keep inside bounds
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.lineTo(p.x, p.y);
    }

    ctx.stroke();
    requestAnimationFrame(animate);
  }

  animate();
}

function windowResized() {
  // Keeps it full screen even if the user changes window size
  resizeCanvas(windowWidth, windowHeight);
}

window.openAllResearch = function () {
  // Object.keys gets a list of every ID in your researchData
  let allIDs = Object.keys(researchData);

  allIDs.forEach((id, index) => {
    // We add a tiny delay for each window so the browser doesn't crash
    // and the stacking animation looks smoother
    setTimeout(() => {
      spawn(id);
    }, index * 100); // Opens one every 0.1 seconds
  });
};
