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
  */
  start: {
    title: "Amorphous Research || Dust",
    content: `
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


This website was created to transfer and share information about an ongoing research that is Amorphous about Dust. Dust has not been specified until now. 

The Amorphous Research began with curiosity of how do we notice and understand things, concentrating on dust as the subject/matter. How can I translate dust? From getting to know dust, this research has been sprouting into different directions in the presence of the question, curiosity. 

I would like to start my research with translating the notion of dust. It has been an interest for me to understand the meaning of dust with its different layers of availability.

By integrating dust in computational research practice, I could find different ways or means of understanding these unseen or unnoticed elements in the environment around us.

Many questions might evolve or could be introduced through the research process.`,
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
    content: `<img src="assets/Amorphous-research-diagram-01.jpg" class="img-center" >
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

In a computer, the logic is: input – measure (verb) – output.

When I remove 'measure' and replace it with other verbs—for example: drive, experiment, investigate, explore, poke, collect, observe, eat, walk—the research shifts. At that point, in Amorphous Research, finding the answer or shaping matter for an output (or outcome) becomes a way to observe subject matter through objects, which then initiated the idea of "in-between-ness".<span class="research-link" onclick="spawn('From A Thousand Plateaus')">#A Thousand Plateaus</span>

<img src="assets/Gemini_Generated_Image_fckrb9fckrb9fckr.jpg" class="img-center">
This image was generated by Gemini as an outcome of the text above. I do not fully agree with its logic, as the output is always moving and changing. However, it interests me how the machine calculated this image based on the previous text inputs regarding the grammar and spelling corrections of my research.

`,
    type: "text",
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
                                How to Notice Dust? 
                        Included pages:
                                
                                
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

  // explain how an error in the orinting uncovered a emthod of acknowledging any object as a research method
  "3D print the diagram": {
    title: "3D print the diagram",
    content: `
The ability to translate the folded cup diagram into a physical object has developed the research. The 3D printer created beads of material laid down by the printers nozzle, which expanded the way I acknowledge the diagram. 
<img src="assets/3DCUP/IMG_9330.jpg" class="inline-image">
<img src="assets/3DCUP/IMG_9333.jpg" class="inline-image">
<img src="assets/3DCUP/IMG_9331.jpg" class="inline-image">
<img src="assets/3DCUP/IMG_9374.jpg" class="inline-image">
<img src="assets/3DCUP/IMG_9329.jpg" class="inline-image">

If each layer in the drawing had a purpose, and if the 3D-printed version was replicating the drawn diagram, I began by asking: what if each bead or any shape, edge, or even the tiny layering (strata) of the print replicated one of the dimensions the diagram proposed? I started imagining that if each bead is an iteration of the research, then the resulting shape of the print will, in turn, shape the research approach or method. These extensions are destined to carve the research layers. Here is where two concepts emerged: experimenting on the space in-between, and looking at any subject matter as the form upon which the research method will act. 
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
    content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Tp6rPIX_wqA?si=H7KYcgQIkwN8oEM1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<img src="assets/ROCK/israel strikes.jpg" class="inline-image">
<a href="https://www.bbc.co.uk/news/articles/c86qp55q3vyo" target="_blank" class="research-link">Israeli bombing puts ancient ruins at risk, archaeologists warn</a>
    `,
    type: "text", //"image" - "sound"
    textColor: "#000000",
  },

  // add images of rock
  // add images of experimtent and video
  "Temple of the Sun": {
    title: "Temple of the Sun",
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

  /*----------------------------------------------------Modulating the Question Content
                        Included pages:
                                -
                                -
  */

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
  "": {
    title: "",
    content: `
      `,
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
  /*----------------------------------------------------Repurposing the research Content
                        Included pages:
                                -
                                -
  */
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
